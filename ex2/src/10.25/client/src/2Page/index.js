import Layout from '../Layout/layout';
import styled from 'styled-components';
import Title from './header/title';
import Joininput from './join/input';

const TwoPage = () => {
    return(
        <>
        <Layout>
          
        <Titlecontainer>
        <Title/>
        
       
      

        <Joincontainer> 
            <Joininput/>
        </Joincontainer>


        </Titlecontainer>
        </Layout>
        
     
        </>
    )
}
export default TwoPage;

const Titlecontainer = styled.div`
    width: 600px;
    height: 1070px;
    position: absolute;
    display: flex;
    background-color: white;
    top: 10px;
`
const Joincontainer = styled.div`
    width: 400px;
    height: 500px;
    display: flex;
    background-color: white;
    z-index: 30;
    left: 70px;
    top: 300px;
    position:absolute;
`