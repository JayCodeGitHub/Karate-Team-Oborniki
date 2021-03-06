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
    margin: 0vw;
  }
`
const Content = styled.h2`
  text-align: left;
  @media (min-width: 1200px) {
    width: 95vw;
    margin: auto;
    margin-bottom: 5vw;
  }
  @media (max-width: 1199px) {
    width: 100vw;
    margin-bottom: 10vw;
    font-size: 4.5vw;
    padding-left: 2vw;
    padding-right: 2vw;
  }
`



const PrzedszkolaPage = ({ data }) => {
  const przedszkola = data.allDatoCmsKarateprzedzkola.edges
  return (
    <div>
    {przedszkola.map(({node}) => {
      console.log(node)
      return (
        <div>
          <Title>{node.title}</Title>
          <Content>{node.content}</Content>
        </div>
      )
    })}
    </div>
  )
}

export const query = graphql`
  query {
    allDatoCmsKarateprzedzkola {
      edges {
        node {
          title
          content
        }
      }
    }
  }
`

export default PrzedszkolaPage
