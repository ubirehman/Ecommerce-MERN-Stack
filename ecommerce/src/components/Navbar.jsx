import React from 'react'
import styled from 'styled-components'
import { Search } from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';



const Container = styled.div`
    height: 60px;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display:flex;
    justify-content: space-between;
    align-items: center;
`
const Left = styled.div`
flex:1;
display: flex;
align-items: center;
`

const Language = styled.span`
    font-size: 14;
    cursor: pointer;
`
const SearchContainer = styled.div`
    border: .5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
    border: none;
`

const Center = styled.div`
flex:1;
`
const Logo = styled.h1`
    font-weight: bold;
    text-align: center;
`
const Right = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: flex-end;
`

const MenuItems = styled.div`
margin-left: 25px;

`
const Navbar = () => {
    return (
        <Container>
            <Wrapper>

                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <Search style={{ color: "gray", fontSize: "15px" }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>URNA.</Logo>
                </Center>
                <Right>
                    <MenuItems>Register</MenuItems>
                    <MenuItems>Sign in</MenuItems>
                    <MenuItems>
                        <Badge color='secondary' badgeContent={4}>
                            <ShoppingCartIcon />
                        </Badge>
                    </MenuItems>
                </Right>

            </Wrapper>
        </Container>
    )
}

export default Navbar