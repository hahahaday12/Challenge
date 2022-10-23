import React from 'react'
import OneLayout from './layout/_layout'
import LoginInput from './logininput'
import LogoIner from './logoimg'
import LoinButton from './loginButton/index'
import Join from './join'
import styled from 'styled-components'



const Onepage = () => {
    return(
        <>
       <LogoIner>
        </LogoIner>

        <Lowbox>
        <LoginInput/>
        <LoinButton/>
        <Join/>
        </Lowbox>

        <OneLayout>
        </OneLayout>

        </>
        
        
            )
}
export default Onepage;

const Lowbox = styled.div`
   width: 410px;
    height: 500px;
    display: flex;
    position: absolute;
    background-color:white;
    z-index: 60;
    left: 750px;
    top: 500px;
`
