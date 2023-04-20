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
    <html lang="he">
      <body>{children}</body>
    </html>
  )
}
