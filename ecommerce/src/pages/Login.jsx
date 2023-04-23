import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #e9e9e9;
    display: flex;
    align-items: center;
    justify-content: center;

`

const Wrapper = styled.div`
padding:20px;
width: 25%;
background-color: white;
`
const Title = styled.h1`
font-size: 24px;
font-weight: 300;

`
const Form = styled.form`
display: flex;
flex-direction: column;
`
const Input = styled.input`
flex:1;
min-width: 40%;
margin: 10px 0px;
padding: 10px;
`

const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
`

const Link = styled.a`
    cursor: pointer;
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;

    &:hover {
        color: blue;
    }
`


const Login = () => {
  return (
    <Container>
    <Wrapper>
        <Title>Login an account</Title>
        <Form>
            <Input placeholder="email" />
            <Input placeholder="password" />
            <Button>Login</Button>
            <Link>Forogot Password?</Link>
            <Link>Create Account</Link>
        </Form>
    </Wrapper>
</Container>
  )
}

export default Login