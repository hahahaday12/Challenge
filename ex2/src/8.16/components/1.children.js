const MySon = (props) => {
  return <div>이제 점점더 흥미진진 해지는걸 <br/> 뭐가 흥미진진해진다는거야? {props.name}
  <br/>  리액트 말하는거야? {props.children} </div>;
};

// props 의 값을 지정해 주지 않았을때 기본값 설정하는것. 
MySon.defaultProps = {
  name: '글쎄요 맞춰보세요'
}
export default MySon;