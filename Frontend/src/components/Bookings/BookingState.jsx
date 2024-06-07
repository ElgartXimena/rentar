import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'

const BookingState = ({datein, dateout}) => {
  const [color, setColor] = useState('')
  const [text, setText] = useState('')
  
  useEffect(() => {
    const dateInF = dayjs(datein)
    const dateOutF = dayjs(dateout)
    const today = dayjs()
    console.log(today, dateInF, dateOutF)
    if (today.isBefore(dateInF)) {
      setColor('blue')
      setText('Ready')
    } else if (today.isAfter(dateOutF)) {
      setColor('red')
      setText('Ended')
    } else {
      setColor('green')
      setText('Active')
    }
  }, [datein, dateout])

  return (
    <div className={`flex px-4 py-1 border-2 
        ${color === 'blue' ? 
            'border-color-blue bg-color-blue/10 text-color-blue' 
        : color === 'red' ? 
            'border-red-600 bg-red-600/10 text-red-600' 
        : 'border-green-600 bg-green-600/10 text-green-600'
        } font-poppins font-semibold rounded-lg`}>
      {text}
    </div>
  )
}

export default BookingState
