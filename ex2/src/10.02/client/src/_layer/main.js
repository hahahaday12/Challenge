import React from 'react'
import styled from 'styled-components';

const Mainpage = () => {
    return(
        <>
        <P>HAHA BOARD🐾</P>
        <All>
            <Innerbox>
            </Innerbox>
        </All>
        </>
       
      
    )
}
export default Mainpage;

const P = styled.p`
color: black;
font-size: 50px;
text-align: center;
top: 80px;
margin-left: 600px;
position:absolute;
`
const All = styled.div`
display: block;
width: 1000px;
background-color: beige;
height: 900px;
margin-left: 270px;
margin-top: 200px;
margin-bottom: 100px;
`
const Innerbox = styled.div`
display: flex;
width: 200px;
background-color: aqua;
height: 700px;
`