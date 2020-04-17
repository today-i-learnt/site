import React from 'react'

import { Link } from 'gatsby'
import useSiteMetadata from '../../hooks/use-site-metadata'

import './header.scss'

const Header = () => {
  const { title } = useSiteMetadata()

  return (
    <header>
        <h1 className="heading">
          <Link to="/" title={`${title} - Back to home`}>
            {title}
          </Link>
        </h1>
        {/* <ColorModeToggle isDark={isDark} toggle={toggleColorMode} /> */}
    </header>
  )
}

export default Header
