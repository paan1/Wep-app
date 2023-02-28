import React from 'react'
import Card from './Card'

export default function Menu({data}) {
    return (
      data.map((item) =>{
          return <Card food={item}/> 
      })
    )
  }