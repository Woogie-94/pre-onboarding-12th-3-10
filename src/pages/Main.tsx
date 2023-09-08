import { useEffect, useState } from "react";
import { styled } from "styled-components";

import MainBackgroundSvg_1 from "../assets/svg/MainBackgroundSvg_1";
import MainBackgroundSvg_2 from "../assets/svg/MainBackgroundSvg_2";
import MainBackgroundSvg_3 from "../assets/svg/MainBackgroundSvg_3";
import Header from "../components/common/Header";
import SearchInput from "../components/search/SearchInput";
import SearchResult from "../components/search/SearchResult";
import useDebounce from "../hooks/useDebounce";
import useInput from "../hooks/useInput";
import useSearchQuery from "../queries/useSearchQuery";

const Main = () => {
  const [searchValue, onChange] = useInput("");
  const [isFocus, setIsFocus] = useState(false);
  const { data, refetch } = useSearchQuery(searchValue);

  const handleFocus = () => {
    // NOTE 바깥 클릭 시 false 값 변경 필요
    setIsFocus(true);
  };

  const handleChange = (value: string) => {
    onChange(value);
  };

  const isVisible = !!data && isFocus;

  const debounce = useDebounce();
  useEffect(() => {
    if (searchValue) {
      debounce(refetch, 200);
    }
  }, [searchValue, debounce, refetch]);

  // SearchInput, SearchResult 속성값 임시
  return (
    <Wrapper>
      <Header />
      <Inner>
        <Title>
          국내 모든 임상시험 검색하고 <br /> 온라인으로 참여하기
        </Title>
        <SearchBox>
          <SearchInput value={searchValue} isFocus={true} onChange={handleChange} onFocus={handleFocus} />
          {isVisible && <SearchResult result={data} focusIndex={0} />}
        </SearchBox>
        <MainSvg1>
          <MainBackgroundSvg_1 />
        </MainSvg1>
        <MainSvg2>
          <MainBackgroundSvg_2 />
        </MainSvg2>
        <MainSvg3>
          <MainBackgroundSvg_3 />
        </MainSvg3>
      </Inner>
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #cae9ff;
`;
const Inner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1040px;
  padding: 80px 0 160px;
`;
const Title = styled.h2`
  font-size: 2.125rem;
  line-height: 1.6;
  color: #1e2025;
  text-align: center;
  margin-bottom: 40px;
`;
const SearchBox = styled.div`
  z-index: 1;
`;
const MainSvg1 = styled.div`
  position: absolute;
  left: 0;
  top: 200px;
`;
const MainSvg2 = styled.div`
  position: absolute;
  right: 124px;
  top: 288px;
`;
const MainSvg3 = styled.div`
  position: absolute;
  right: 28px;
  top: 188px;
`;
