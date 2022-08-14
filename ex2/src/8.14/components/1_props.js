//  props 를 통해 컴포넌트에게 값 전달하기. 
//  props 를 사용해 컴포넌트에 전달하는 예제들을 연습하기.

/*
props 는 properties 의 줄임말. 어떠한 값을 컴포넌트에게 전달해줘야 할 때, props 를 사용한다.
*/

// props 의 값을 불러오는 연습. 
const Porp = ({user,choose,color}) => {

  return(
    <div style={color && { color: color }}>
      안녕하세요 {user && user} 님!
      {choose ? <span>🐾</span> : "🔥"}

      <span style={{ color: "purple", fontSize: "20px"}}>
        코딩세계에 오신것을 환영합니다.
      </span>
    </div>
  )
}
export default Porp

