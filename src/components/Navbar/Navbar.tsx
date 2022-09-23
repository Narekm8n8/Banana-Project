import React from 'react';
import Styled from './styled'
import HomeIcon from "./components/HomeIcon";
import ShoppingIcon from "./components/ShoppingIcon";
import CustomerIcon from "./components/CustomerIcon";


const Navbar = () => {
    return (
        <Styled.NavbarWrapper>
            <Styled.BorderLine>
            <Styled.LinkWrapper to='/header'>
                    <HomeIcon/>
            </Styled.LinkWrapper>
            </Styled.BorderLine>
            <Styled.BorderLine>
                <Styled.LinkWrapper to='/profile'>
                    <ShoppingIcon/>
                </Styled.LinkWrapper>
            </Styled.BorderLine>
            <Styled.BorderLine>
                <Styled.LinkWrapper to='/profile'>
                    <CustomerIcon/>
                </Styled.LinkWrapper>
            </Styled.BorderLine>
        </Styled.NavbarWrapper>
    );
};

export default Navbar;