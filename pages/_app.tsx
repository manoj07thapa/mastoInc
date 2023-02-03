import '../styles/globals.css'
import '../amplifyConfig'
import type { AppProps } from 'next/app'
import { useState, useEffect, useMemo } from "react";
import { Auth } from "aws-amplify";
import { ThemeProvider } from "next-themes";
import Navbar from '../components/header/Navbar'
import { UserContext } from "../contexts/UserContext";
import { useRouter } from "next/router";

type UserProp = {
  username: string,
  attributes: {
    email: string,
    name: string,
    phone_number: string,
    sub: string
  },

}

export default function App({ Component, pageProps }: AppProps) {


  const [user, setUser] = useState<UserProp | null>(null);


  useEffect(() => {
    async function authListner() {
      const user = await Auth.currentAuthenticatedUser();
      setUser(user);
    }
    authListner();
  }, [setUser, user]);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <UserContext.Provider value={value}>
      <ThemeProvider enableSystem={true} attribute="class">
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </UserContext.Provider>
  )
}
