import React, { useState } from 'react'
import TopNav from '../components/TopNav'
import styled from 'styled-components'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import {FaPlay} from 'react-icons/fa'
const Netflix = () => {
  const [isScrolled,setIsScrolled] = useState(false)

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true)
    return () => (window.onscroll = null)
  }
  console.log(isScrolled)
  return (
    <HeroContainer>
      <div className='hero'>
        <TopNav isScrolled={isScrolled}/>
        <img className='background-image' src='https://images.firstpost.com/wp-content/uploads/large_file_plugin/2019/04/1555991243_avengersendgamesocial23042019.jpg' width='100%' height='auto' alt='hero image'/>
        <div className='container'>
          <div className='title'>
            <h1>Super Man</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
          </div>
          <div className='buttons'>
            <button className='playBtn'>Play</button>
            <button className='moreBtn'>More</button>
          </div>
        </div>
      </div>
    </HeroContainer>
  )
}
const HeroContainer = styled.div`
.hero{
  position: relative;
  .background-image{
    filter: brightness(40%);
  }
  img{
    height: 70vh;
    width: 100%;
  }
  .container{
    position: absolute;
    bottom: 1rem;
    
    .title{
      h1{
        margin-left: 5rem;
        text-transform: uppercase;
        font-size: 73px;
        background: -webkit-linear-gradient(#eee,rgb(128,13,13));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      p{
        margin-bottom: 50px;
        width: 640px;
        margin-left: 5rem;
        font-family: "lexend Deca",sans-serif;
        color: white;
      }
    }
    .buttons{
      display: flex;
      margin: 5rem;
      gap: 2rem;
    }
    .playBtn{
      display: flex;
      align-items: center;
      justify-content: center;
      color: red;
      border-radius: 1rem;
      font-size: 1.4rem;
      gap: 1rem;
      padding: 0.9rem;
      padding-left: 2rem;
      padding-right: 2.4rem;
      border: none;
      cursor: pointer;
    }
    .moreBtn{
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      background-color: black;
      border-radius: 1rem;
      font-size: 1.4rem;
      gap: 1rem;
      padding: 0.9rem;
      padding-left: 2rem;
      padding-right: 2.4rem;
      border: 0.1rem solid white;
      cursor: pointer;
    }
  }
}
`

export default Netflix