import React, { useEffect, useRef } from 'react'
import Pikaday from 'pikaday'
import './day-picker.css'

export default function DayPicker( {type, id, value, onChange, className} ) {

  const ref = useRef(null)

  useEffect(() => {

    const picker = new Pikaday({
      field: ref.current,
      onSelect: function() {
        const selectedDate = picker.toString('YYYY-MM-DD')
        onChange(selectedDate)
      }
    })

    return () => picker.destroy()

  }, [onChange])

  return <input 
    type={type}
    id={id} 
    class={className} 
    ref={ref} 
    value={value || ''} 
    // onChange={onChange} 
    placeholder='Choose a date' 
    required
    readOnly
  />
}