// (props) 로 전달하면. 앞에 props. 을 적어야된다. 
/*
 비구조화 할당으로 값 그자체를 가져 오려면 ({feel}) 자체를 가져오고 
{feel} 으로 입력하면 된다. 
*/

const Exam = (props) => {
  return(
    <div>
      <p>오늘은 어떤일이 일어났나요?
        {props.today}
        <br/>
        오늘의 기분은? {props.feel && props.feel}
      </p>
     
    </div>
  )
}

export default Exam 