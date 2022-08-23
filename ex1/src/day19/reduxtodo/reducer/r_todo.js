/*
todo의 값을 추가하는 객체를 . 이벤트변화가 일어나는 
로직을 따고 빼둘꺼임. 전역적으로 관리를 해줄것이기 때문에 
reducer 라는 폴더를 따로 빼서 관리해줄것이다. 
*/

const ducerState = [
  {
    id:1,
    todo:'공부하기'
  },
  {
    id:2,
    todo:'밥먹기'
  },
];

/*
❗꿀팁? 포인트 . action명은 조금이라도 틀리면 오류가 나기 때문에  
변수화를 시켜주는 것이 좋다. 변수화를 시켜주면, 
저절로 자동완성에 뜨기 때문에. 
*/

export const INSERT_TODO = "INSERT_TODO";
export const REMOVE_STATE = "REMOVE_STATE";

    // 여기 있는 state 값을 가지고옴. 
    // 위에 있는 ducerState의 값을 가지고옴. 

const todo = (state = ducerState, action) => {
  switch(action.type){
    case INSERT_TODO:
      return[...state, {id: action.data.id , todo: action.data.todo }];
    case REMOVE_STATE:
       return state.filter( (item) => item.id);
    default:
      return state;
    }
  };
 export default todo;
