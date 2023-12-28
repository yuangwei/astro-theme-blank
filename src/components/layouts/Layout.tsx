import type { BaseProps } from "@/types/react"
import Head from "./Head"
import "@/styles/global.css";

export default function Layout({ children }: BaseProps) {
  return (
    <html lang="en">
      <Head />
      <body>
        {children}
      </body>
    </html>
  )
}