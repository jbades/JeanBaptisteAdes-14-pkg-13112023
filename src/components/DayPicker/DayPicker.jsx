import React, { useEffect, useRef } from 'react'
import Pikaday from 'pikaday'
import '../../../node_modules/pikaday/css/pikaday.css'

export default function DayPicker( {value, onChange} ) {

  console.log("!!! value: ", value, "!!! onChange: ", onChange )

  const ref = useRef(null)

  console.log("!!! ref: ", ref)

  useEffect(() => {
    const picker = new Pikaday({
      field: ref.current,
      onSelect: onChange,
    });


    return () => picker.destroy()
  }, [onChange])


  return <input type="text" ref={ref} value={value || ''} onChange={onChange} readOnly />
  // return <input type="text" name="date-field" />
}