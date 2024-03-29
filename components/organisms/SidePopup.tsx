import React from 'react'
import classnames from 'classnames'
import lockBody from 'helpers/lockBody'
import { IconClear } from 'components/icons'
import { ButtonFab } from 'components/atoms'

/* __DOC

SidePopup

DOC__ */

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
    left: 'absolute -right-5 top-4 z-10'
  }

  return locationList[place]
}

const SidePopup: React.FC<Props> = ({
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
    'fixed w-full h-full left-0 top-0 flex items-center',
    'backdrop-blur-sm bg_backdrop 5 z-50',
    wrapperStyleMapping(openLocation)
  )

  const innerContentStyles = classnames(
    'bg_white w-full max-w-md rounded relative',
    fullHeight && 'h-full',
    contentStyleMapping(openLocation)
  )

  const buttonStyles = classnames(
    'bg_white rounded-full w-10 h-10 flex justify-center items-center',
    buttonStyleMapping(openLocation)
  )

  if (!open) return <></>

  return (
    <div className={contentWrapperStyles}>
      <section className={innerContentStyles}>
        <ButtonFab
          dataName="SidePopupClose"
          classNames={buttonStyles}
          onClick={() => closeFunc(false)}
          icon={<IconClear className="scale-125" />}
        />
        <span className="scale-125"></span>
        {content}
      </section>
    </div>
  )
}

export default SidePopup
