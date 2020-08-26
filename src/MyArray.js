import React, { useEffect, useState } from 'react'
import './MyArray.css'
import myArray from './variables/myArray'

function MyArray() {
  
  const [myString, setMyString] = useState('')

  const parseArray = () => {
    const newArray = myArray.filter((e, index) => (index + 1) % 3 !== 0)
    setMyString(newArray.join(''))
  }

  useEffect(() => {
    parseArray()
  }, [])

  return (
    <span id="mystring">{myString}</span>
  );
}

export default MyArray;
