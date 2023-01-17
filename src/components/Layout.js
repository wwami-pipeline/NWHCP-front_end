import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { ThemeProvider } from '@mui/material/styles';
import { Container } from "react-bootstrap";
import { Provider as ProgramProvider } from "../context/programContext";
import "../scss/layout.scss";
import { mainTheme } from "../theme/theme";
const Layout = ({ children, flood }) => {
  return (
    <ThemeProvider theme={mainTheme}>
      <ProgramProvider>
        <div className="main-wrapper">
          <Header />
          <Container className="page-wrapper">{children}</Container>
          <Footer />
        </div >
      </ProgramProvider>
    </ThemeProvider>
  );
};
export default Layout;
