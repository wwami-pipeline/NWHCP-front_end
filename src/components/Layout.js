import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../css/layout.scss';

const Layout = ({children}) => {
    return (
        <div style={{margin: '0'}}>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout;