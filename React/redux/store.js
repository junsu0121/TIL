import { createStore, combineReducers } from "redux";
// createStore랑 combineReducers(모듈의 리듀서들 합치는) 사용 위해 임포트
import cat from "./modules/cat";
//만든 모듈 임포트

const rootReducer = combineReducers({ cat });
// rootReducer라는 상수에 모듈들 넣기

const store = createStore(rootReducer);
//store는 rootReducer랑 미들웨어 사용시 enhancer도 같이 묶어주기

export default store;
//export 해주기!

//리덕스 순서
// redux폴더 생성 -> store.js생성 및 작성 -> modules 폴더 생성 -> 모듈 만들기
//  -> 모듈 작성 (action, initial_state, action creator, middlewares,reducer 순으로)
//  -> index.js가서 provider로 감싸주기 -> 컴포넌트가서 useSelector로 구독하고 useDispatch로 수정요청
