import React from 'react'

import './title.scss'

type Props = {
  children?: React.ReactNode
  as?: string
  className?: string
  text: string
}

export default function Title({ text, children, as = `h2`, className }: Props) {
  return (
    <div className="title">
      <h2>{text}</h2>
      <span>{children}</span>
    </div>
  )
}
