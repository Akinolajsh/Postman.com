import React from "react";
import styled from "styled-components";
import img from "../assets/api-first-world-book-postman.png";
import GlobalButton from "../global/GlobalButton";

const Future = () => {
  return (
    <div>
      <Container>
        <Main>
          <Title>The future is API-first</Title>
          <Text>
            At Postman, we believe the future will be built with APIs. The
            API-first World graphic novel tells the story of how and why the
            API-first world is coming to be.
          </Text>
          <GlobalButton
            text="Read the Graphic Novel"
            width="160px"
            height="40px"
            border="1px solid #d6d6d6"
            brad="5px"
            color="#6c6c6c"
          />
        </Main>
        <Image src={img} />
      </Container>
    </div>
  );
};

export default Future;

const Text = styled.div`
  font-size: 12px;
  width: 550px;
  /* background-color: #e8e8f1; */
  color: #6c6c6c;
`;
const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

const Image = styled.img`
  width: 400px;
  right: 30px;
  bottom: 0;
  position: absolute;
`;
const Main = styled.div`
  width: 60%;
  height: 65%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  /* background-color: red; */
  position: absolute;
  left: 100px;
`;
const Container = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  background-color: #f9f9f9;
  position: relative;
`;
