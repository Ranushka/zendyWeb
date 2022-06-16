import React from 'react'
import classnames from 'classnames'
import { lockBody } from 'lib/helpers'
import { IconClear } from 'components/icons'
import { ButtonFab } from 'components/atoms'

type Props = {
  content: React.ReactNode
  small?: boolean
  open?: boolean
  fullHeight?: boolean
  closeFunc?: Function
  openLocation?: 'left' | 'right' | 'center' | 'bottom' | 'none'
}

const wrapperStyleMapping = (place) => {
  const locationList = {
    center: 'justify-center',
    left: ''
  }

  return locationList[place]
}

const contentStyleMapping = (place) => {
  const locationList = {
    center: '',
    left: 'w-9/12'
  }

  return locationList[place]
}

const buttonStyleMapping = (place) => {
  const locationList = {
    center: '-mt-4 absolute right-4',
    left: 'absolute -right-12 top-4'
  }

  return locationList[place]
}

const SidePopup: React.FC<Props> = ({
  // small,
  content,
  open,
  fullHeight = false,
  closeFunc,
  openLocation = 'center'
}) => {
  React.useEffect(() => {
    if (open) {
      lockBody(true)
    } else {
      lockBody(false)
    }
  }, [open])

  const contentWrapperStyles = classnames(
    'fixed w-full left-0 top-0 flex items-center h-screen backdrop-blur-sm bg-black bg-opacity-25 z-50',
    wrapperStyleMapping(openLocation)
  )

  const innerContentStyles = classnames(
    'bg-white w-full max-w-md rounded shadow-md relative',
    fullHeight && 'h-screen',
    contentStyleMapping(openLocation)
  )

  const buttonStyles = classnames(
    'bg-white shadow rounded-full w-10 h-10 flex justify-center items-center',
    buttonStyleMapping(openLocation)
  )

  return (
    open && (
      <>
        <div className={contentWrapperStyles}>
          <section className={innerContentStyles}>
            <ButtonFab
              classNames={buttonStyles}
              onClick={() => closeFunc(false)}
              icon={<IconClear />}
            />
            {content}
          </section>
        </div>
      </>
    )
  )
}

export default SidePopup
