import React from 'react'
import { Link } from 'gatsby'

type TagsProps = {
  tags: string[]
}

const ItemTags = ({ tags }: TagsProps) => {
  return (
    <>
      {tags.map((tag, i) => (
        <span key={tag}>
          {!!i && `, `}
          {/* <Link to={`/tags/${tag}`}> */}
          {tag}
          {/* </Link> */}
        </span>
      ))}
    </>
  )
}

export default ItemTags
