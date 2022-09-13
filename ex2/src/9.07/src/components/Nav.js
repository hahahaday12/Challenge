import React, { useState, useEffect } from 'react'
import "./Nav.css"


export default function Nav() {

    // 스크롤 할때 nav바의 색상이 바뀌는 로직.  useState로 상태변경 관리를 해준다. 

    const [ show, setShow] = useState(false);

    useEffect( () => {
        window.addEventListener("scroll", ()=> {
            console.log('window,scroll',window.scrollY);
            if ( window.scrollY > 50) {
                setShow(true);
            }else {
                setShow(false);
            }
        })
    })
  return (
  <nav className={`nav ${show && "nav__black"}`}>
    <img
    alt='Netflix logo'
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/128px-Netflix_2015_logo.svg.png"
    className='nav__logo'
    onClick={() => window.location.reload()}
    />
    <img
        alt="User logged"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        className="nav__avatar"/>
  </nav>
  )
  }
