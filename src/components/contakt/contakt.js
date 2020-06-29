import React from 'react' 
import styled from 'styled-components'

const P = styled.h3`
@media (min-width: 1050px) {
    text-align: center;
    margin-top: 0.7vw;
    font-size: 1vw;
}
    .blue{
        color: blue;
    }
    @media (max-width: 1049px) {
        text-align: center;
        margin-top: 5vw;
        font-size: 5vw;
    
    }
`
const Div = styled.div`
@media (max-width: 1049px) {
        margin-top: 20vw;
    
    }
`
const Contakt = () => (
    <>
    <Div>
    <P>tel.telefon z cms</P>
    <P>Email:<span className="blue">email z cms</span></P>
    </Div>
    </>
)


export default Contakt;