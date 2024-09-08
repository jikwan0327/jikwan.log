import React from 'react'

type TextProps = {
  text: string
}

const Text = function ({ text }: TextProps) {
  return <div>{text}</div>
}

export default Text
