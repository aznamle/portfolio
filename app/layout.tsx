import NavBar from '@/components/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Nam Le's Portfolio",
  description: "Nam Le Portfolio",
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='container mx-auto max-w-5xl space-y-8'>
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
