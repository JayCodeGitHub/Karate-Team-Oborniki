import React from "react"
import { graphql } from 'gatsby'
import styles from '../layouts/treningi.module.scss'




const TreningiPage = ({data}) => {
  return (
    <div>
      <div className={styles.trainingsWrapper}>
        {data.datoCmsTreningi.title ? 
        <div className={styles.training}>
        <h1 className={styles.title}>{data.datoCmsTreningi.title}</h1>
          {data.datoCmsTreningi.grupa.map(item => {
          const itemKey = Object.keys(item)[0];
            switch(itemKey) {
              case 'trening':
                return <li>{item.trening}</li>
              default: 
              return null;
            }
        })}
        </div> : <div></div>}
        {data.datoCmsTreningi.tytletwo ? 
        <div className={styles.training}>
        <h1 className={styles.title}>{data.datoCmsTreningi.tytletwo}</h1>
          {data.datoCmsTreningi.grupatwo.map(item => {
          const itemKey = Object.keys(item)[0];
            switch(itemKey) {
              case 'trening':
                return <li>{item.trening}</li>
              default: 
              return null;
            }
        })}
        </div> : <div></div>}
        {data.datoCmsTreningi.titlethree ? 
        <div className={styles.training}>
        <h1 className={styles.title}>{data.datoCmsTreningi.titlethree}</h1>
          {data.datoCmsTreningi.grupathree.map(item => {
          const itemKey = Object.keys(item)[0];
            switch(itemKey) {
              case 'trening':
                return <li>{item.trening}</li>
              default: 
              return null;
            }
        })}
        </div> : <div></div>}
        {data.datoCmsTreningi.titlefour ? 
        <div className={styles.training}>
        <h1 className={styles.title}>{data.datoCmsTreningi.titlefour}</h1>
          {data.datoCmsTreningi.grupafour.map(item => {
          const itemKey = Object.keys(item)[0];
            switch(itemKey) {
              case 'trening':
                return <li>{item.trening}</li>
              default: 
              return null;
            }
        })}
        </div> : <div></div>}
        {data.datoCmsTreningi.titlefive ? 
        <div className={styles.training}>
        <h1 className={styles.title}>{data.datoCmsTreningi.titlefive}</h1>
          {data.datoCmsTreningi.grupafive.map(item => {
          const itemKey = Object.keys(item)[0];
            switch(itemKey) {
              case 'trening':
                return <li>{item.trening}</li>
              default: 
              return null;
            }
        })}
        </div> : <div></div>}
        {data.datoCmsTreningi.titlesix ? 
        <div className={styles.training}>
        <h1 className={styles.title}>{data.datoCmsTreningi.titlesix}</h1>
          {data.datoCmsTreningi.grupasix.map(item => {
          const itemKey = Object.keys(item)[0];
            switch(itemKey) {
              case 'trening':
                return <li>{item.trening}</li>
              default: 
              return null;
            }
        })}
        </div> : <div></div>}
        {data.datoCmsTreningi.titleseven ? 
        <div className={styles.training}>
        <h1 className={styles.title}>{data.datoCmsTreningi.titleseven}</h1>
          {data.datoCmsTreningi.grupaseven.map(item => {
          const itemKey = Object.keys(item)[0];
            switch(itemKey) {
              case 'trening':
                return <li>{item.trening}</li>
              default: 
              return null;
            }
        })}
        </div> : <div></div>}
        {data.datoCmsTreningi.titleeight ? 
        <div className={styles.training}>
        <h1 className={styles.title}>{data.datoCmsTreningi.titleeight}</h1>
          {data.datoCmsTreningi.grupaeight.map(item => {
          const itemKey = Object.keys(item)[0];
            switch(itemKey) {
              case 'trening':
                return <li>{item.trening}</li>
              default: 
              return null;
            }
        })}
        </div> : <div></div>}
        {data.datoCmsTreningi.titlenine ? 
        <div className={styles.training}>
        <h1 className={styles.title}>{data.datoCmsTreningi.titlenine}</h1>
          {data.datoCmsTreningi.grupanine.map(item => {
          const itemKey = Object.keys(item)[0];
            switch(itemKey) {
              case 'trening':
                return <li>{item.trening}</li>
              default: 
              return null;
            }
        })}
        </div> : <div></div>}
        {data.datoCmsTreningi.titleten ? 
        <div className={styles.training}>
        <h1 className={styles.title}>{data.datoCmsTreningi.titleten}</h1>
          {data.datoCmsTreningi.grupaten.map(item => {
          const itemKey = Object.keys(item)[0];
            switch(itemKey) {
              case 'trening':
                return <li>{item.trening}</li>
              default: 
              return null;
            }
        })}
        </div> : <div></div>}
      </div>
    </div>
  )
}

export const query = graphql`
  query {
    datoCmsTreningi {
      title
      tytletwo
      titlethree
      titlefour
      titlefive
      titlesix
      titleseven
      titleeight
      titlenine
      titleten
      grupa {
        ... on DatoCmsGrupajedentreningi {
          trening
        }
      }
      grupatwo {
        ... on DatoCmsGrupatwotreningi {
          trening
        }
      }
      grupathree {
        ... on DatoCmsGrupathreetreningi {
          trening
        }
      }
      grupafour {
        ... on DatoCmsGrupafourtreningi {
          trening
        }
      }
      grupafive {
        ... on DatoCmsGrupafivetreningi {
          trening
        }
      }
      grupasix {
        ... on DatoCmsGrupasixtreningi {
          trening
        }
      }
      grupaseven {
        ... on DatoCmsGrupaseventreningi {
          trening
        }
      }
      grupaeight {
        ... on DatoCmsGrupaeighttreningi {
          trening
        }
      }
      grupanine {
        ... on DatoCmsGrupaninetreningi {
          trening
        }
      }
      grupaten {
        ... on DatoCmsGrupatentreningi {
          trening
        }
      }
    }
  }
`


export default TreningiPage
