import React from "react";

export default function Character(props) {

  const { id, char, imageWithChar, imageWithoutChar } = props.char;

  console.log('component')

  return (
    <div className='letter-image'>
      <img src={imageWithoutChar} alt='Displayed Letter' />
    </div>
  )

}