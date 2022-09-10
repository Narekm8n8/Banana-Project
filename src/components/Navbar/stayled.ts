import styled from "styled-components"
import {NavLink} from "react-router-dom";

const NavbarWrapper = styled.div`
  width: 160px;
  height: 100vh;
  background: #FFE4D6;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 127px;
`

const LinkWrapper = styled(NavLink)`
  display: flex;
  align-items: center;
  margin-bottom: 72px;
  transition: .2s fill linear;

  :hover  {
    * {
      fill: rgba(137, 100, 215, 1);;
    }
  }
`


// const HomeIconStyle = styled.div`
//   width: 48px;
//   height: 48px;
//
//
//   :hover * {
//     fill: rgba(137, 100, 215, 1);
//   }
//
//   :active * {
//     fill: rgba(137, 100, 215, 1);
//   }
//
// `

export default {NavbarWrapper, LinkWrapper}