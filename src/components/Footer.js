import React from "react";
import "../scss/footers.scss";
import {
  FormControl,
  Grid,
  Link,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { Button } from "react-bootstrap";
import "../styles/footer/form.css";

const Footer = () => {
  return (
    <>
      <Grid
        container
        justifyContent="space-around"
        spacing={1}
        style={{
          backgroundColor: "#004987",
          padding: "24px 120px 24px 120px",
          marginTop: 12,
        }}
      >
        <Grid container item xs={12} md={5}>
          <Grid item xs={12}>
            <Typography
              style={{
                color: "white",
                fontSize: 24,
                marginBottom: 24,
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
                fontSize: 18,
                marginBottom: 12,
              }}
            >
              Visit the Area Health Education Center of Western Washington
            </Typography>
            <Link href="https://www.ahecww.org/">
              <Button
                variant="contained"
                style={{
                  border: "1px solid white",
                  color: "white",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: "bold",
                  padding: "10px 16px",
                  textAlign: "center",
                  marginTop: 24,
                }}
              >
                Visit AHECWW.org
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Typography
              style={{
                color: "white",
                fontSize: 24,
                marginBottom: 24,
                fontWeight: 800,
              }}
            >
              Address
            </Typography>
            <Typography
              style={{
                color: "white",
                fontWeight: 500,
                fontSize: 18,
                marginBottom: 12,
              }}
            >
              237 West Kellog Road, Bellingham, WA
            </Typography>
            <Typography
              style={{
                color: "white",
                fontWeight: 500,
                fontSize: 18,
                marginBottom: 12,
              }}
            >
              ahecww@whatcom.edu
            </Typography>
            <Typography
              style={{
                color: "white",
                fontWeight: 500,
                fontSize: 18,
                marginBottom: 12,
              }}
            >
              (360)-383-3170
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography
            style={{
              color: "white",
              fontSize: 24,
              marginBottom: 24,
              fontWeight: 800,
            }}
          >
            Keep in Touch
          </Typography>
          <FormControl className="">
            <ContactTextField
              label={"First Name"}
              type={"text"}
              placeholder={"Eg: Elon"}
              name={"firstName"}
            />
            <ContactTextField
              label={"Last Name"}
              type={"text"}
              placeholder={"Eg: Musk"}
              name={"lastName"}
            />
            <ContactTextField
              label={"Email"}
              type={"text"}
              placeholder={"Eg: company123@gmail.com"}
              name={"email"}
            />
            <ContactTextFieldMutipleLine
              name="question"
              label={"Please tell us a few words about how we can help you"}
              placeholder={
                "Are you a student or program administrator? What are the problem that you are " +
                "having with our website. Please let us know, we will contact you as soon as possible"
              }
            />
            <Typography
              value="submit"
              style={{
                color: "white",
                marginTop: 12,
                fontSize: 14,
                marginBottom: 12,
              }}
            >
              By Clicking 'Submit', You Certify That You Are At Least 13 Years
              of Age.
            </Typography>
            <Button
              variant={"contained"}
              style={{
                border: "1px solid white",
                color: "white",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "bold",
                height: "40px",
                padding: "10px 16px",
                textAlign: "center",
              }}
            >
              Submit
            </Button>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Typography
            align="center"
            className="small mt-2"
            style={{ fontSize: "16px", color: "white" }}
          >
            NWHCP ©{new Date().getFullYear()}
          </Typography>
          <Typography
            align="center"
            className="small mt-2"
            style={{ color: "white" }}
          >
            Please use computer browser for best experience -{" "}
            <a
              style={{ color: "white", textDecoration: "underline" }}
              href="https://github.com/kipiiler"
            >
              @kipiiler
            </a>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

const CustomTextField = styled(TextField)({
  marginTop: 12,
  color: "white",
  "& label.Mui-focused": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
  },
  "& .MuiOutlinedInput-root": {
    "& textarea": {
      color: "white",
    },
    "& fieldset": {
      color: "white",
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "& input": {
      color: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
});

const ContactTextFieldMutipleLine = ({
  label,
  name,
  placeholder,
  numRow = 5,
}) => {
  return (
    <CustomTextField
      variant="outlined"
      InputProps={{
        style: {
          color: "white",
        },
      }}
      InputLabelProps={{
        style: {
          color: "white",
        },
      }}
      label={label}
      name={name}
      rows={numRow}
      multiline
      cols="30"
      maxLength="300"
      placeholder={placeholder}
      // style={{ color: "grey" }}
    ></CustomTextField>
  );
};

const ContactTextField = ({ label, type, name, placeholder }) => {
  return (
    <CustomTextField
      variant="outlined"
      InputProps={{
        style: {
          color: "white",
        },
      }}
      InputLabelProps={{
        style: {
          color: "white",
        },
      }}
      label={label}
      type={type}
      name={name}
      placeholder={placeholder}
      required
    />
  );
};

export default Footer;
