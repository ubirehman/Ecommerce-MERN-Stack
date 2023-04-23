import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'
import { Add, Remove } from '@material-ui/icons'

const Container = styled.div``

const Wrapper = styled.div`
padding:50px;
display: flex;

`

const ImageContainer = styled.div`
`


const Image = styled.img`
width:100%;
height: 90vh;
object-fit: cover;
`


const InfoContainer = styled.div`
flex: 1;
padding: 0px 5px;
`

const Title = styled.h1`
font-weight: 200;
`

const Description = styled.p`
margin: 20px 0px;
`

const Price = styled.span`
font-weight: 100;
font-size: 40px;
`


const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
width: 50%;
margin: 30px 0px;
`
const Filter = styled.div`
display: flex;
align-items: center;
`
const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
`
const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props => props.color};
margin: 0px 5px;
cursor: pointer;

`
const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;
`
const FilterSizeOption = styled.option``


const AddContainer = styled.div`display: flex;
align-items: center;
width: 50%;
justify-content: space-between;`
const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`
const Amount = styled.span`
width: 30%;
height: 30%;
border-radius:10%;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 5px;
`
const Button = styled.button`
padding: 15px;
border: 2px solid teal;
background-color: white;
cursor: pointer;
font-weight: 500;

&:hover{
    background-color: #d4d4d4;
}

`


const Product = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />

            <Wrapper>
                <ImageContainer>
                    <Image src="https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png" />
                </ImageContainer>
                <InfoContainer>
                    <Title>Arrow Shirt</Title>
                    <Description>Lorem Ipsumasda jasdaskdhja jdahsjdjkh a</Description>
                    <Price>$20</Price>

                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black"></FilterColor>
                            <FilterColor color="darkblue"></FilterColor>
                            <FilterColor color="gray"></FilterColor>
                        </Filter>

                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>

                    <AddContainer>
                        <AmountContainer>
                            <Add />
                            <Amount>1</Amount>
                            <Remove />
                        <Button>Add to Cart</Button>
                        </AmountContainer>
                    </AddContainer>

                </InfoContainer>
            </Wrapper>

            <NewsLetter />
            <Footer />
        </Container>
    )
}

export default Product