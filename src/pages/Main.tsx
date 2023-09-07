import { useEffect } from "react";
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
  const { data, refetch } = useSearchQuery(searchValue);

  // handleFocus, handleChange, isVisible 임시
  const handleFocus = () => {
    // for SearchInput handleFocus
  };

  const handleChange = (value: string) => {
    onChange(value);
  };

  const isVisible = true; // for SearchResult

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
        <div>
          <SearchInput value={searchValue} isFocus={true} onChange={handleChange} onFocus={handleFocus} />
          {isVisible && <SearchResult result={[]} focusIndex={0} />}
        </div>
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
