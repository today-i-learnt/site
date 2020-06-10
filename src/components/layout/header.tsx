import React from 'react'

import { Link } from 'gatsby'
import logo from './logo.svg'
import useSiteMetadata from '../../hooks/use-site-metadata'

import './header.scss'

const Header = () => {
  const { title } = useSiteMetadata()

  return (
    <header>
        <Link to="/" title={`${title} - Back to home`}>
          <img className="logo" src={logo} alt={title} />
        </Link>
    </header>
  )
}

export default Header
