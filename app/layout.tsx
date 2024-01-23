import React from "react";
import {GlobalNav} from "@/ui/GlobalNav";
import './globals.css'
import style from './layout.module.css'
import {LayoutFooter} from "@/ui/layoutFooter";
import {AddSiteVisitorRecords, SiteVisitorRecords} from "@/api/siteVisitorRecords";
export const metadata = {
  title: 'linround',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const theme = 'light'
  return (
    <html data-theme={theme}>
      <body>
      <div className={style.container}>
        <GlobalNav />
        <div className={style.content}>
          {children}
        </div>
        <LayoutFooter />
      </div>


      <SiteVisitorRecords/>
      <AddSiteVisitorRecords />
      </body>
    </html>
  )
}
