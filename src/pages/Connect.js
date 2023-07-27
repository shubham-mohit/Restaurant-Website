import React from 'react'
import Containt from '../components/Layout/Containt'
import '../styles/home.css'

const Connect = () => {
  const Notification = (()=>{
    window.alert("Subbmitted succesfully!")
  })
  return (
    <Containt>
       <div className='contact'>
          <div className='Box'>
           <div className='img'>
           </div>
          </div>
          <div className='content'>
            <div className= 'contact-info'>
             <> 
             <h3 style={{textAlign:'center' , margin: '8px' , marginBottom: '25px' , borderBottom:'1px solid black'}}> Contact Us</h3>
             <p> Name: </p> <input type='text' placeholder='Enter Your Name'/> <br/>
             <p> Contact: </p> <input type='number' placeholder='Enter Your Contact Number' /> <br/>
             <p> Address: </p> <input type='text' placeholder='Enter Your Address' /> <br/>
             <p> Message: </p> <input type='text' placeholder='Type Here' style={{height:'10%'}}/><br/>
             <button style={{marginTop:'20px', width:'90%', marginLeft: 14 , height:'6%'}} onClick={Notification}> Subbmit </button>
             </>
            </div>
           </div>
       </div>
    </Containt>
  )
}

export default Connect