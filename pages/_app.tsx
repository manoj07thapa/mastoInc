import '../styles/globals.css'
import '../amplifyConfig'
import type { AppProps } from 'next/app'
import { useMemo } from "react";
import { ThemeProvider } from "next-themes";
import Navbar from '../components/header/Navbar'
import { UserContext } from "../contexts/UserContext";
import { useRouter } from "next/router";
import { useAuthUser } from "../hooks/useAuthUser";


export default function App({ Component, pageProps }: AppProps) {
  const { user, setUser } = useAuthUser()

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
