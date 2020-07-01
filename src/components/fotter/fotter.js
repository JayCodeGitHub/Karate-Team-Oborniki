import React from 'react' 
import styled from 'styled-components'

const FooterWrapper = styled.div`
  @media (min-width: 1200px) {
    grid-template-columns: repeat(8, 1fr);
    min-height: 10vh;
  }
  @media (max-width: 1199px) {
    grid-template-rows: repeat(3, 5vh);
  }
    width: 100vw;
    
    box-sizing: border-box;
    border-top: solid black 1px;
    display: grid;
`
const ContaktData = styled.div`
@media (min-width: 1200px) {
    grid-column: 1/span 2;
  }
  @media (max-width: 1199px) {
    grid-row: 1/span 1;
  }
     padding: 10px;
`
const ContaktDataRight = styled.div`
     @media (min-width: 1200px) {
    grid-column: 7/span 2;
    text-align: right;
  }
  @media (max-width: 1199px) {
    grid-row: 2/span 1;
  }
     padding: 10px;
`
const Author = styled.div`
  @media (min-width: 1200px) {
    grid-column: 3/span 4;
  }
  @media (max-width: 1199px) {
    grid-row: 3/span 1;
    h1 {
        font-size: 5vw;
    }
  }
  padding: 10px;
  text-align: center;
  h1{
      .red{
          color: red;
      }
  }
`

const Fotter = () => (
    <>
    <FooterWrapper>
        <ContaktData>
        </ContaktData>
        <Author><h1>Strona Autorstwa <span className="red">Jakuba Gryzińskiego</span></h1></Author>
        <ContaktDataRight>
        </ContaktDataRight>
    </FooterWrapper>
    </>
)


export default Fotter;