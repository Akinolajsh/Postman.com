import React from "react";
import styled from "styled-components";
import img from "../assets/96bff51802e8a43c.png";
import GlobalButton from "../global/GlobalButton";
import img1 from "../assets/download (8).svg"

const Hero = () => {
  return (
    <div>
      <Container>
        <Main>
          <WriteUp>
            <Title>Build <span>APIs together</span></Title>
            <Text>Over 25 million developers use Postman. Get started by signing up or downloading the desktop app. </Text>
            <InputHolder>
              <Input placeholder="jsmith@example.com"/>
              <GlobalButton width="120px" height="30px" text="Sign Up for free" color="white" bg="#ff6c37" brad="0px 5px 5px 0px"/>
            </InputHolder>
            <Word>
                Download the desktop app for
            </Word>
            <App>
                <Img  src={img1}/>
                <Img1 src={img1}/>
                <Img2 src={img1}/>
            </App>
          </WriteUp>
          <Image src={img} />
        </Main>
      </Container>
    </div>
  );
};

export default Hero;

const Img2=styled.img`
background-color: white;
`
const Img1=styled.img`
background-color: white;
`
const Img=styled.img`
background-color: white;

`
const App=styled.div`
/* background-color: red; */
width: 140px;
display: flex;
justify-content: space-between;
align-items: center;
`
const Word=styled.div`
margin-top: 20px;
font-size: 12px;
font-weight: 600;
`

const Input = styled.input`
width: 270px;
padding: 0 10px;
border: none;
outline: none;
border-radius: 5px 0px 0 5px;
`;
const InputHolder = styled.div`
height: 30px;
width: 350px;
/* background-color: greenyellow; */
display: flex;
border: 1px solid #ff6c37;
border-radius: 5px;
`;
const Text = styled.div`
width: 340px;
font-size: 15px;
margin-bottom: 20px;
margin-top: 20px;
/* background-color: pink; */
`;
const Title = styled.div`
/* background-color: blue; */
font-size: 20px;
width: 90px;
span{
    font-size: 15px;
}
`;

const Image = styled.img`
  width: 75%;
  position: absolute;
  top: 0px;
  /* right: -30px; */
  overflow: hidden;
`;
const WriteUp = styled.div`
  width: 550px;
  height: 300px;
  /* background-color: red; */
  position: absolute;
  left: 30px;
  bottom: 40px;
`;
const Main = styled.div`
  width: 95%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  /* background-color: aquamarine; */
`;
const Container = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /* background-color: gray; */
`;
