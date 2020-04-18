import React from 'react'
import Highlight, {
  defaultProps,
  Language,
  PrismTheme,
} from 'prism-react-renderer'
import duotoneLight from 'prism-react-renderer/themes/duotoneLight'

import './code.scss'

type Props = {
  codeString: string
  language: Language
}

export const Code = ({ codeString, language }: Props) => {
  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={duotoneLight as PrismTheme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
