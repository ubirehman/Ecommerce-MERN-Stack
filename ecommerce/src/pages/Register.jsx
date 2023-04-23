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
width: 40%;
background-color: white;
`
const Title = styled.h1`
font-size: 24px;
font-weight: 300;

`
const Form = styled.form`
display: flex;
flex-wrap: wrap;
`
const Input = styled.input`
flex:1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
`
const Agreement = styled.span`
font-size: 12px;
margin: 20px 0px;
`
const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: teal;
color: white;
cursor: pointer;
`



const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Create an account</Title>
                <Form>
                    <Input placeholder="firstName" />
                    <Input placeholder="lastname" />
                    <Input placeholder="username" />
                    <Input placeholder="email" />
                    <Input placeholder="password" />
                    <Input placeholder="confirm password" />

                    <Agreement>asdasdasdsd asd asdasda sdas dasd asd asd asd</Agreement>
                    <Button>Create Account</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register