import { Space_Grotesk, DM_Sans } from "next/font/google"
import "./globals.css"
import "./theme.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "600"],
})

export const metadata = {
  title: "Inblaj Creative - Digital Agency",
  description: "Where light emerges from darkness. Professional digital agency specializing in creative solutions.",
  generator: "v0.app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <head>
        <style>{`
          html {
            --font-heading: ${spaceGrotesk.style.fontFamily};
            --font-body: ${dmSans.style.fontFamily};
          }
        `}</style>
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  )
}
