import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

const Container = styled.div`
`

const Title = styled.h1`
margin: 20px;
    
`
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`
const Filter = styled.div`
margin: 20px;
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`

const Option = styled.option`
    
`

const ProductList = () => {


    return (
        <Container>
            <Announcement />
            <Navbar />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select>
                        <Option disabled selected hidden>Color</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Green</Option>
                        <Option>Pink</Option>
                        <Option>White</Option>
                    </Select>

                    <Select>
                        <Option disabled selected hidden>Size</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                    </Select>
                
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select>
                        <Option disabled selected hidden>Sort By</Option>
                        <Option>Newest</Option>
                        <Option>Sale</Option>
                    </Select>
                </Filter>
            </FilterContainer>

            <Products />
            <NewsLetter />
            <Footer />
        </Container>
    )
}

export default ProductList