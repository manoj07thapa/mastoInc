import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-gray-100 dark:bg-slate-900 text-slate-800'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
