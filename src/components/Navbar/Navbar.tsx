import React from 'react';
import Styled from './stayled'
import HomeIcon from "./components/HomeIcon";
import ShoppingIcon from "./components/ShoppingIcon";
import CustomerIcon from "./components/CustomerIcon";


const Navbar = () => {
    return (
        <Styled.NavbarWrapper>
            <Styled.BorderLine>
            <Styled.LinkWrapper to=''>
                    <HomeIcon/>
            </Styled.LinkWrapper>
            </Styled.BorderLine>
            <Styled.BorderLine>
                <Styled.LinkWrapper to='/xxx'>
                    <ShoppingIcon/>
                </Styled.LinkWrapper>
            </Styled.BorderLine>
            <Styled.BorderLine>
                <Styled.LinkWrapper to=''>
                    <CustomerIcon/>
                </Styled.LinkWrapper>
            </Styled.BorderLine>
        </Styled.NavbarWrapper>
    );
};

export default Navbar;