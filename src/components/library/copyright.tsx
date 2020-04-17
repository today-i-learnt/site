import React from 'react'

type Props = {
  name: string
}

export default function Copyright({ name }: Props) {
  return (
    <>
      Copyright &copy; {new Date().getFullYear()} by {name}.
    </>
  )
}
