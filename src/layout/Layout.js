import React from 'react';
import Container from './Container';


const Layout = ({ children }) => {
    return (
        <Container>
            <div>{children}</div>
        </Container>
    );
};

export default Layout;

