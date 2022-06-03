import { createSlice } from "@reduxjs/toolkit";

const catSlice = createSlice({
  name: "cat",
  initialState: {
    name: "펄이 고양이",
    age: 5,
  },
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
      //툴킷에서는 immer가 불변성 유지를 해줘서 직접 변경 가능
    },
  },
});
export const { changName } = catSlice.actions;
//액션들 임포트
export default catSlice.reducer;
//리듀서 임포트

//store로 가서 불러옴
