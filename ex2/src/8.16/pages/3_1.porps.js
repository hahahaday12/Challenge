import Mycomponent from '../components/3.props';

const My = () => {    // porps를 따로 이렇게 지정하지 않았을때의 기본값은 어떻게 설정할까?
  return <Mycomponent /*name = "react"*/ />;
};

export default My;