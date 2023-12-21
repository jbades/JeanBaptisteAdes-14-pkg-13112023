import React, { useEffect, useRef } from 'react'
import { DatepickerLibrary } from 'vanillajs-datepicker'

export default function DatePicker({props}) {
  const inputRef = useRef()
  console.log(inputRef)

  useEffect(() => {
    const datepickerInstance = new DatepickerLibrary(inputRef.current, options);

    return () => {
      // Nettoyage du datepicker lors du démontage du composant
      datepickerInstance.destroy();
    };
  }, [options]);

  return <input ref={inputRef} type="date" name="date-field" />
}