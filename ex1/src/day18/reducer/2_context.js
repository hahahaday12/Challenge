import { createContext, useReducer } from 'react';

export const Context = createContext();

// 이것들이 이제 전역으로 관리되서 어떤 컴포넌트에서도 불러냃수 있게 만들것임. 그 역할을 하는게 context
// 전체가 전역상태기 때문에 이 안에서 상태 로직을 바꿔줘야 하니까 어절수 없이 무조건 reducer 을 써줘야 한다. 
// 로직상태의 가독성이 좋게 하기 위해서 같은 폴더 안에 있어야 한다. 같은 파일 안에 있는게 

const ducerState  = [
  {
    id: 1, 
    name: "사과",
  },
  {
    id:2,
    name:"바나나",
  },
  {
    id: 3, 
    name: "오렌지"
  },
];
/*
 action 명의 오타 방지를 위해 변수화 시킴
*/

export const REMOVE_STATE = "REMOVE_STATE";
export const ADD_STATE =  "ADD_STATE";

const reducer = (state, action) => {
   switch (action.type) {
    // 추가의 로직
      case "ADD_STATE":
          return[...state,{ id: action.id, name: action.name}];
    // 삭제의 로직 
          case "REMOVE_STATE":
          return state.filter( (item) => item.id !== action.id);
    default:
      return state;
    }
};

// 이제 선언한 변수를 전체적으로 뿌려줄 역할! 

const ContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, ducerState);
  // ducerState 가 전역변수값 넣어주고 걔를 기본값으로 넣어주는 reducer. 그럼 state 값이 변동됨. 그래서 setState가 ㄴ.

  return(

    // context 아래에 createContext 아래에 Provider 라는 무언가가 있는데, 상위라고 할수 있는 context 에서 
    // context의 하위인 provider을 가지고 온것 뿐임. 객체 가지고 오듯이. action.type가져오듯 
    // useContext() 가 return  하는 값이 Context.Provider 의 Value 부분이다.
    <Context.Provider  value={{state,dispatch}}>
      {children}
    </Context.Provider>
    // children = <div>hi</div> => 이렇게 태그들로 감싼 내용이 children 으로 전달됨. 
    // children 값은 모든 컴포넌트가 되어야만 전달할수 있다. 어디다가 전달할까?
    // 최상위 index.js 에 덮어도 된다. > 하지만 지금은 App.js에 덮어보자 
  )
};
export default ContextProvider;


