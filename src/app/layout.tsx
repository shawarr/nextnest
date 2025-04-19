import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NextNest',
  description: 'Your full-stack Next.js learning project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-blue-600 text-white p-4 flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </header>
        <main className="p-6">{children}</main>
        <footer className="bg-gray-200 p-4 text-center text-sm">
          &copy; {new Date().getFullYear()} NextNest 🚀
        </footer>
      </body>
    </html>
  )
}
