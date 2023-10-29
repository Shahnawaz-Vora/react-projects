import React,{ useEffect,useState } from 'react'
import axios from 'axios'
export default function FetchSinglePost() {
    const [post,setPost] = useState([])
    const [id,setId] = useState()
    const [buttonClickId,setButtonClickId] = useState()

    const handleClick = () => {
        setButtonClickId(id)
    }
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonClickId}`)
        .then((res)=>{
            console.log(res)
            setPost(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[buttonClickId])
  return (
    <div>
        <button type='button' value={id} onClick={handleClick}>Fetch a Post</button>
        <input type='text' onChange={(e)=>setId(e.target.value)}/>
        <h1>{post.title}</h1>
    </div>
  )
}
