import React from 'react'
import Title from './Title'
import Footer from './Footer'

const Containt = ({children}) => {
  return (
    <>
      <Title />
      <div> 
        {children}
      </div>
      <Footer/>
    </>
  )
}

export default Containt