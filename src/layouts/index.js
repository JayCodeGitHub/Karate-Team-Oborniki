import React from "react";
import styled from 'styled-components'
import Header from '../components/header/header'
import GlobalStyle from '../assets/styles/globalStyles'
import FotterWrapper from '../components/fotter/fotter'
import { Helmet } from "react-helmet"

const Content = styled.div`
    min-height: 75vh;
`


const MainLayout = ({ children }) => (
    <>
        <Helmet>
            <title>Karate Team Oborniki</title>
        </Helmet>
        <GlobalStyle/>
        <Header/>
        <Content>{children}</Content>
        <FotterWrapper/>
    </>   
)

export default MainLayout