import Navbar from './compnents/Navbar'
import './globals.css'
import { GoogleTagManager } from '@next/third-parties/google' 

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
      <GoogleTagManager gtmId="'GTM-KCD7KWQC" />
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
