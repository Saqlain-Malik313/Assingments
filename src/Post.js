import axios from 'axios';
import React, { useEffect, useState } from 'react'

const url = `https://jsonplaceholder.typicode.com/posts`


const Post = () => {
    const [state, setstate] = useState([]);
    const getdata = async (api) => {
        const res = await axios.get(api)
        setstate(res.data)
    }

    useEffect(() => {
        getdata(url);
    }, [])
    return (
        <div className="abc" style={{marginTop:"5%"}}>
            {
                state.map(item => {
                    return (
                        <li key={item.id} style={{
                            border: '1px solid teal',
                            marginBottom: '10px',
                            padding: '40px',
                            borderRadius: '10px',
                            color:"black"

                        }}> {item.id}
                            <li style={{color:"black"}}>{item.title}</li>
                            <li style={{color:"black"}}>{item.body}</li>


                        </li>
                    )
                })
            }

        </div>
    )

}

export default Post