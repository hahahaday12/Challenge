import styled from 'styled-components'

const LoginInput = () =>{
    return(
        <Inputbox>
            <LoInput/>
            <TwoInput/>
        </Inputbox>
    )
}
export default LoginInput;

const Inputbox = styled.div`
  width: 410px;
  height: 150px;
  margin-bottom: 30px;
`

const LoInput = styled.input`
  width: 405px;
  height: 65px;
  border: none;
  border-bottom: 4px solid #afafaf;
  background-color: rgba(0, 0, 0, 0);
  ::placeholder {
    color: rgba(255, 255, 255, 0.6);
    font-size: 30px;
  }
  &:focus {
    outline: none;
    ::placeholder {
      display: none;
    }
  }
`

const TwoInput = styled.input`
  width: 405px;
  height: 65px;
  border: none;
  border-bottom: 4px solid #afafaf;
  background-color: rgba(0, 0, 0, 0);
  ::placeholder {
    color: rgba(255, 255, 255, 0.6);
    font-size: 30px;
  }
  &:focus {
    outline: none;
    ::placeholder {
      display: none;
    }
  }
`