import React, { useEffect } from 'react'
import styles from './index.module.scss'
import classnames from 'classnames'
import { lockBody } from 'lib/helpers'
import { IconClose, IconClear } from 'components/icons'
import { ButtonFab } from 'components/atoms'

type Props = {
  content: React.ReactNode
  small?: boolean
  open?: boolean
  fullHeight?: boolean
  closeFunc?: Function
  openLocation?: 'left' | 'right' | 'center' | 'bottom' | 'none'
}

const contentStyleGet = {
  center: ''
}

const SidePopup: React.FC<Props> = ({
  small,
  content,
  open,
  fullHeight = false,
  closeFunc,
  openLocation = 'left'
}) => {
  const closeBtnStyle = classnames()
  // styles.refineSearchBtnClose,
  // styles[openLocation]
  // styles[openLocation]
  const contentStyle = classnames(
    'px-4 bg-white z-40',
    styles.wrapper,
    small && 'max-w-sm',
    fullHeight && styles.fullHeight,
    // styles[openLocation],
    contentStyleGet[openLocation]
  )

  useEffect(() => {
    if (open) {
      lockBody(true)
    } else {
      lockBody(false)
    }
  }, [open])

  return (
    open && (
      <>
        <div className="z-50 absolute w-full top-0 flex justify-center items-center h-screen backdrop-blur-sm bg-black bg-opacity-25">
          <section className="bg-white w-full max-w-md m-auto rounded shadow-md relative">
            <ButtonFab
              classNames="bg-white shadow rounded-full w-10 h-10 flex justify-center items-center -mt-4 absolute right-4"
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
