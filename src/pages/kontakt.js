import React from "react"
import { graphql } from 'gatsby'
import styled from 'styled-components'
import styles from '../layouts/clubFrends.module.scss'

const Title = styled.h1`
  color: red;
  text-align: center;
  @media (max-width: 1199px) {
    font-size: 6vw;
  }
`
const Content = styled.h2`
  text-align: center;
  @media (min-width: 1200px) {
    width: 95vw;
    margin: auto;
    margin-bottom: 5vw;
  }
  @media (max-width: 1199px) {
    width: 100vw;
    margin-bottom: 10vw;
    font-size: 5vw;
  }
`



const KontaktPage = ({ data }) => {
  const kontakt = data.allDatoCmsKontakt.edges;
  const frends = data.allDatoCmsPrzyjacieleklubu.edges
  return (
    <div>
    <div>
      {kontakt.map(({node}) => {
        return (
          <div>
            <Title>{node.title}</Title>
            <Content>{node.content}</Content>
          </div>
        )
      })}
      </div>
      <div>
          <Title>Przyjaciele Klubu</Title>
          <div className={styles.clubFrendsWrapper}>
          {frends.map(({node}) => {
        return (
          <a href={node.link} target="_blank">
            <div className={styles.clubFrend}>
              <div className={styles.frendLogoWrapper}>
                {node.photolink ?  
                  <img src={node.photolink} alt="Przyjaciel klubu logo" className={styles.clubFrendLogo}/> : 
                  <img src={node.photo.url}alt="Przyjaciel klubu logo" className={styles.clubFrendLogo}/>
                }
              </div>
              <h1 className={styles.clubFrendName}>
                {node.title}
              </h1>

            </div>
            </a>
        )
      })}  
      </div>
    </div>
    </div>
  )
}

export const query = graphql`
  query {
    allDatoCmsKontakt {
      edges {
        node {
          title
          content
        }
      }
    }
    allDatoCmsPrzyjacieleklubu {
      edges {
        node {
          title
          photolink
          link
          photo {
            url
          }
        }
      }
    }
  }
`


export default KontaktPage
