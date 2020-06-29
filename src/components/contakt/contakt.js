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
    <P>888 585 785</P>
    <P>Email:<span className="blue">wbi@poczta.fm</span></P>
    </Div>
    </>
)


export default Contakt;