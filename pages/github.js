import React, {useEffect, useState} from 'react'
import * as axios from 'axios'

export default function Github() {
    const [data, setData] = useState({})

    useEffect(() => {
        axios.get('https://api.github.com/users/dvwhitem/repos').then(res => setData(res.data))
    }, [])

    return (
        <div>
            <h1>Github Info</h1>
            <div>Repos</div>
            {data && data.length > 0 && (
                data.map((item, key) => {
                  return  <div key={item.id}>name : {item.name}</div>
                })
            )}
        </div>
    )
}