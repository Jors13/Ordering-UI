import React, { useEffect, useRef } from 'react'
import FiShare2 from '@meronex/icons/fi/FiShare2'
import { ProductShare as ProductShareController } from 'ordering-components'

import {
  IconShare,
  ShareButtons
} from './styles'

const ProductShareUI = (props) => {
  const {
    updateShowValue,
    showShareButton,
    urlToShare
  } = props

  const iconElement = useRef()
  const contentElement = useRef()

  const handleClickOutside = (e) => {
    const outsideIcon = !iconElement.current?.contains(e.target)
    const outsideButtonsShare = !contentElement.current?.contains(e.target)
    if (outsideIcon && outsideButtonsShare) {
      updateShowValue && updateShowValue(false)
    }
  }

  useEffect(() => {
    window.addEventListener('mouseup', handleClickOutside)
    return () => window.removeEventListener('mouseup', handleClickOutside)
  }, [])

  const handleClickShare = () => {
    updateShowValue(!showShareButton)
  }

  return (
    <>
      <IconShare ref={iconElement}>
        <FiShare2 onClick={handleClickShare} />
        <ShareButtons
          ref={contentElement}
          className='a2a_kit a2a_kit_size_32 a2a_floating_style a2a_vertical_style'
          data-a2a-url={urlToShare}
          showShareButton={showShareButton}
        >
          <a className='a2a_button_facebook' />
          <a className='a2a_button_whatsapp' />
          <a className='a2a_button_twitter' />
          <a className='a2a_button_email' />
          <a className='a2a_dd' href='https://www.addtoany.com/share' />
        </ShareButtons>
      </IconShare>
    </>
  )
}

export const ProductShare = (props) => {
  const productShareProps = {
    ...props,
    UIComponent: ProductShareUI
  }
  return (
    <ProductShareController {...productShareProps} />
  )
}
