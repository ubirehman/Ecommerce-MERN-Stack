import { SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'


const Info = styled.div`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
background-color: rgba(0,0,0,0.2);
transition: all 0.5s ease;
cursor: pointer;
`

const Container = styled.div`
    flex:1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #edf2ff;
    position: relative;

    &:hover ${Info}{
opacity: 1;
    }
`
const Circle = styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
background-color: white;
position: absolute;
`

const Image = styled.img`
height: 75%;
z-index: 2;
`

const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: #e7e7e7;
display: flex;
align-items: center;
justify-content: center;
margin: 10px;

transition: all 0.5s ease-in-out;

&:hover{
    background-color: #dadada;
    transform: scale(1.1);
}
`
const Product = ({product}) => {

    console.log(product.img);
  return (
   <Container>
    <Circle/>
        <Image src={product.img}/>
        <Info>
            <Icon><ShoppingCartOutlined/></Icon>
            <Icon><SearchOutlined/></Icon>

        </Info>
            
   </Container>
  )
}

export default Product