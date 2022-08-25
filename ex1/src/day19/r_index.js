import React from 'react';
import ReactDOM  from 'react-dom/client';
import "./index.css"
import App from './App';


// 리덕스 설정 
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducer/_index;'

// dev-tools 미들웨어 적용
import {composeWithDevTools} from "redux-devtools-extension";
const store = createStore(rootReducer, composeWithDevTools());
// rootReducer 여기 안에는 애초에 받에 만들어놨음. composeWithDevTools 두번째 인자로 받게 만들어져있고 ()안에는 미들웨어


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // 아래 에 프로바이더 안에 값을 줘야만, const store 에서 전달할수 있음. 그리고 이 Provider 에 전달이 됨
    <Provider store={store}>
        <App />
    </Provider>
);