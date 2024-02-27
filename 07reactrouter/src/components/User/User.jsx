import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const {userid} = useParams();
    return (
    <div>
        <div className='bg-orange-500 text-black text-3xl'>User : {userid}</div>
    </div>
    )
}
