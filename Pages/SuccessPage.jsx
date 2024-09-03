import React from 'react'
import check from "../assets/check.jfif"
const SuccessPage = () => {
  return (
    <>
    
       <div className='success'>
             <div className='inner'>
                <img src={check} alt="" />
                <h2>🎉 Signup Successful!</h2>
                <p>Thank you for registering with Inside Success Nigeria. Your account has been created successfully!</p>
                <p><p>An email has been sent to your registered email address with further instructions. Please check your inbox (and spam folder) to proceed.</p>
                </p>
             </div>
       </div>

    </>
  )
}

export default SuccessPage