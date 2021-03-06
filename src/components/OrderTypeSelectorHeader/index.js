import React from 'react'
import { OrderTypeControl, useLanguage } from 'ordering-components'
import { Select } from '../../styles/Select'
import FaCarSide from '@meronex/icons/fa/FaCarSide'
import FaTruckPickup from '@meronex/icons/fa/FaTruckPickup'
import GrDeliver from '@meronex/icons/gr/GrDeliver'
import AiFillShop from '@meronex/icons/ai/AiFillShop'
import GiFoodTruck from '@meronex/icons/gi/GiFoodTruck'
import { Option } from './styles'

const OrderTypeSelectorHeaderUI = (props) => {
  const {
    orderState,
    handleChangeOrderType
  } = props

  const [, t] = useLanguage()

  const orderTypes = [
    { value: 1, content: <Option><GrDeliver />{t('DELIVERY', 'Delivery')}</Option> },
    { value: 2, content: <Option><FaTruckPickup />{t('PICKUP', 'Pickup')}</Option> },
    { value: 3, content: <Option><AiFillShop />{t('EAT_IN', 'Eat in')}</Option> },
    { value: 4, content: <Option><GiFoodTruck />{t('CURBSIDE', 'Curbside')}</Option> },
    { value: 5, content: <Option><FaCarSide />{t('DRIVE_THRU', 'Drive thru')}</Option> }
  ]

  return (
    <Select
      options={orderTypes}
      defaultValue={orderState.options?.type || 1}
      onChange={(orderType) => handleChangeOrderType(orderType)}
    />
  )
}

export const OrderTypeSelectorHeader = (props) => {
  return <OrderTypeControl {...props} UIComponent={OrderTypeSelectorHeaderUI} />
}
