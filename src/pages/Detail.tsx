import { Link, useLocation } from "react-router-dom";
import { styled } from "styled-components";

import Header from "../components/common/Header";
import { PATH_ROOT } from "../constants/path";

interface RouteState {
  state?: {
    name: string;
  };
}

const Detail = () => {
  const { state } = useLocation() as RouteState;
  return (
    <>
      <Header />
      <Wrapper>
        <Name>{state?.name}</Name>
        <BackButton to={PATH_ROOT}>메인 화면으로 가기</BackButton>
      </Wrapper>
    </>
  );
};

export default Detail;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding-top: 80px;
`;

const Name = styled.p`
  font-size: 36px;
`;

const BackButton = styled(Link)`
  background-color: lightgray;
  border-radius: 8px;
  padding: 12px 16px;
  color: white;
  font-weight: 600;
`;
