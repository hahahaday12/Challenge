import Exam from '../components/2_props'

const one = () => {

  const today = "하루종일 코딩 했어요🔥";
  const feel = "좋아요💪";

return(
  <>
  <Exam 
  today={today} 
  feel={feel}

  />
 
  </>
)
}

export default one