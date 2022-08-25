export const Reducer = function reducer(state,action) {
    switch(action.type){
    case "INCREMENT":
        return state +1;
    case"DECREMENT":
      return state -1;
    default:
      return state;
    }
};
//1. reducer 의 로직을 만들었음. 
//2/reducer에 콜백 함수로 ( state, action) 을 받아야함.  그럼 state, action을 전달 해줘야함.