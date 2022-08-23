
// 앞으로 props 값을 불러올때 이렇게 불러올것임. 
const Hello = ( {name, color, isLover} ) => {

  return (
    <div style={color && { color: color } }>
      안녕하세요 {name && name}님!
      {isLover ? <span>❤</span> : "💔"}
      <span style={{ color: "red", fontSize: "50px"}}>반갑습니다.</span>
      </div>
  )
}
// 리액트에서 중괄호 값은 , 변수{ 객체값{ } } 변수값을 받을수 있고 객체 값을 받을수도 있다.  변수값 중괄호, 객체값 

export default Hello;
