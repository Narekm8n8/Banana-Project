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
  
  border-left: 4px solid transparent;
  transition: .2s border-color linear;
  
`
const BorderLine = styled.div`
  height: 48px;
  margin-bottom: 72px;
  padding: 0 50px;

  :hover {
    border-left: 4px solid rgba(137, 100, 215, 1);

    * {

      fill: rgba(137, 100, 215, 1);
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

export default {NavbarWrapper, LinkWrapper, BorderLine}