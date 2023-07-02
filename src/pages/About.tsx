import { useState } from "react";
import styled from "styled-components";
import img from "../assets/homepage-header-illustration.3385ecf.svg";
import spanner from "../assets/download (9).svg";
import GlobalButton from "../global/GlobalButton";

const About = () => {
  const [show, setShow] = useState([
    {
      img: { spanner },
      title: "API Tools",
      text: " A comprehensive set of tools that help accelerate the APi Lifecycle from design, testing, documentation, and mocking to discovery.",
    },
    {
      img: { spanner },
      title: "API Tools",
      text: " A comprehensive set of tools that help accelerate the APi Lifecycle from design, testing, documentation, and mocking to discovery.",
    },
    {
      img: { spanner },
      title: "API Tools",
      text: " A comprehensive set of tools that help accelerate the APi Lifecycle from design, testing, documentation, and mocking to discovery.",
    },
    {
      img: { spanner },
      title: "API Tools",
      text: " A comprehensive set of tools that help accelerate the APi Lifecycle from design, testing, documentation, and mocking to discovery.",
    },
  ]);

  return (
    <div>
      <Container>
        <Main>
          <WriteUp>
            <Title>What is Postman?</Title>
            <Text>
              Postman is an API platform for building and using APIs. Postman
              simplifies each step of the API lifecycle and streamlines
              collaboration so you can create better APIs—faster.
            </Text>
          </WriteUp>
          <Img src={img} />
          <Holder>
            {show.map((el) => (
              <Box>
                <Image src={spanner} />
                <SubText>{el.title}</SubText>
                <Words>{el.text}</Words>
              </Box>
            ))}
          </Holder>
            <GlobalButton width="80px" height="25px" text="Learn more" brad="5px" border="1px solid #d6d6d6"/>
        </Main>
      </Container>
    </div>
  );
};

export default About;

const Image = styled.img`
  width: 30px;
`;
const Words = styled.div`
  font-size: 13px;
  color: #6c6c6c;
`;
const SubText = styled.div`
  font-weight: 600;
`;
const Box = styled.div`
  width: 230px;
  height: 150px;
  padding: 20px 20px;
  display: flex;
  background-color: white;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  /* border: 1px solid #6c6c6c; */
`;
const Holder = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: red; */
`;

const Img = styled.img`
  width: 280px;
  position: absolute;
  right: 30px;
  top: -140px;
`;
const Text = styled.div`
  /* background-color: red; */
  width: 620px;
  font-size: 15px;
  color: #6c6c6c;
`;
const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
`;
const WriteUp = styled.div`
  margin-top: 20px;
`;
const Main = styled.div`
  width: 90%;
  height: 75%;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  flex-direction: column;
  /* background-color: dodgerblue; */
  position: relative;
`;
const Container = styled.div`
  width: 100%;
  height: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9f9f9;
`;
