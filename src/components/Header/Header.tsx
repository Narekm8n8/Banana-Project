import React from 'react';
import Styled from './styled'

const Header = () => {
    return (
        <Styled.Header>
            <Styled.Logo>Courses</Styled.Logo>
            <Styled.HeaderLinkWrapper>
                <Styled.HeaderLink to='/popular'>Popular</Styled.HeaderLink>
                <Styled.HeaderLink to='/favorite'>Favorite</Styled.HeaderLink>
                <Styled.HeaderLink to='/new'>New</Styled.HeaderLink>
            </Styled.HeaderLinkWrapper>
        </Styled.Header>
    );
};

export default Header;