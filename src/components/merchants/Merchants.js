import React from 'react';
import Card from './Card';

import Dstv from '../../assets/dstv.png'
import Gotv from '../../assets/gotv.png'
import Startimes from '../../assets/startimes.png'
import Irokotv from '../../assets/irokotv.png'
import Daar from '../../assets/daar.png'
import Actv from '../../assets/actv.png'

const Merchants = () => {
  return (
    <div className='merchant d-lg-flex '>
      <Card imgSource={Dstv} imgAlt='dstv' />
      <Card imgSource={Gotv} imgAlt='gotv' />
      <Card imgSource={Startimes} imgAlt='startimes' />
      <Card imgSource={Irokotv} imgAlt='irokotv' />
      <Card imgSource={Daar} imgAlt='daar' />
      <Card imgSource={Actv} imgAlt='actv' />
    </div>
  )
}

export default Merchants
