import * as React from 'react'

type Props = {
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7
  style?: object
}

const Space: React.FC<Props> = (props) => {
  const { size = 4, style } = props
  const finalClass = `gaps__${size}`

  return <div className={finalClass} style={style} />
}

export default Space
