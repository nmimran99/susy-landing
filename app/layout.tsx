import Head from 'next/head'
import Navbar from './compnents/Navbar'
import './globals.css'

export const metadata = {
  title: 'Medicina con Susy',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl">
      <Head>
      <script
          dangerouslySetInnerHTML={{
            __html: `
          function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          }(window,document,'script','dataLayer','GTM-KCD7KWQC');
          `,
          }}>
        </script>
      </Head>
      <body>
        <Navbar />
        {children}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KCD7KWQC"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />
        </body>
    </html>
  )
}
