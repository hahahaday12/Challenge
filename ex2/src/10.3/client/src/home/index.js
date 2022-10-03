import styled from 'styled-components';
import React from 'react';



const Button = styled.button`
    /*공통 스타일*/
    display: flex;
    position: absolute;
    align-items: center;
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;
    top: 400px;
    margin-left: 293px;
  


    /*크기*/
    height: 4.20rem;
    font-size: 2rem;

    /*색상 */
    background: #FFD1D1;
    &:hover{
        background: #FFE3E1;
    }
    &:active{
        background: #1c7ed6;
    }
`
const HomeButton = ({children,...rest}) => {
    return(
    <Button {...rest}>{children}
    </Button>
    )
}
export default HomeButton;