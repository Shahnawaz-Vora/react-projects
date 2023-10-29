import React from 'react'
import {AiOutlineLogout} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const TopNav = () => {
  const navLinks = [
        {name:"Home",link:'/'},
        {name:"Tv Show",link:'/tv'},
        {name:"My List",link:'/mylist'},
        {name:"Movies",link:'/movies'},
  ]
    return (
    <NavContainer>
        <div className='leftSide'>
            <div className='logo'>
                <img src='https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png' alt='logo'/>
            </div>
            <ul className='links'>
                {
                    navLinks.map(({name,link})=>{
                        return(
                            <li key={name}><Link to={link}>{name}</Link></li>
                        )
                    })
                }
            </ul>
        </div>
        <div className='rightSide'>
            <button>
                <AiOutlineLogout/>
            </button>
        </div>
    </NavContainer>
  )
}
const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;

  .leftSide {
    display: flex;
    align-items: center;

    .logo {
      margin-right: 2rem;
      img {
        height: 3rem;
      }
    }

    .links {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        margin-right: 2rem;
        font-size: 1.2rem;

        a {
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;

          &:hover {
            color: #e5e5e5;
          }
        }
      }
    }
  }

  .rightSide {
    button {
      border: none;
      background: transparent;
      color: white;
      font-size: 1.5rem;
      transition: all 0.3s ease;
      cursor: pointer;

      &:hover {
        transform: scale(1.2);
      }
    }
  }
`;


export default TopNav
