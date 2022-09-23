import styled from "styled-components";
import {NavLink} from "react-router-dom";


const Logo = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 59px;
  margin-top: 64px;
`

const HeaderLinkWrapper = styled.div`
  padding-right: 99px;
`

const HeaderLink = styled(NavLink)`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: rgba(203, 177, 162, 1);
  text-decoration: none;
  transition: color .2s linear;
  display: inline-block;
  vertical-align: top;
  margin-left: 48px;
  position: relative;
  margin-top: 90px;

  :hover {
    color: rgba(137, 100, 215, 1);
  }

  :after {
    content: "";
    display: block;
    width: 100%;
    height: 4px;
    display: none;

    background-color: rgba(137, 100, 215, 1);

    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1;
  }

  :hover::after {
    display: block;
  }
`
const Header = styled.div`
  width: 100%;

  position: absolute;
  top: 0px;
  left: 160px;
  right: 0;
  z-index: 1000;
  padding-left: 99px;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default {Header, Logo, HeaderLink, HeaderLinkWrapper}