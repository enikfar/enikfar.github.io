import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Image from 'next/image'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ehsan Nikfar - Personal Website',
  description: 'Personal website of Ehsan Nikfar, Computer Science student at Columbia University',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900`}>
        <div className="min-h-screen flex flex-col md:flex-row max-w-7xl mx-auto">
          {/* Sidebar */}
          <aside className="md:w-1/3 lg:w-1/4 p-6 border-r border-gray-200 flex flex-col items-center bg-gray-50">
            <h1 className="text-3xl font-bold text-center mb-2">Ehsanullah<br/>(Ehsan) Nikfar</h1>
            <div className="mb-2">
              <Image
                src="/profile.jpg"
                alt="Ehsan Nikfar profile photo"
                width={200}
                height={200}
                className="rounded-lg border shadow"
              />
            </div>
            <p className="text-gray-500 text-sm mb-2 text-center">How to pronounce: "Ehsan" as in "eh-sahn", "Nikfar" as "Nick-far"</p>
            <div className="flex gap-3 mb-4">
              <a href="https://linkedin.com/in/EhsanNikfar" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><img src="/linkedin.svg" alt="LinkedIn" className="w-6 h-6"/></a>
              <a href="https://github.com/enikfar" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><img src="/github.svg" alt="GitHub" className="w-6 h-6"/></a>
              <a href="mailto:en2572@columbia.edu" aria-label="Email"><img src="/email.svg" alt="Email" className="w-6 h-6"/></a>
            </div>
            <nav className="flex flex-col gap-2 mt-2 text-blue-600 text-sm">
              <a href="#about" className="hover:underline">ABOUT</a>
              <a href="#education" className="hover:underline">EDUCATION</a>
              <a href="#experience" className="hover:underline">EXPERIENCE</a>
              <a href="#projects" className="hover:underline">PROJECTS</a>
              <a href="#awards" className="hover:underline">AWARDS</a>
              <a href="#hobbies" className="hover:underline">HOBBIES</a>
            </nav>
          </aside>
          {/* Main Content */}
          <main className="flex-1 p-6 md:p-12">{children}</main>
        </div>
      </body>
    </html>
  )
} 