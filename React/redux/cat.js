//덕스구조로 모듈만듦

//action
const CHANGE_NAME = "cat/CHANGE_NAME";

//초기값 설정
const initial_state = { name: "펄이 고양이", age: 5 };
//빈 배열도 가능!

//action creator
export const changeName = (name) => {
  // 액션생성함수 생성           값을 받아서
  return { type: CHANGE_NAME, name };
  // 리턴에 액션타입과 받아올 값 //reducer에서 action.name하는 이유 type:액션, name
};

//reducer
export default function reducer(state = initial_state, action = {}) {
  //함수의 파라미터에 =은 state에 아무값이 없더라도 기본값으로 initial_state를 받아온다는 뜻
  switch (action.type) {
    //스위치문 사용(action.type)
    case "cat/CHANGE_NAME": {
      // case별로 액션 넣기
      return { ...state, name: action.name };
      //리턴값으로 state들과 액션에서 가져온 name으로 바꿔줌
    }
    default:
      return state;
    //리듀서 마지막는 무조건 default: return state;
  }
}

//작성 후 store.js에 넣기
