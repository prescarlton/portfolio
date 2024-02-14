import cx from "classnames"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import { GeistSans } from "geist/font/sans"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Preston Carlton",
  description: "Preston Carlton | Software Developer",
}
dayjs.extend(relativeTime)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cx(GeistSans.className)}>{children}</body>
    </html>
  )
}
