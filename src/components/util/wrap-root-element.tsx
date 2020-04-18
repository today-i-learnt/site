import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Code } from '../code/code'
import { preToCodeBlock } from 'mdx-utils'

const components = {
  pre: preProps => {
    const props = preToCodeBlock(preProps)
    if (props) {
      return <Code {...props} />
    } else {
      return <pre {...preProps} />
    }
  },
}
export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
)
