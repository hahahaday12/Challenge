import UserNumber from './day05/map';
import Main from './day05/map';
import'./App.css';


const App  = () => {
  const names = [
        {fruite: "자두", price:2000}, 
        {fruite: "바나나", price:1500},
        {fruite:"사과", price:2500}
  ]
  const nameList = names.map( (v) => (<Main name={v.fruite} price={v.price}/>))
  return(
      <div>
            {nameList}
      </div>
  )
};


export default App;
