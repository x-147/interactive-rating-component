import './globals.css'
import { Overpass } from 'next/font/google'

const overpass = Overpass({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export const metadata = {
  title: 'Frontend Mentor | Interactive rating component',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={overpass.className}>{children}</body>
    </html>
  )
}
