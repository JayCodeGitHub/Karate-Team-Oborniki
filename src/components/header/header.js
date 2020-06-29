import React, { Component } from "react"; 
import Navigation from '../navigation/navigation'
import { Link } from 'gatsby'
import styled from 'styled-components'
import logo from '../../assets/images/logo.jpg'
import SocialMedia from '../socialmedia/socialmedia'
import Contakt from '../contakt/contakt'
import AppContext from '../../context'
import HamburgerMenu from '../hamburgerMenu/hamburgerMenu'

const HeaderWrapper = styled.div`
@media (min-width: 1050px) {
        grid-template-columns: repeat(20, 5vw);
        grid-template-rows: repeat(2, 5vw);
        height: 10vw;
        box-sizing: border-box;
        border-bottom: solid black 1px;
    }
    @media (max-width: 1049px) {
        grid-template-columns: repeat(5, 20vw);
        height: 20vw;
        box-sizing: border-box;
        border-bottom: solid black 1px;
    }
    display: grid;
    width: 100vw;
`
const LogoWrapper = styled.div`
  @media (min-width: 1050px) {
        height: 10vw;
        grid-column: 1/ span 2;
        grid-row: 1/ span 2;
  }
  @media (max-width:  1049px) {
        grid-column: 1/ span 1;
        grid-row: 1/ span 1;
  }
`
const LogoNameWrapper = styled.div`
    @media (min-width: 1050px) {
        grid-column: 3/ span 14;
        grid-row: 1/ span 1;
        width: 70vw;
        height: 5vw;
        box-sizing: border-box;
        border-bottom: solid black 1px;
        border-right: solid black 1px;
        border-left: solid black 1px;
    }
    @media (max-width: 1049px) {
        grid-column: 2/ span 2;
        grid-row: 1/ span 1;
    }
    a {
        text-decoration: none;
        color: red;
    }
`
const LogoName = styled.h1`
@media (min-width: 1050px) {
        text-align: center;
        font-size: 1.8vw;
        height: 5vw;
        margin-top: 0px;
        padding-top: 1vw;
    }
    @media (max-width: 1049px) {
        font-size: 5vw;
        margin-left: 10px;
    }
    
`
const NavigationWrapper = styled.div`
 @media (min-width: 1050px) {
        grid-column: 3/ span 14;
        grid-row: 2/ span 1;
        width: 70vw;
        height: 5vw;
        box-sizing: border-box;
        border-right: solid black 1px;
        border-left: solid black 1px;
    }
    @media (max-width: 1049px) {
        display: none;
    }
    
`
const Logo = styled.img`
@media (min-width: 1050px) {
        box-sizing: border-box;
        border-bottom: solid black 1px;
        width: 10vw;
        height: 10vw;
    }
    @media (max-width: 1049px) {
        width: 20vw;
        height: 20vw;
        box-sizing: border-box;
        border-bottom: solid black 1px;
    }
`
const SocialMediaWrapper = styled.div`
@media (min-width: 1050px) {
    grid-column: 17/ span 4;
    grid-row: 1/ span 1;
    box-sizing: border-box;
    border-bottom: solid black 1px;
    }
    @media (max-width: 1049px) {
       display: none;
    }
    
`
const ContaktWrapper = styled.div`
@media (min-width: 1050px) {
    grid-column: 17/ span 4;
    grid-row: 2/ span 1;
    }
    @media (max-width: 1049px) {
       display: none;
    }
`
const HamburgerMenuWrapper = styled.div`
    @media (min-width: 1050px) {
        display: none;
    }
    @media (max-width: 1049px) {
        grid-column: 5/ span 1;
        grid-row: 1/ span 1;
        width: 20vw;
        height: 20vw;
    }

`

class Header extends Component {
    state = {
        count: false
      }
    render() {
        return (
            <AppContext.Provider value={this.state.count}>
                <HeaderWrapper>
                    <LogoWrapper onClick={() => this.setState({ count: false })}>
                        <Link to="/">
                            <Logo src={logo}/>
                        </Link>
                    </LogoWrapper>
                    <LogoNameWrapper onClick={() => this.setState({ count: false })}>
                        <Link to="/"><LogoName>Karate Team Oborniki</LogoName></Link>
                    </LogoNameWrapper>
                    <NavigationWrapper>
                        <Navigation/>
                    </NavigationWrapper>
                    <SocialMediaWrapper>
                        <SocialMedia/>
                    </SocialMediaWrapper>
                    <ContaktWrapper>
                        <Contakt/>
                    </ContaktWrapper>
                    <HamburgerMenuWrapper onClick={() => this.setState({ count: !this.state.count })}>
                        <HamburgerMenu/>
                    </HamburgerMenuWrapper>
                </HeaderWrapper>
            </AppContext.Provider>
        );
    }
}

export default Header