import React from "react"
import { graphql } from 'gatsby'
import styled from 'styled-components'

const Title = styled.h1`
   color: red;
   text-align: center;
   padding-left: 2vw;
   padding-right: 2vw;
   margin-bottom: 2vw;
    margin-top: 2vw;
  @media (max-width: 1199px) {
    font-size: 6vw;
    padding-left: 2vw;
    padding-right: 2vw;
    margin-bottom: 4vw;
    margin-top: 4vw;
  }
`
const Paragraph = styled.h2`
  text-align: center;
  @media (max-width: 1199px) {
    font-size: 4.5vw;
    width: 100vw;
    padding-left: 2vw;
    padding-right: 2vw;
    text-align: left;
  }
  @media (min-width: 1200px) {
    font-size: 1.5vw;
    text-align: left;
    padding-left: 2vw;
    padding-right: 2vw;
  }
`
const Post = styled.div`
  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(2, 50vw);
    grid-auto-rows: repeat(1, 30vw);
  }
  
`
const Photo = styled.div`
  @media (min-width: 1200px) {
  grid-column-start: ${({order}) => order % 2 === 0 ? '2' : '1'};
  grid-row: 1 / span 1;
  width: 50vw;
  }
`
const Context = styled.div`
@media (min-width: 1200px) {
  grid-column-start: ${({order}) => order % 2 === 0 ? '1' : '2'};
  grid-row: 1 / span 1;
  width: 50vw;
}
@media (max-width: 1199px) {
  width: 100vw;
}
`
const Img = styled.img`
@media (min-width: 1200px) {
  width: 50vw;
  height: 38vw;
}
@media (max-width: 1199px) {
  width: 100vw;
}

`


const SukcesyPage  = ({ data }) => {
  const sukcesy = data.allDatoCmsSukcesy.edges;
  return (
    <div>
    {sukcesy.map(({node} , i) => {
      return (
        <Post>
          <Context order={i}>
            <Title>{node.title}</Title>
            <Paragraph>{node.paragraph}</Paragraph>
          </Context>
          <Photo order={i}>
                    {node.photolink ?  
                  <Img src={node.photolink} alt={node.title}/> : 
                  <Img src={node.photo.url}alt={node.title}/>
                }
          </Photo>
        </Post>
      )
    })}
    </div>
  ) 
}





export const query = graphql`
  query {
    allDatoCmsSukcesy {
      edges {
        node {
          title
          photolink
          paragraph
          photo {
            url
          }
          
        }
      }
    }
  }
`

export default SukcesyPage
