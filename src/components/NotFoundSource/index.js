import React from 'react'
import { useTheme } from 'styled-components'
import { Button } from '../../styles/Buttons'

import {
  NotFound,
  NotFoundImage
} from './styles'

export const NotFoundSource = (props) => {
  const {
    content,
    btnTitle,
    onClickButton
  } = props

  const theme = useTheme()

  return (
    <NotFound>
      <NotFoundImage>
        <img src={theme.images?.general?.notFound} alt='Not Found' />
      </NotFoundImage>
      <h1>{content}</h1>
      {!onClickButton && props.children && (
        props.children
      )}
      {onClickButton && (
        <div>
          <Button
            outline
            color='primary'
            onClick={() => onClickButton()}
          >
            {btnTitle}
          </Button>
        </div>
      )}
    </NotFound>
  )
}
