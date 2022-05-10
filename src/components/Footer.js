import React from 'react';
import '../scss/footers.scss';
// import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Container, Grid, Link } from '@mui/material';

// test

const Footer = () => {
  return (
    <div className='footer main-footer py-3 mt-4'>
      <Container>
        <br></br>
        <Grid container>
          <h2 style={{ color: "white" }}>Contact</h2>
        </Grid>
        <br></br>
        <Grid container justifyContent={"space-between"}>
          <Grid item xs={5}>
            <Grid container>
              <Grid item xs={3}>
                <FontAwesomeIcon icon={faUserCircle} style={{ height: 56, width: 56 }} />
              </Grid>
              <Grid item xs={9} >
                <h4 className='footer'>Cori Anne Garcia-Hansen, Director</h4>
                <Link href="https://www.ahecww.org/">
                  <h4 className='sub-text-footer' style={{ textDecoration: "none", color: "white", fontWeight: 500 }}>Ahecww.org</h4>
                </Link>
                <br></br>
                <h4 className='sub-text-footer' style={{ color: "white", fontWeight: 500 }}>ahecww@whatcom.edu</h4>
                <h4 className='sub-text-footer' style={{ color: "white", fontWeight: 500 }}>(360)-383-3170</h4>
                <h4 className='sub-text-footer' style={{ color: "white", fontWeight: 500 }}>237 West Kellogg Road, Bellingham, WA</h4>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid container>
              <Grid item xs={3}>
                <FontAwesomeIcon icon={faEnvelope} style={{ height: 56, width: 56 }} />
              </Grid>
              <Grid item xs={9} >
                <h4 className='footer'>Mailing address</h4>
                <br></br>
                <h4 className='sub-text-footer' style={{ color: "white", fontWeight: 500 }}>237 West Kellogg Road</h4>
                <h4 className='sub-text-footer' style={{ color: "white", fontWeight: 500 }}>Bellingham, 98226</h4>
                <h4 className='sub-text-footer' style={{ color: "white", fontWeight: 500 }}>WA</h4>
              </Grid>
            </Grid>
          </Grid>
          <Grid container direction={"column"}>
            <br></br>
            <br></br>
            <p className="small mt-2">NWHCP ©2021</p>
            <p className="small mt-2">Please use computer browser for best experience</p>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Footer;