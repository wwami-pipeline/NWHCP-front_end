import React from "react";
import "../scss/footers.scss";
import {
  FormControl,
  Grid,
  Link,
  TextField,
  Box,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { Button } from "react-bootstrap";
import "../styles/footer/form.css";

const Footer = () => {
  return (
    <Box style={{ backgroundColor: "#004987", marginTop: 12 }}>
      <Grid
        container
        justifyContent="space-between"
        style={{
          width: "60%",
          margin: "auto",
          backgroundColor: "#004987",
          paddingBottom: 30,
        }}
      >
        <Grid container item paddingTop={4}>
          <Stack>
            <Typography
              style={{
                color: "white",
                fontSize: 14,
                marginBottom: 15,
                fontWeight: 800,
              }}
            >
              Northwest Health Career Path
            </Typography>
            <Typography
              // align="center"
              style={{
                // margin: "10px 0px 10px 80px",
                color: "white",
                fontWeight: 500,
                fontSize: 12,
                marginBottom: 10,
              }}
            >
              For more information on this project, please contact the WIHSE
              Center at WIHSE@uw.edu
            </Typography>
            {/* <Link href="https://www.ahecww.org/">
              <Button
                variant="contained"
                style={{
                  border: "1px solid white",
                  color: "white",
                  cursor: "pointer",
                  fontSize: 12,
                  fontWeight: "bold",
                  padding: "10px 16px",
                  textAlign: "center",
                  marginBottom: 30,
                }}
              >
                Visit AHECWW.org
              </Button>
            </Link> */}
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Typography
            // align="center"
            style={{
              // margin: "10px 0px 10px 80px",
              color: "white",
              fontWeight: 500,
              fontSize: 12,
              marginBottom: 5,
            }}
          >
            This project is/was supported by the Health Resources and Services
            Administration (HRSA) of the U.S. Department of Health and Human
            Services (HHS) under grant number U77HP03022, for the WA Area Health
            Education (WA AHEC) Program Office and its fiv regional Centers in
            the total amount of $821,544 for the 2024-2025 fiscal year (with a
            1:1 total match of $821,544 from non-federally funded governmental
            sources). This information or content and conclusions are those of
            the author and should not be construed as the official position or
            policy of, nor should any endorsements be inferred by HRSA, HHS or
            the U.S. Government.
          </Typography>
          <Typography
            align="center"
            className="small"
            style={{ marginTop: 15, fontSize: 12, color: "white" }}
          >
            NWHCP ©{new Date().getFullYear()}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
