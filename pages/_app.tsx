import '../styles/globals.css'
import '../amplifyConfig'
import type { AppProps } from 'next/app'
import { useMemo, ReactNode, ReactElement } from "react";
import { ThemeProvider } from "next-themes";
import { UserContext } from "../contexts/UserContext";
import { useAuthUser } from "../hooks/useAuthUser";
import type { NextPage } from "next";
import GlobalLayout from '../components/layouts/GlobalLayout';
import { log } from 'console';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const { user, setUser } = useAuthUser()
  console.log(user)

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  const getLayout = Component.getLayout ?? ((page) => (


    <GlobalLayout>
      {page}
    </GlobalLayout>


  ))

  return (
    <UserContext.Provider value={value}>
      <ThemeProvider enableSystem={true} attribute="class">
        {getLayout(
          <Component {...pageProps} />
        )}
      </ThemeProvider>
    </UserContext.Provider>
  )
}
