import React from 'react'
import styled from 'styled-components'

const BackgroundImage = () => {
  return (
    <BackgroundContainer>
      <img src='https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/netflixteaser.png' alt='no internet connection'/>
    </BackgroundContainer>
  )
}

const BackgroundContainer = styled.div`
  height: 100vh;
  width: 100vw;
  img{
    display: block;
    height: 100vh;
    width: 100vw;
    object-fit: cover;
  }
`
export default BackgroundImage