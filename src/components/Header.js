import React from "react";
import styled from "styled-components";
import logo from '../images/logo.svg'

export const Header = () => {
  return (
    <HeaderContainer>
      <Wrapper>
        <img src={logo} alt=''></img>
        <HeaderSectionContainer>
          <p>HOME</p>
        </HeaderSectionContainer>
        <HeaderSectionContainer>
          <p>ABOUT</p>
        </HeaderSectionContainer>
        <HeaderSectionContainer>
          <p>COURSES</p>
        </HeaderSectionContainer>
        <HeaderSectionContainer>
          <p>CONTACT</p>
        </HeaderSectionContainer>
        <HeaderSectionContainer>
          <p>LOG IN</p>
        </HeaderSectionContainer>
      </Wrapper>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  position: relative;
  width:100vw;
  height: 10vh;
`
const Wrapper = styled.div`
  display: grid;
  padding: 1%;
  grid-template-columns: 10% 5% 5% 5% 5% 5%;
  gap: 4%;
  place-items: center;
  img{
    width: 7vh;
  } 
`
const HeaderSectionContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  p{
    font-weight: 500;
    font-size: 1vw;
    color: white;
    letter-spacing: 1px;
    &:hover{
      font-weight: 700;
      cursor: pointer;
    }
  }
`
