'use client'

import { ReactNode } from 'react'
import Header from '../Header/Header'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header/>
      {/* Sidebar */}
      {/* Breadcrumbs */}
      <main>{children}</main>
    </div>
  )
}