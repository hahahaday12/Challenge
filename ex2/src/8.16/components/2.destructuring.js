// 비구조화 할당 문법 . props 내부의 값 추출 하기 

const Assignment = (name, children) => {
  /*
  {props.name} 앞에 중복되는 props를 방지하기위해 비구조화 할당으로 이렇게 선언도 해줄수 있으며, 
  위 처럼 (props) 의 값에다가 name, children 자체를 가져올수도 있다. 
  const { name, children } = props;
  */
  return (
    <div>이제 점점더 흥미진진 해지는걸 <br/> 뭐가 흥미진진해진다는거야? {name}
    <br/>  리액트 말하는거야? {children} </div>
  );
};

// 기본값 설정. 
// Assignment.defaultProps = {
//   name: '글쎄요 맞춰보세요'
// }

export default Assignment;