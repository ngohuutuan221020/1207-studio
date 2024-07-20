import React from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";
// Assets

import ProjectImg1 from "../../assets/project1.jpg";
import ProjectImg2 from "../../assets/project2.jpg";
import ProjectImg3 from "../../assets/ProjectImg3.jpg";
import AddImage2 from "../../assets/bgproject.jpg";
import { HashLink } from "react-router-hash-link";
import Button from "react-bootstrap/Button";

export default function Projects() {
  return (
    <Wrapper id="projects">
      <div className="lightBg">
        <div className="containerNews">
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              <AddLeftInner>
                <ImgWrapper className="flexCenter">
                  <img className="radius8" src={AddImage2} alt="add" />
                </ImgWrapper>
              </AddLeftInner>
            </AddLeft>
            <AddRight>
              <h4 className="font15 semiBold">1207 studio</h4>
              <h2 className="font40 extraBold">REACHING NEW HEIGHTS</h2>
              <p className="font12">
                There are simple beauties that are in harmony between the design
                and the investor.
                <br />
                There are simple motivations of subtlety and recognition
              </p>
            </AddRight>
          </Advertising>
        </div>
      </div>
      <div className="whiteBg">
        <div className="containerNews">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Awesome Projects</h1>
            <p className="font13">
              1207 Studio is an architectural masterpiece that encompasses a
              fully functional commercial center, offices, premium apartments,
              and a hotel. 1207 Studio stands as a symbol of pinnacle
              prosperity, marking Vietnam's strong and dynamic rise as a new
              Dragon of Asia.
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg1}
                title="CHARLI VILLA"
                text="Open architecture is a design style that creates a connection between indoor and outdoor spaces. Ventilation and natural light bring many new experiences to the living space."
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg2}
                title="MEDITATION CENTER"
                text="Buddhism must be associated with daily life, with your pain and the pain of those around you. You must learn how to help an injured child while maintaining mindful breathing. You must keep yourself from getting lost in the action. Action must go with meditation"
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg3}
                title="JENNY HOUSE"
                text="We often only look at the house from a tangible, material perspective, but sometimes forget that the house also contains a soul. The way we decorate our homes reflects our personality, as well as our own physical and mental needs. It is the close connection and rhythmic interaction between people and their places that create the soul of a home."
              />
            </div>
          </div>

          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <Button variant="primary">
                <HashLink
                  to={`/projects`}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    letterSpacing: "0.05rem",
                    cursor: "pointer",
                  }}
                >
                  View More
                </HashLink>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: 5rem;
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;

const AddLeft = styled.div`
  position: relative;
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  @media (max-width: 860px) {
    width: 80%;
    order: 2;
  }
`;
const AddLeftInner = styled.div`
  width: 100%;
  position: absolute;
  top: -300px;
  left: 0;
  @media (max-width: 1190px) {
    top: -250px;
  }
  @media (max-width: 920px) {
    top: -200px;
  }
  @media (max-width: 860px) {
    order: 1;
    position: relative;
    top: -60px;
    left: 0;
  }
`;
const ImgWrapper = styled.div`
  width: 100%;
  padding: 0 15%;
  img {
    width: 100%;
    height: auto;
  }
  @media (max-width: 400px) {
    padding: 0;
  }
`;
