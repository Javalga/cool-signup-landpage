import React from "react";
import styled from "styled-components";

export const Body = (props) => {
  return (
    <BodyContainer>
      <TextContainer>
        <h1>
          We accompany you <br></br>on your way to success
        </h1>
        <h2>
          10 years of experience verify our results.
        </h2>
      </TextContainer>
      <JoinUs>JOIN US</JoinUs>
    </BodyContainer>
  )
}

const BodyContainer = styled.body`
  height: 90vh;
  position: relative;
`

const TextContainer = styled.div`
  position: absolute;
  width: 35%;
  height: 40%;
  top: 15%;
  right: 10%;
  h1{
    font-size: 3vw;
    font-weight:bold;
    color: white;
    line-height: 110%;
    text-align:end;
    margin-bottom: 3%
  }
  h2{
    font-style: italic;
    text-align: end;
    color: white;
    font-weight: 500;
    font-size: 1.1vw
  }
  `

  const JoinUs = styled.button`
    color: #FFF;
    transition: all 0.5s;
    position: absolute;
    width: 25vh;
    height: 5vh;
    right: 10%;
    top: 40%;
    background-color: rgb(255,255,255,0);
    z-index: 9;
    cursor: pointer;
    letter-spacing: 4px;
    font-weight: 700;
    border: 0;
    &:before{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 99;
      background-color: rgba(255,255,255,0.1);
      transition: all 0.3s;   
    }
    &:hover:before{
      opacity: 0;
      transform: scale(0.5,0.5);
    }
    &:after{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      opacity: 0;
      transition: all 0.3s;
      border: 1px solid rgba(255,255,255,0.5);
      transform: scale(1.2,1.2);
    }

    &:hover:after{
      opacity: 1;
      transform: scale(1,1);
    }
  `