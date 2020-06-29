import React from "react"
import { graphql } from 'gatsby'
import styles from '../layouts/obozy.module.scss'





const ObozyPage = ({ data }) => {
  return (
    <div>
      <div>
       {data.datoCmsObozy.obozy.map(item => {
         const itemKey = Object.keys(item)[2];
          switch(itemKey) {
            case 'title':
              return <h1 className={styles.title}>{item.title}</h1>
            case 'photolink':
              return <img src={item.photolink} alt='zdięcie z obozu' className={styles.img}/>;
            case 'paragraph':
              return <h2 className={styles.paragraph}>{item.paragraph}</h2>
            case 'film':
              return <div><iframe title="film z obozu" className={styles.film} src={item.film} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowfullscreen></iframe></div>
            case 'photo':
              return <img src={item.photo.url}alt="zdięcie z obozu" className={styles.img}/>
            default: 
            return null;
          }
       })}
      </div>
    </div>
  )
}

export const query = graphql`
  query {
    datoCmsObozy {
      obozy {
        ... on DatoCmsTitle {
          id
          title
        }
        ... on DatoCmsFilm {
          id
          film
        }
        ... on DatoCmsParaghraph {
          id
          paragraph
        }
        ... on DatoCmsPhotolink {
          id
          photolink
        }
        ... on DatoCmsPhoto {
          id
          photo {
            url
          }
        }
      }
    }
  }
`

export default ObozyPage
