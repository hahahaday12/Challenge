import Layout from '../Layout/layout';
import styled from 'styled-components';
import Full from './Calendar';
import Listbutton from './buttonpage/button';
import Welcome from './name';
import Out from './Logout';

const ThirdPage = () => {

  
 // if(localstopre.get("token") != null ) == null이면  alert(잘못된 접근입니다. ) 하고 login 화면으로 이동
 //   var accsessToekn = localstopre.get("token"); jdaklsjdlkajsdlkajskldjaklsdj
  // axios에 담아서 서버에 보내고 response 404/ 200 = 200이면 header 공통에 저장하고 
  // 누구님 환영합니다. 성공여부 successful / 유저의 정보를 달라고 하면된다. 데이터 (name.id) 
 //  404뜨면 alert(잘못된 접근입니다. ) 하고 login 화면으로 이동

  // 사용자 정보를 어떻게 관리 할것인지 local로 관리할것인지 .  3 페이지 들어오자마자 (로그인 정보를 가져와야 하니까 )
  //저장된 토큰을 조회 후 ||  있으면 해당 (토큰이 유효한 토큰인지 조회 =백엔드에서 유요한지)
  // 조회 했을때 유효하지않으면 로그인 페이지로 이동 
  // 없으면 다시 로그인 페이지로 가고(잘못된 접근입니다.) , 있으면, 로그인 정보를 서버에서 가져오는. 불러와야함. 
  // 


  return(
    <>
    <Layout>
      <Full></Full>
    </Layout>
    </>
  )
};

export default ThirdPage;

