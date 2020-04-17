import React from 'react'

import useSiteMetadata from '../../hooks/use-site-metadata'

import './footer.scss'
import Copyright from '../library/copyright'

export default function Footer() {
  const { title } = useSiteMetadata()

  return (
    <footer>
      <p className="secondary">
        <Copyright name={title} />
      </p>
      <div className="disclaimer">
        <p>Content copyright belongs to the respective author(s)</p>
        <p>Source code available under the MIT license</p>
      </div>
    </footer>
  )
}
