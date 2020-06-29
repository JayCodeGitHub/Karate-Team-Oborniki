import React from "react"
import { graphql } from 'gatsby'
import styles from '../layouts/kalendarz.module.scss'




const KalendarzPage = ({data}) => {
  return (
    <div>
      <h1 className={styles.title}>{data.datoCmsKalendarz.title}</h1>
        <div className={styles.calendarWrapper}>
          <div className={styles.month}>
            <h1 className={styles.monthName}>Styczeń</h1>
                {data.datoCmsKalendarz.styczen.map(item => {
                const itemKey = Object.keys(item)[0];
                  switch(itemKey) {
                    case 'title':
                  return <li>{item.title}</li>
                    default: 
                    return null;
                  }
                })}
        </div>
        <div className={styles.month}>
            <h1 className={styles.monthName}>Luty</h1>
                {data.datoCmsKalendarz.february.map(item => {
                const itemKey = Object.keys(item)[0];
                  switch(itemKey) {
                    case 'title':
                  return <li>{item.title}</li>
                    default: 
                    return null;
                  }
                })}
        </div>
        <div className={styles.month}>
            <h1 className={styles.monthName}>Marzec</h1>
                {data.datoCmsKalendarz.march.map(item => {
                const itemKey = Object.keys(item)[0];
                  switch(itemKey) {
                    case 'title':
                  return <li>{item.title}</li>
                    default: 
                    return null;
                  }
                })}
        </div>
        <div className={styles.month}>
            <h1 className={styles.monthName}>Kwiecień</h1>
                {data.datoCmsKalendarz.april.map(item => {
                const itemKey = Object.keys(item)[0];
                  switch(itemKey) {
                    case 'title':
                  return <li>{item.title}</li>
                    default: 
                    return null;
                  }
                })}
        </div>
        <div className={styles.month}>
            <h1 className={styles.monthName}>Maj</h1>
                {data.datoCmsKalendarz.may.map(item => {
                const itemKey = Object.keys(item)[0];
                  switch(itemKey) {
                    case 'title':
                  return <li>{item.title}</li>
                    default: 
                    return null;
                  }
                })}
        </div>
        <div className={styles.month}>
            <h1 className={styles.monthName}>Czerwiec</h1>
                {data.datoCmsKalendarz.june.map(item => {
                const itemKey = Object.keys(item)[0];
                  switch(itemKey) {
                    case 'title':
                  return <li>{item.title}</li>
                    default: 
                    return null;
                  }
                })}
        </div>
        <div className={styles.month}>
            <h1 className={styles.monthName}>Lipiec</h1>
                {data.datoCmsKalendarz.lipiec.map(item => {
                const itemKey = Object.keys(item)[0];
                  switch(itemKey) {
                    case 'title':
                  return <li>{item.title}</li>
                    default: 
                    return null;
                  }
                })}
        </div>
        <div className={styles.month}>
            <h1 className={styles.monthName}>Sierpień</h1>
                {data.datoCmsKalendarz.sierpien.map(item => {
                const itemKey = Object.keys(item)[0];
                  switch(itemKey) {
                    case 'title':
                  return <li>{item.title}</li>
                    default: 
                    return null;
                  }
                })}
        </div>
        <div className={styles.month}>
            <h1 className={styles.monthName}>Wrzesień</h1>
                {data.datoCmsKalendarz.wrzesien.map(item => {
                const itemKey = Object.keys(item)[0];
                  switch(itemKey) {
                    case 'title':
                  return <li>{item.title}</li>
                    default: 
                    return null;
                  }
                })}
        </div>
        <div className={styles.month}>
            <h1 className={styles.monthName}>Pazdziernik</h1>
                {data.datoCmsKalendarz.pazdziernik.map(item => {
                const itemKey = Object.keys(item)[0];
                  switch(itemKey) {
                    case 'title':
                  return <li>{item.title}</li>
                    default: 
                    return null;
                  }
                })}
        </div>
        <div className={styles.month}>
            <h1 className={styles.monthName}>Listopad</h1>
                {data.datoCmsKalendarz.listopad.map(item => {
                const itemKey = Object.keys(item)[0];
                  switch(itemKey) {
                    case 'title':
                  return <li>{item.title}</li>
                    default: 
                    return null;
                  }
                })}
        </div>
        <div className={styles.month}>
            <h1 className={styles.monthName}>Grudzień</h1>
                {data.datoCmsKalendarz.grudzien.map(item => {
                const itemKey = Object.keys(item)[0];
                  switch(itemKey) {
                    case 'title':
                  return <li>{item.title}</li>
                    default: 
                    return null;
                  }
                })}
        </div>
    </div>
    <h1 className={styles.title}>{data.datoCmsKalendarz.titletwo}</h1>
    <div className={styles.calendarWrapper}>
          <div className={styles.month}>
            <h1 className={styles.monthName}>Styczeń</h1>
                {data.datoCmsKalendarz.styczentwo.map(item => {
                const itemKey = Object.keys(item)[0];
                  switch(itemKey) {
                    case 'title':
                  return <li>{item.title}</li>
                    default: 
                    return null;
                  }
                })}
        </div>
        <div className={styles.month}>
            <h1 className={styles.monthName}>Luty</h1>
                {data.datoCmsKalendarz.lutytwo.map(item => {
                const itemKey = Object.keys(item)[0];
                  switch(itemKey) {
                    case 'title':
                  return <li>{item.title}</li>
                    default: 
                    return null;
                  }
                })}
        </div>
        <div className={styles.month}>
            <h1 className={styles.monthName}>Marzec</h1>
                {data.datoCmsKalendarz.marzectwo.map(item => {
                const itemKey = Object.keys(item)[0];
                  switch(itemKey) {
                    case 'title':
                  return <li>{item.title}</li>
                    default: 
                    return null;
                  }
                })}
        </div>
        <div className={styles.month}>
            <h1 className={styles.monthName}>Kwiecień</h1>
                {data.datoCmsKalendarz.kwiecientwo.map(item => {
                const itemKey = Object.keys(item)[0];
                  switch(itemKey) {
                    case 'title':
                  return <li>{item.title}</li>
                    default: 
                    return null;
                  }
                })}
        </div>
        <div className={styles.month}>
            <h1 className={styles.monthName}>Maj</h1>
                {data.datoCmsKalendarz.majtwo.map(item => {
                const itemKey = Object.keys(item)[0];
                  switch(itemKey) {
                    case 'title':
                  return <li>{item.title}</li>
                    default: 
                    return null;
                  }
                })}
        </div>
        <div className={styles.month}>
            <h1 className={styles.monthName}>Czerwiec</h1>
                {data.datoCmsKalendarz.czerwiectwo.map(item => {
                const itemKey = Object.keys(item)[0];
                  switch(itemKey) {
                    case 'title':
                  return <li>{item.title}</li>
                    default: 
                    return null;
                  }
                })}
        </div>
        <div className={styles.month}>
            <h1 className={styles.monthName}>Lipiec</h1>
                {data.datoCmsKalendarz.lipiectwo.map(item => {
                const itemKey = Object.keys(item)[0];
                  switch(itemKey) {
                    case 'title':
                  return <li>{item.title}</li>
                    default: 
                    return null;
                  }
                })}
        </div>
        <div className={styles.month}>
            <h1 className={styles.monthName}>Sierpień</h1>
                {data.datoCmsKalendarz.sierpientwo.map(item => {
                const itemKey = Object.keys(item)[0];
                  switch(itemKey) {
                    case 'title':
                  return <li>{item.title}</li>
                    default: 
                    return null;
                  }
                })}
        </div>
        <div className={styles.month}>
            <h1 className={styles.monthName}>Wrzesień</h1>
                {data.datoCmsKalendarz.wrzesientwo.map(item => {
                const itemKey = Object.keys(item)[0];
                  switch(itemKey) {
                    case 'title':
                  return <li>{item.title}</li>
                    default: 
                    return null;
                  }
                })}
        </div>
        <div className={styles.month}>
            <h1 className={styles.monthName}>Pazdziernik</h1>
                {data.datoCmsKalendarz.pazdzierniktwo.map(item => {
                const itemKey = Object.keys(item)[0];
                  switch(itemKey) {
                    case 'title':
                  return <li>{item.title}</li>
                    default: 
                    return null;
                  }
                })}
        </div>
        <div className={styles.month}>
            <h1 className={styles.monthName}>Listopad</h1>
                {data.datoCmsKalendarz.listopadtwo.map(item => {
                const itemKey = Object.keys(item)[0];
                  switch(itemKey) {
                    case 'title':
                  return <li>{item.title}</li>
                    default: 
                    return null;
                  }
                })}
        </div>
        <div className={styles.month}>
            <h1 className={styles.monthName}>Grudzień</h1>
                {data.datoCmsKalendarz.grudzientwo.map(item => {
                const itemKey = Object.keys(item)[0];
                  switch(itemKey) {
                    case 'title':
                  return <li>{item.title}</li>
                    default: 
                    return null;
                  }
                })}
        </div>
      </div>
  </div>
  )
}



export const query = graphql`
  query {
    datoCmsKalendarz {
      title
      titletwo
      styczen {
        ... on DatoCmsStyczenwydarzenie {
          title
        }
      }
      february {
        ... on DatoCmsLutywydarzenie {
          title
        }
      }
      march {
        ... on DatoCmsMarzecwydarzenie {
          title
        }
      }
      april {
        ... on DatoCmsKwiecienwydarzenie {
          title
        }
      }
      may {
        ... on DatoCmsMajwydarzenie {
          title
        }
      }
      june {
        ... on DatoCmsCzerwiecwydarzenie {
          title
        }
      }
      lipiec {
        ... on DatoCmsLipiecwydarzenie {
          title
        }
      }
      sierpien {
        ... on DatoCmsSierpienwydarzenie {
          title
        }
      }
      wrzesien {
        ... on DatoCmsWrzesienwydarzenie {
          title
        }
      }
      pazdziernik {
        ... on DatoCmsPazdziernikwydarzenie {
          title
        }
      }
      listopad {
        ... on DatoCmsListopadwydarzenie {
          title
        }
      }
      grudzien {
        ... on DatoCmsGrydzienwydarzenie {
          title
        }
      }
      styczentwo {
        ... on DatoCmsStyczenkwydarzenietwo {
          title
        }
      }
      lutytwo {
        ... on DatoCmsLutywydarzenietwo {
          title
        }
      }
      marzectwo {
        ... on DatoCmsMarzectwowydarzenie {
          title
        }
      }
      kwiecientwo {
        ... on DatoCmsKwiecientwowydarzenie {
          title
        }
      }
      majtwo {
        ... on DatoCmsMajtwowydarzenie {
          title
        }
      }
      czerwiectwo {
        ... on DatoCmsCzerwiectwowydarzenie {
          title
        }
      }
      lipiectwo {
        ... on DatoCmsLipiectwowydarzenie {
          title
        }
      }
      sierpientwo {
        ... on DatoCmsSierpientwowydarzenie {
          title
        }
      }
      wrzesientwo {
        ... on DatoCmsWrzesientwowydarzenie {
          title
        }
      }
      pazdzierniktwo {
        ... on DatoCmsPazdzierniktwowydarzenie {
          title
        }
      }
      listopadtwo {
        ... on DatoCmsListopadtwowydarzenie {
          title
        }
      }
      grudzientwo {
        ... on DatoCmsGrydzientwowydarzenie {
          title
        }
      }
    }
  }
`

export default KalendarzPage


