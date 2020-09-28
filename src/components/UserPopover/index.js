import React, { useRef, useEffect } from 'react'
import { useLanguage, useSession } from 'ordering-components'
import { usePopper } from 'react-popper'
import { HeaderItem, PopoverBody, PopoverArrow, PopoverList, PopoverListItem, PopoverListLink } from './styles'
import { DropDownCircleImage } from '../Dropdown/style'
import { FaUserAlt, FaRegAddressCard, FaRegListAlt, FaSignOutAlt } from 'react-icons/fa'

export const UserPopover = (props) => {
  const { open } = props
  const [sessionState] = useSession()
  const [, t] = useLanguage()
  const referenceElement = useRef()
  const popperElement = useRef()
  const arrowElement = useRef()
  const popper = usePopper(referenceElement.current, popperElement.current, {
    placement: 'auto',
    modifiers: [
      { name: 'arrow', options: { element: arrowElement.current } },
      {
        name: 'offset',
        options: {
          offset: [0, 12]
        }
      }
    ]
  })

  const { styles, attributes, forceUpdate } = popper

  useEffect(() => {
    forceUpdate && forceUpdate()
  }, [open, sessionState])

  const handleClickOutside = (e) => {
    if (!open) return
    if (!popperElement.current?.contains(e.target) && e.target !== referenceElement.current) {
      props.onClose && props.onClose()
    }
  }

  useEffect(() => {
    window.addEventListener('click', handleClickOutside)
    return () => window.removeEventListener('click', handleClickOutside)
  }, [open])

  const popStyle = { ...styles.popper, visibility: open ? 'visible' : 'hidden', minWidth: '150px' }
  if (!open) {
    popStyle.transform = 'translate3d(0px, 0px, 0px)'
  }

  return (
    <div style={{ overflow: 'hidden' }}>
      <HeaderItem ref={referenceElement} onClick={props.onClick}><DropDownCircleImage src={sessionState.user.photo} fallback={<FaUserAlt />} /></HeaderItem>
      <PopoverBody ref={popperElement} style={popStyle} {...attributes.popper}>
        <PopoverList>
          <PopoverListLink to='/profile'>
            <FaRegAddressCard /> {t('PROFILE', 'Profile')}
          </PopoverListLink>
          <PopoverListLink to='/profile/orders'>
            <FaRegListAlt /> {t('ORDERS', 'Orders')}
          </PopoverListLink>
          <PopoverListIteLogout />
        </PopoverList>
        <PopoverArrow key='arrow' ref={arrowElement} style={styles.arrow} />
      </PopoverBody>
    </div>
  )
}

const PopoverListIteLogout = (props) => {
  const [, t] = useLanguage()

  return (
    <PopoverListItem onClick={props.handleLogoutClick}>
      <FaSignOutAlt /> {t('LOGOUT', 'Logout')}
    </PopoverListItem>
  )
}