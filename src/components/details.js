import React, { Component, useEffect } from 'react'

const Detail = ({location, history}) => {
  useEffect(() => {
    if(location.state === undefined) {
      history.push('/')
    }
  }, [])

  const reDirect = () => {
    if(location.state) {
      return <div>{location.state.title}</div> 
    } else { 
      return null
    }
  }

  return (
    reDirect()
  )
}

export default Detail