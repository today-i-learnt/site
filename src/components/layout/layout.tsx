import React from 'react'

import Header from './header'
import Footer from './footer'
import SEO from '../seo/seo'

import './layout.scss'

type LayoutProps = { children: React.ReactNode; className?: string }

export default function Layout({ children, className }: LayoutProps) {
  return (
    <>
      <SEO />
      <Header />
      <main id="skip-nav" className={className}>
        {children}
      </main>
      <Footer />
    </>
  )
}
