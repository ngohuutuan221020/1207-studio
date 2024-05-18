import React from "react";

import styled from "styled-components";

export default function Header() {
  return (
    <Wrapper id="home" className="containerNews flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div>
          <h1
            className="extraBold font60"
            style={{
              textTransform: "",
            }}
          >
            Reaching the Summits of excellence
          </h1>
          <HeaderP className="font13 semiBold">
            Porcelain flower villa is a project with much enthusiasm of the
            design and construction team 1207 design 1207 studio
            <br />
            It is a combination of gentle, classical lines and the homeowner's
            lifestyle.
          </HeaderP>
        </div>
      </LeftSide>
      <RightSide>
        <ImageWrapper>
          <Img
            className="radius8"
            src={"https://www.1207studio.com/images/1207/71/1.jpg"}
            alt="office"
            style={{
              zIndex: 9,
              height: "35rem",
              width: "25rem",
              objectFit: "cover",
            }}
          />
          <QuoteWrapper className="flexCenter darkBg radius8">
            <div>
              <p className="font15 whiteColor">
                <em>
                  1207 design studio always strives to bring the highest quality
                  products to homeowners.
                </em>
              </p>
              <p
                className="font13 orangeColor textRight"
                style={{ marginTop: "10px" }}
              >
                1207 studio
              </p>
            </div>
          </QuoteWrapper>
        </ImageWrapper>
      </RightSide>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: 3rem;
  width: 100%;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;
const QuoteWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 50px;
  max-width: 330px;
  padding: 30px;
  z-index: 99;
  @media (max-width: 960px) {
    left: 20px;
  }
  @media (max-width: 560px) {
    bottom: -50px;
  }
`;
