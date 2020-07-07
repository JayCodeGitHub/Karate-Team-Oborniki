import React from 'react' 
import { Link } from 'gatsby'
import styles from './navigation.module.scss'






const Navigation = () => (
    <div>
        <ul>
            <Link
                to='/kadra/'
                className={styles.navigationItem}
                activeClassName={styles.active}>
                    <li>
                        <h3>O Nas</h3>
                    </li>
            </Link>
            <Link 
                to='/treningi/'
                className={styles.navigationItem}
                activeClassName={styles.active}>
                    <li>
                        <h3>Treningi</h3>
                    </li>
            </Link>
            <Link 
                to='/sukcesy/'
                className={styles.navigationItem}
                activeClassName={styles.active}>
                    <li>
                        <h3>Sukcesy</h3>
                    </li>
            </Link>
            <Link 
                to='/kalendarz/'
                className={styles.navigationItem}
                activeClassName={styles.active}>
                    <li>
                        <h3>Kalendarz</h3>
                    </li>
            </Link>
            <Link 
                to='/przedszkola/'
                className={styles.navigationItem}
                activeClassName={styles.active}>
                    <li>
                        <h3 className={styles.special}>Karate w przedszkolach</h3>
                    </li>
            </Link>
            <Link 
                to='/obozy/'
                className={styles.navigationItem}
                activeClassName={styles.active}>
                    <li>
                        <h3 className={styles.special}>Obozy letnie i zimowe</h3>
                    </li>
            </Link>
            <Link 
                to='/kontakt/'
                className={styles.navigationItem}
                activeClassName={styles.active}>
                    <li>
                        <h3>Kontakt</h3>
                    </li>
            </Link>
        </ul>
    </div>
)

export default Navigation