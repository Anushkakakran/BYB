import React from 'react'

const Button = (props) => {

     const onclick = props.onclick
    const text = props.text

  return (
    <div>
     <button onClick={onclick} className="bg-lightGray hover:bg-black border text-black hover:text-white hover:opacity-70  px-6 py-3 rounded-full transition font-open-sans font-medium md:text-xl text-sm">{text}</button>
      
    </div>
  )
}

export default Button
