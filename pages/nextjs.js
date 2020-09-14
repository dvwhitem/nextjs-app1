import React from 'react'
import * as axios from 'axios'

 function Nextjs({data}) {
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

export const getStaticProps = async () => {
    const data = await axios.get('https://api.github.com/users/dvwhitem/repos').then(res => res.data)

    return {
        props: {
            data
        }
    }
}

export default Nextjs