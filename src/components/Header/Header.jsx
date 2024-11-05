import React from 'react'
import './Header.scss'

import Card from '../Card/Card'
import Title from '../Title/Title'

const Header = () => {
  return (
  <>
    <Title>Транспорт</Title> 


  <div className="wrap">
      <Card name='Велосипед' image='./babka.jpg' />
      <Card name='Мотоцикл ' image='https://m.media-amazon.com/images/I/41P7Ybh8P6L._AC_.jpg'/>
      <Card name='Самокат' image='https://letskick.ru/images/2017/03/grandma.jpg' />
      <Card name/>
      <Card />
      <Card />
  </div>
  </>
  )
}

export default Header
