import { useState } from "react";
import styled from "styled-components";
import img from "../assets/b9724884cd02ea2f032eab63b55ac6ea4a2869516a26292bc1368d03c60f2054.png";
import { AiOutlineEye } from "react-icons/ai";
import img1 from "../assets/download (11).svg";

const Network = () => {
  const [show, setShow] = useState([
    {
      title: "Instagram",
      text: "Official Instagram API workspace",
      image: {},
      by: "BY Meta",
      watchers: "10+ wacthers",
      views: "5+ views"
    },
    {
      title: "Instagram",
      text: "Official Instagram API workspace",
      image: "images/",
      by: "BY Meta",
      watchers: "10+ wacthers",
      views: "5+ views"
    },
    {
      title: "Instagram",
      text: "Official Instagram API workspace",
      image: "images/",
      by: "BY Meta",
      watchers: "10+ wacthers",
      views: "5+ views"
    },
    {
      title: "Instagram",
      text: "Official Instagram API workspace",
      image: "images/",
      by: "BY Meta",
      watchers: "10+ wacthers",
      views: "5+ views"
    },
    {
      title: "Instagram",
      text: "Official Instagram API workspace",
      image: "images/",
      by: "BY Meta",
      watchers: "10+ wacthers",
      views: "5+ views"
    },
    {
      title: "Instagram",
      text: "Official Instagram API workspace",
      image: "images/",
      by: "BY Meta",
      watchers: "10+ wacthers",
      views: "5+ views"
    },
    {
      title: "Instagram",
      text: "Official Instagram API workspace",
      image: "images/",
      by: "BY Meta",
      watchers: "10+ wacthers",
      views: "5+ views"
    },
    {
      title: "Instagram",
      text: "Official Instagram API workspace",
      image: "images/",
      by: "BY Meta",
      watchers: "10+ wacthers",
      views: "5+ views"
    },
    {
      title: "Instagram",
      text: "Official Instagram API workspace",
      image: "images/",
      by: "BY Meta",
      watchers: "10+ wacthers",
      views: "5+ views"
    },
    {
      title: "Instagram",
      text: "Official Instagram API workspace",
      image: "images/",
      by: "BY Meta",
      watchers: "10+ wacthers",
      views: "5+ views"
    },
  ]);

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
{
    show.map((el)=>(
        <Box>
        <Img src={img} />
        <Wrapper>
          <SubTitle>{el.title}</SubTitle>
          <SubText>{el.text}</SubText>

          <Wrap>
            <Div>
              <Icon src={img1} />
              <Workspace>Workspace</Workspace>
              <By>{el.by}</By>
            </Div>
            <Div>
              <Icon1 />
              <Watcher>{el.watchers}</Watcher>
              <Views>{el.views}</Views>
            </Div>
          </Wrap>
        </Wrapper>
      </Box>
    ))
}
          </Holder>
        </Main>
      </Container>
    </div>
  );
};

export default Network;

const Views = styled.div``;
const Watcher = styled.div`
  margin-right: 20px;
`;
const Icon1 = styled(AiOutlineEye)`
  margin-right: 5px;
`;
const By = styled.div``;
const Workspace = styled.div`
  margin-right: 20px;
`;
const Icon = styled.img`
  width: 15px;
  margin-right: 5px;
`;
const Div = styled.div`
  min-width: 200px;
  display: flex;
  align-items: center;
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px 0;
  font-size: 12px;
  color: #6c6c6c;
`;
const Wrapper = styled.div`
  display: flex;
  width: 400px;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;
const SubText = styled.div`
  font-size: 14px;
  margin-bottom: 30px;
`;
const SubTitle = styled.div`
  font-size: 15px;
  font-weight: 600;
`;
const Img = styled.img`
  width: 30px;
  margin-right: 10px;
`;
const Box = styled.div`
  width: 310px;
  border-radius: 5px;
  border: 1px solid silver;
  padding: 20px 20px;
  height: 120px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  :hover {
    cursor: pointer;
    background-color: #f2f2f2;
  }
`;
const Holder = styled.div`
  height: 700px;
  width: 96%;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: red; */
  margin-top: 20px;
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
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  width: 100%;
  height: 900px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
