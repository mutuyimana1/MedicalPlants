import React from 'react'

const Button = ({name,color,bgColor,border, hover,width,onClick}) => {
  return (
    <div className={`text-${color} bg-${bgColor} hover:bg-[#025222] hover:text-white px-3 py-2 text-center cursor-pointer rounded-md w-${width} border border-${border}`} onClick={onClick}>
      {name}
        </div>
  )
}

export default Button