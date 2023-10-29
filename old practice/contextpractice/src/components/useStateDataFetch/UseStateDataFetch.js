import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function UseStateDataFetch() {
    const [isLoading,setIsLoading] = useState(true)
    const [err,setError] = useState(true)
    const [post,setPost] = useState(true)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then((res)=>{
            setIsLoading(false)
            setPost(res.data)
            setError('')
        })
        .catch((err)=>{
            setIsLoading(false)
            setPost({})
            setError("Oops something wrong:")
        })
    })
  return (
    <div>
        {
            isLoading ? 'data is Loading' : post.body
        }
    </div>
  )
}
