import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Container } from 'react-bootstrap';
import '../scss/layout.scss';

const Layout = ({children}) => {
    return (
        <div className='main-wrapper'>
            <Header />
            <Container className='page-wrapper'>
                {children}
            </Container>
            <Footer />
        </div>
    )
}

export default Layout;