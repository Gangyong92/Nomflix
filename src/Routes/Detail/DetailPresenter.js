import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";

const Container = styled.div`
  /* 50px은 header height임. 100vh에서 -50px 한 이유는 스크롤
  안뜨게 하게 위해서임. */
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  /* Container와 position 조합 한 이유는 Container 전체에 배경 넣기 위함 임.
  top, left, width, height도 마찬가지 */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  filter: blur(3px);
  opacity: 0.5;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  /* 이거 없으면 Cover에 Backdrop opacity 먹힘. Content가 Backdrop 안에 있는게
   아니고 같은 레벨에 있어서 그럼 absolute로 주면 Container 기준으로 움직여서 relative
  로 줌. position 안주고 하는 방법: Backdrop를 z-index: -1을 주거나 Content 안에 있는
  Cover에 z-index: 1을 주면 됨. */
  position: relative;
`;
const Cover = styled.div`
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  width: 30%;
  height: 100%;
  border-radius: 5px;
`;

const DetailPresenter = ({ result, error, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require("../../assets/noPosterSmall.png").default
          }
        />
      </Content>
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
