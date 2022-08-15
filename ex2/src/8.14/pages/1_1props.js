// re.porps 에 담을 정보들을 여기에다가 담아보자 

import Porp from '../components/1_props'

  const user = () => {
    
    const user = "코딩쉽잖아?";
    const choose = true;
    const color = "orange";
    
    return(
      <>
      <Porp  user= "코딩쉽잖아" />
      <Porp  name= "코딩어려워" color="blue" />
      <Porp  name={user} color={color} choose={choose} />
      </>
    )
  }
export default user