import { EmailOutlined, Facebook, Instagram, Pinterest, Twitter } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

import { LocalPhoneOutlined, LocationOnOutlined } from '@material-ui/icons';

const Container = styled.div`
flex: 1;
display: flex;
`
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`
const Logo = styled.h1``

const Description = styled.p`
margin: 20px 0;
`


const SocialContainer = styled.div`
display: flex;

`

const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
cursor: pointer;
background-color: #${props => props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`

const Center = styled.div`
flex: 1;
padding: 20px;
    
`

const Title = styled.h3`
    margin-bottom: 30px;
    display: flex;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
flex: 1;
padding: 20px;
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>URNA.</Logo>
                <Description>Lorem ispusm jasjdn hhasdkj jajsd kja jka sjasjdkjasd</Description>
                <SocialContainer>
                    <SocialIcon color="f5cbcb">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="f5cccb">
                        <Instagram />
                    </SocialIcon >
                    <SocialIcon color="f3cbcb">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="a5cbcb">
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>


            <Center>
                <Title>Useful links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Men Fashion</ListItem>
                    <ListItem>Women Fashion</ListItem>
                    <ListItem>Trots</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Whishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>


            <Right>
        <Title>Contact</Title>
        <ContactItem><LocationOnOutlined style={{marginRight: "10px"}}/> 322 pixasd, 223s Road</ContactItem>
        <ContactItem><LocalPhoneOutlined style={{marginRight: "10px"}}/>330011 22445 </ContactItem>
             <ContactItem>
<EmailOutlined style={{marginRight: "10px"}}/> urna@gmail.com
             </ContactItem>
            </Right>
        </Container>
    )
}

export default Footer