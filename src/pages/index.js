import React from "react";
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
const News = styled.h1`
  color: red;
  margin-top: 5vw;
  margin-bottom: 5vw;
  text-align: center;
  font-size: 4vw;
  @media (max-width: 1199px) {
    font-size: 7vw;
  }
`
const NewsBottom = styled.h1`
  color: red;
  margin-top: 5vw;
  margin-bottom: 5vw;
  text-align: center;
  font-size: 3vw;
  @media (max-width: 1199px) {
    font-size: 5vw;
  }
`


const IndexPage = ({ data }) => {
  const index = data.allDatoCmsStronagluwna.edges;
  const nowosci = data.allDatoCmsNowosci.edges;
  const galeria = data.allDatoCmsGallery.edges;
  return (
    <div>
    {index.map(({node} , i) => {
      return (
        <Post>
          <Context order={i}>
            <Title>{node.title}</Title>
            <Paragraph>{node.paragraph}</Paragraph>
          </Context>
          <Photo order={i}>
                  {node.photolink ?  
                  <Img src={node.photolink} alt={node.title}/>  : 
                  <Img src={node.photo.url} alt={node.title}/> 
                }
          </Photo>
        </Post>
      )
    })}
    <div>
      <News>Nowości</News>
      <NewsBottom>Aby być na bieżąco odwiedż nas również na facebooku</NewsBottom>
    </div>
    {nowosci.map(({node} , i) => {
      return (
        <Post>
          <Context order={i}>
            <Title>{node.title}</Title>
            <Paragraph>{node.pa}</Paragraph>
          </Context>
          <Photo order={i}>
          {node.photolink ?  
                  <Img src={node.photolink} alt={node.title}/>  : 
                  <Img src={node.photo.url} alt={node.title}/> 
                }
          </Photo>
        </Post>
      )
    })}
    <div>
      <News>Galeria Zdjęć</News>
    </div>
    {galeria.map(({node} , i) => {
      return (
        <Post>
          <Photo order={i}>
          {node.photolink ?  
                  <Img src={node.photolink} alt={node.title}/>  : 
                  <Img src={node.photo.url} alt={node.title}/> 
                } 
          {node.photolinkthree ?  
                  <Img src={node.photolinkthree} alt={node.title}/>  : 
                  <Img src={node.photothree.url} alt={node.title}/> 
                } 
          </Photo>
          <Context order={i}>
          {node.photolinktwo ?  
                  <Img src={node.photolinktwo} alt={node.title}/>  : 
                  <Img src={node.phototwo.url} alt={node.title}/> 
                } 
          {node.photolinkfour ?  
                  <Img src={node.photolinkfour} alt={node.title}/>  : 
                  <Img src={node.photofour.url} alt={node.title}/> 
                } 
          </Context>
        </Post>
      )
    })}
    <NewsBottom>Po więcej zdjęć odwiedź nas również na facebooku</NewsBottom>
    </div>
  )
} 



export const query = graphql`
  query {
    allDatoCmsStronagluwna {
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
    allDatoCmsNowosci {
      edges {
        node {
          title
          pa
          photolink
          photo {
            url
          }
        }
      }
    }
    allDatoCmsGallery {
      edges {
        node {
          photolink
          photolinktwo
          photolinkthree
          photolinkfour
          photo {
            url
          }
          phototwo {
            url
          }
          photothree {
            url
          }
          photofour {
            url
          }
        }
      }
    }
    
  }
`

export default IndexPage