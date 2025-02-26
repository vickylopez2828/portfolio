import React from 'react'
const Error = ({children}: {children}) => {
    return (
      <p className=" text-red-600 uppercase text-sm">
        {children}
      </p>
    )
  }
  
  export default Error