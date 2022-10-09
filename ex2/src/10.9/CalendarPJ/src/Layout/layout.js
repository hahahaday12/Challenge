import React from 'react'
import styled from 'styled-components';
import "../font/font.css"

const Layout = () => {
    return(
    <>
        <ALL>
            <Container>
                <Logo/>
            </Container>
            <Rcontainer>
                <div className='fonnt'>안녕하세요 </div>
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
`
const Rcontainer = styled.div`
width: 1620px;
height: 1080px;
margin: 0 auto;
background-color: blueviolet;
`

const Logo = styled.div`
width: 80px;
height: 80px;
background-color: black;
margin: 0 auto;
margin-top: 100px;
`
const Container = styled.div`
width: 300px;
height: 100%;
background-color: aqua;
`
const Cal = styled.div`
width: 800px;
height: 1080px;
display: flex;
margin: 0 auto;
background-color: beige;
`
// const H2 = styled.p`
// font-size: 30px;
// display: flex;
// position: absolute;
// `