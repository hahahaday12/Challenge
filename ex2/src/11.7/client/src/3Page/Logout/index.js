import AuthService from '../../service/auth.service';
import { useState, useEffect } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import styled from 'styled-components';
import './index.css'

function Out() {
  const logOut = () => {
    AuthService.logout();
  }

  return(
    
   // currentUser && (
      <LogoutContainer>
        <LogoutBox>
          <a href='/'onClick={logOut}>Logout</a>
        </LogoutBox>
      </LogoutContainer>
       // ) 
)};
export default Out;

const LogoutContainer = styled.div`
  width: 200px;
  height: 50px;
  bottom: 80px;
  display: flex;
  position: relative;
  left: 50px;
`
const LogoutBox = styled.div`
  width: 130px;
  font-size: 30px;
  margin-left: 50px;
  color: darkgray;
  text-decoration: none;
`
