import React from "react";
import { useSelector, useDispatch } from "react-redux";
// useSelector로 구독하고 useDispatch로 수정요청
import { changeName } from "./redux/modules/cat";
//액션 임포트

function App() {
  const dispatch = useDispatch();

  const cat = useSelector((state) => state.cat);
  //useSelector로 state=>state.cat형식으로 받아옴
  console.log(cat);

  return (
    <div className="App">
      <p>name::::{cat.name}</p>
      <button
        onClick={() => {
          dispatch(changeName("루비"));
          //dispatch 통해서 임포트해온 액션 넣어줌
        }}
      >
        이름 바꾸기
      </button>
    </div>
  );
}

export default App;
