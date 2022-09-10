import React from 'react';
import Styled from './stayled'
import HomeIcon from "./components/HomeIcon";
import ShoppingIcon from "./components/ShoppingIcon";
import CustomerIcon from "./components/CustomerIcon";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <Styled.NavbarWrapper>
            <Styled.LinkWrapper to=''>
                <HomeIcon />
            </Styled.LinkWrapper>
            <Styled.LinkWrapper to=''>
                <ShoppingIcon/>
            </Styled.LinkWrapper>
            <Styled.LinkWrapper to=''>
                <CustomerIcon/>
            </Styled.LinkWrapper>

        </Styled.NavbarWrapper>


    );
};

export default Navbar;