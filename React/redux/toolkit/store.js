// <툴킷 사용 전>
// import { createStore, combineReducers } from "redux";
// // createStore랑 combineReducers(모듈의 리듀서들 합치는) 사용 위해 임포트
// import cat from "./modules/cat";
// //만든 모듈 임포트

// const rootReducer = combineReducers({ cat });
// // rootReducer라는 상수에 모듈들 넣기

// const store = createStore(rootReducer);
// //store는 rootReducer랑 미들웨어 사용시 enhancer도 같이 묶어주기

// export default store;
// //export 해주기!

//리덕스 순서
// redux폴더 생성 -> store.js생성 및 작성 -> modules 폴더 생성 -> 모듈 만들기
//  -> 모듈 작성 (action, initial_state, action creator, middlewares,reducer 순으로)
//  -> index.js가서 provider로 감싸주기 -> 컴포넌트가서 useSelector로 구독하고 useDispatch로 수정요청

//<리덕스 툴킷>
//yarn add @reduxjs/toolkit로 설치 -> 스토어 작성 -> Slice.js에서 모듈 작성 -> 스토어에 리듀서 가져오기 -> 컴포넌트에서 디스패치 해주기
import { configureStore } from "@reduxjs/toolkit";
//툴킷에서 가져온다.
import catReducer from "./modules/catSlice";

const store = configureStore({ reducer: { cat: catReducer } });

export default store;
