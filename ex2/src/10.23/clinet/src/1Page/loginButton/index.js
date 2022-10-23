import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const LoinButton = () => {
    return(
        <>
            <Link to="/thirdPage" style={{width: "410px", height: "70px"}}>
                <InerButton>
                    로그인
                </InerButton>
            </Link>
        </>
    )   
    // <div><Link to="/twopage">로그인페이지</Link></div>
}
export default LoinButton;


const InerButton = styled.button`
    width: 410px;
    height: 70px;
    border-radius: 15px;
    background-color: #545454;
    border: none;
    color: white;
    text-align: center;
    font-size: 24px;
    cursor: pointer;
    margin: 0 auto;
`

