import React from 'react'
import styled from 'styled-components';
import "../font/font.css"

const Layout = () => {
    return(
    <>
        <ALL>
            
            <Rcontainer>
                
                <Cal/>
            </Rcontainer>
        </ALL>
    </>
    )
}
export default Layout;

// 전체적으로 들어가야할  공통 레이아웃 

const ALL = styled.div`
width: 1920px;
height: 1080px;
background-color: yellow;
display: flex;
position: absolute;
margin: 0 auto;
`
const Rcontainer = styled.div`
width: 1620px;
height: 1080px;
margin: 0 auto;
background-color: white;
`


const Cal = styled.div`
width: 800px;
height: 1080px;
display: flex;
margin: 0 auto;
background-color: white;
`
