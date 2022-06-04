import { useParams, useNavigate } from "react-router-dom";
// useHistory 대신 useNavigate사용
const Cat = () => {
  const params = useParams();
  //useParams로 파라미터로 데이터 받아오기
  console.log(params);
  const navigate = useNavigate();
  return (
    <div>
      <h1>고양이!</h1>
      <button
        onClick={() => {
          navigate("/");
          //navigate로 페이지 이동처리
        }}
      >
        메인 페이지 가기
      </button>
    </div>
  );
};

export default Cat;
