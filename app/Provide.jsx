import React from 'react'
import Header from './_components/Header'

const Provide = ({children}) => {
  return (
    <div>
        <Header/>
        {children}
        </div>
  )
}

export default Provide