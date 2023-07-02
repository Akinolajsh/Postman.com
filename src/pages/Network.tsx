import React from "react";
import styled from "styled-components";
import img from "../assets/b9724884cd02ea2f032eab63b55ac6ea4a2869516a26292bc1368d03c60f2054.png"

const Network = () => {
  return (
    <div>
      <Container>
        <Main>
          <WriteUp>
            <Title>What's happening on Postman</Title>
            <Text>
              Browse the largest network of APIs and share what you build with
              developers across the planet.{" "}
              <span>Explore the Public API Network</span>
            </Text>
          </WriteUp>
          <Holder>
            <Box>
              <Img  src={img}/>
              <Wrapper>
              <SubTitle>Instagram</SubTitle>
              <SubText>Official Instagram API workspace</SubText>

              <Wrap>
                <Div>
                  <Icon />
                  <Workspace>Workspace</Workspace>
                  <By>By Meta</By>
                </Div>
                <Div>
                  <Icon1 />
                  <Watcher>10+ watchers</Watcher>
                  <Views>5k+ views</Views>
                </Div>
              </Wrap>
              </Wrapper>
            </Box>
          </Holder>
        </Main>
      </Container>
    </div>
  );
};

export default Network;

const Views = styled.div``;
const Watcher = styled.div``;
const Icon1 = styled.div``;
const By = styled.div``;
const Workspace = styled.div`
margin-right: 20px;
`;
const Icon = styled.div``;
const Div = styled.div`
min-width: 200px;
background-color: orange;
display: flex;
`;
const Wrap = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
background-color: red;
`;
const Wrapper = styled.div`
display: flex;
width: 400px;
flex-direction: column;
justify-content: center;
background-color: yellow;
/* align-items: center; */
`;
const SubText = styled.div`
font-size: 12px;

`;
const SubTitle = styled.div`
font-size: 15px;
font-weight: 600;
`;
const Img = styled.img`
width: 30px;
`;
const Box = styled.div`
width: 350px;
padding: 20px 20px;
height: 150px;
background-color: green;
display: flex;
/* justify-content: center; */
align-items: center;
`;
const Holder = styled.div`
height: 700px;
width: 100%;
background-color: blue;
`;
const Text = styled.div`
  width: 850px;
  font-size: 15px;
  color: #6c6c6c;

  span {
    color: #0265d2;
  }
`;
const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
`;
const WriteUp = styled.div``;

const Main = styled.div`
  width: 85%;
  height: 85%;
  background-color: aquamarine;
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
`;
const Container = styled.div`
  width: 100%;
  height: 1000px;
  background-color: #d6d6d6;
  display: flex;
  align-items: center;
  justify-content: center;
`;
