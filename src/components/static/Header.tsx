import React from "react";
import styled from "styled-components";
import img from "../../assets/postmanLogo.png"
import GlobalButton from "../../global/GlobalButton";
import {GoSearch} from "react-icons/go"
import {FaAngleDown} from "react-icons/fa"

const Header = () => {
  return (
    <div>
      <Container>
        <Main>
          <NavHolder>
            <Logo src={img}/>
            <Nav>Product <Icon1/></Nav>
            <Nav>Pricing</Nav>
            <Nav>Enterprise <Icon2/></Nav>
            <Nav>Resources and Support <Icon3/></Nav>
            <Nav>Explore</Nav>
          </NavHolder>
          <ButtonHolder>
            <SearchHolder>
              <Icon/>
              <Text>
                Search Postman
              </Text>
            </SearchHolder>
            <Button>
              <GlobalButton width="60px" height="30px" text="Sign In" color="black" border="1px olid Sliver" brad="5px"/>
              <GlobalButton width="120px" height="30px" text="Sign Up for free" color="white" bg="#ff6c37" brad="5px"/>
            </Button>
          </ButtonHolder>
        </Main>
      </Container>
    </div>
  );
};

export default Header;

const Button = styled.div`
display: flex;
width: 200px;
align-items: center;
justify-content: space-between;
`;
const Text = styled.div`
font-size: 12px;
color: #6c6c6c;

`;
const Icon3 = styled(FaAngleDown)`
color: #6c6c6c;
margin-top: 3px;

`;
const Icon2 = styled(FaAngleDown)`
color: #6c6c6c;
margin-top: 3px;


`;
const Icon1 = styled(FaAngleDown)`
color: #6c6c6c;
margin-top: 3px;
`;
const Icon = styled(GoSearch)`
color: #6c6c6c;
font-size: 16px;
margin-right: 10px;
`;
const SearchHolder = styled.div`
background-color: #f2f2f2;
width: 180px;
height: 35px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 5px;

:hover{
  cursor: pointer;
}
`;
const Nav = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-weight: 700;
font-size: 13px;
color: #6c6c6c;
`;
const Logo = styled.img`
width: 30px;
`;
const ButtonHolder = styled.div`
display: flex;
width: 550px;
align-items: center;
justify-content: space-between;
/* background-color: red; */
`;
const NavHolder = styled.div`
display: flex;
width: 570px;
align-items: center;
justify-content: space-between;
/* background-color: red; */
`;
const Main = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 98%;
height: 100%;
`;
const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  z-index: 10;
  background-color: white;
`;
