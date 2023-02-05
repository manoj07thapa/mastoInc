import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-gray-200 dark:bg-slate-900 text-slate-800 dark:text-slate-200'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
