import React, { useEffect, useRef } from 'react'
import Pikaday from 'pikaday'
import './day-picker.css'

export default function DayPicker( {value, onChange} ) {

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
    type="text" 
    class="form-control" 
    ref={ref} 
    value={value || ''} 
    // onChange={onChange} 
    placeholder='Choose a date' 
    readOnly
  />
}