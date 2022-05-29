Etc)Css 요소

<hr>

Last. 마지막으로 styled 입혀주기!

<hr>

가장 아래 작성
```
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;

.button {
으로 내부에 것도 가능!
};
`;
```


- overflow
```
const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll; // hidden : 넘어가면 가려줌, scroll : 스크롤바로 보여줌, auto: 없다가 크기 넘어가면 스크롤바 생성
  max-height: 50vh;
`;
```

- input focus
```
const Input = styled.div`
  max-width: 350px;
  min-height: 10vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
  display: flex;
  & > * {
    //모든 자식들 골라줌!
    padding: 5px;
  }
  & input {
    //&는 나자신을 뜻함 자신안에 있는 input
    border: 1p
 ```
 <hr>   
    
Last2. Keyframes (animation넣기)
<hr>

keyframes는 이미 styled-components에 들어있다!

애니메이션을 구현할 때 transition(단순한효과)과 animation(다이나믹한 효과)이라는 스타일 속성을 많이 사용함!
```
import styled, { keyframes } from "styled-components";
// keyframes사용할꺼면 임포트!


const boxAnimation = keyframes`
// keyframes 상수로 만들어주고
0% {
  border-radius: 0%;
  top: 20px;
}
50% {
  border-radius: 50%;
  top: 400px;
}
100% {
  border-radius: 0%;
  top: 20px;
}
`;
const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: green;
  border-radius: 50%;
  position: absolute;
  top: 20px;
  left: 20px;
  animation: ${boxAnimation} 2s 1s infinite linear alternate;
  // animation 해서 넣어준다!
`;
x solid #888;
    width: 70%;
    margin-right: 10px;
  }
  & input:focus {
    outline: none;
    // 아웃라인 때문에 색깔이 안보임. 없애주자!
    border: 1px solid #a674fa;
  }
  & button {
    width: 25%;
    //부모 크기 기준으로
    color: #fff;
    border: #a673ff;
    background: #a673ff;
  }
`;
```
<hr>

Etc) meterial-ui 사용하기

<hr>

https://v4.mui.com/getting-started/installation/ 에서 ui icons등 설치해서 사용
```
import Button from "@material-ui/core/Button";   // 그냥 원하는 요소 찾아서 임포트해준다음

variant="outlined" 		// 원하는 속성 넣어줌
color="primary"
```
<hr>
