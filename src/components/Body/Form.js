import React from "react";
import styled from "styled-components";
import { useRef, useState } from 'react'



export const Form = (props) => {
  const male = useRef(null)
  const female = useRef(null)
  const other = useRef(null)
  const [gender, setGender] = useState(0)
  if (props.registerVisibility === true) {
    return (
      <form>
        <FormContainer>
          <TitleContainer>
            <h2>Registration Form</h2>
          </TitleContainer>
          <Row>
            <IconContainer>
              <img src={props.mailIcon} alt=''></img>
            </IconContainer>
            <TextInput placeholder="E-mail" type='text' padding='2% 3%'></TextInput>
          </Row>
          <Row>
            <IconContainer>
              <img src={props.lockIcon}></img>
            </IconContainer>
            <TextInput placeholder="Password" type='password' padding='2% 3%'></TextInput>
          </Row>
          <Row>
            <IconContainer>
              <img src={props.lockIcon}></img>
            </IconContainer>
            <TextInput placeholder="Re-type Password" type='password' padding='2% 3%'></TextInput>
          </Row>
          <SplitRow>
            <SubSplitRow>
              <IconContainer>
                <img src={props.userIcon}></img>
              </IconContainer>
              <TextInput placeholder="First Name" type='text' padding='2% 7%'></TextInput>
            </SubSplitRow>
            <SubSplitRow>
              <IconContainer>
                <img src={props.userIcon}></img>
              </IconContainer>
              <TextInput placeholder="Last Name" type='text' padding='2% 7%'>
              </TextInput>
            </SubSplitRow>
          </SplitRow>
          <RadioRow>
            <RadioWrapper>
              <label type='text'>Male</label>
              <RadiusInput type='radio' name='gender' ref={male} checked={gender === 1 ? true : false} onClick={() => { setGender(gender => gender = 1) }} readOnly></RadiusInput>
            </RadioWrapper>
            <RadioWrapper>
              <label type='text'>Female</label>
              <RadiusInput type='radio' name='gender' ref={female} checked={gender === 2 ? true : false} onClick={() => { setGender(gender => gender = 2) }} readOnly></RadiusInput>
            </RadioWrapper>
            <RadioWrapper>
              <label type='text'>Other</label>
              <RadiusInput type='radio' name='gender' ref={other} checked={gender === 3 ? true : false} onClick={() => { setGender(gender => gender = 3) }} readOnly></RadiusInput>
            </RadioWrapper>
          </RadioRow>
          <CheckboxWrapper>
            <CheckboxRow>
              <input type='checkbox'></input>
              <p>I agree with terms and conditions.</p>
            </CheckboxRow>
            <CheckboxRow>
              <input type='checkbox'></input>
              <p>I want to receive the newsletter</p>
            </CheckboxRow>
          </CheckboxWrapper>
          <RegisterButton>
            Register
          </RegisterButton>
        </FormContainer>
      </form>
    )
  } else return null
}

const FormContainer = styled.div`
  width: 30%;
  height: 75vh;
  padding: 2%;
  background-color: rgb(255,255,255,.3);
  border: 3px solid white;
  border-radius: 1vw;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 5% 8% 8% 8% 8% 5% 10% 10%;
  position: absolute;
  top: 0;
  bottom: 5%;
  margin: auto;
  left: 15%;
  gap: 2vw;
`

const TitleContainer = styled.div`
  width: 100%;
  text-align: center;
  font-size: 1vw;
  letter-spacing: 1px;
`
const Row = styled.label`
  height: 100%;
  width: 100%;
  background-color: white;
  display: grid;
  grid-template-columns: 10% 90%;
`
const SplitRow = styled.label`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 45% 45%;
  justify-content: space-between;
`
const SubSplitRow = styled.label`
  height: 100%;
  width: 100%;
  background-color: white;
  display: grid;
  grid-template-columns: 25% 75%;
`
const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10%;
  border-right: 1px solid black;
  img{
    width: 80%;
    height: 80%;
  }
`
const TextInput = styled.input`
  border: 0;
  padding: ${props => props.padding};
  font-size: 1.1vw;
  &:focus{
    outline: 0;
  }
`
const RadioWrapper = styled.div`
  width: 5vw;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`
const RadioRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  label{
    font-size: 1vw;
    font-weight: bold;
    margin-right: 1vh;
  }
`
const RadiusInput = styled.input`
  width: 1.5vh;
  height: 1.5vh;
`
const CheckboxWrapper = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-between;
`
const CheckboxRow = styled.div`
  width:100%;
  display:flex;
  align-items: center;
  p{
    font-size: 2vh;
    font-weight: 600;
  }
  input{
    margin-right: 10px;
    transform: scale(1.5);
  }
`
const RegisterButton = styled.button`
  width: 100%;
  font-size: 1.2vw;
  font-weight: 700;
  letter-spacing: 1px;
  background-color: #968C71;
  border: 3px solid white;
  border-radius: 10px;
  cursor: pointer;
  color: white;
`