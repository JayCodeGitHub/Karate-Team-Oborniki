import React, { Component } from "react";
import styles from './hamburgerMenu.module.scss'
import Nav from "../navigation/navigation";
import AppContext from '../../context'
import SocialMedia from '../socialmedia/socialmedia'
import Contakt from '../contakt/contakt'


class HamburgerMenu extends Component {
    state = {
        count: false
      }
    render() {
        return (
            
            <AppContext.Consumer>
            {(context) => (
                <>
            <button 
                className={context ? styles.hamburger__active : styles.hamburger}>
                    <span className={styles.hamburger__box}>
                        <span className={styles.hamburger__inner}></span>
                    </span>
            </button>
            <div
            className={context ? styles.navigation__active : styles.navigationn}>
                <Nav/>
                <SocialMedia/>
                <Contakt/>
          </div>
          </>
          )}
          </AppContext.Consumer>
          
        );
      }
    }
    


export default HamburgerMenu;