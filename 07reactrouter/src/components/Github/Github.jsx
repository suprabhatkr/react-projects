import React from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    const data = useLoaderData()

    // const [data, setData] = React.useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/suprabhatkr')
    //     .then((response) => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])

    return (
        <div className='bg-green-900 text-white'>
        Github : {data.name}
        <img src={data.avatar_url}/>
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/suprabhatkr')
    return response.json()
}