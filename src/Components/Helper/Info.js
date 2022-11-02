import React from 'react'
import sytles from './Info.module.css'
const Info = ({ info }) => {
  return (
    <div className={sytles.info}>
      <p >{info}</p>
    </div>
  )
}

export default Info