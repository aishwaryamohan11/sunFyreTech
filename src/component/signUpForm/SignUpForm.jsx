import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styles from "./signUpForm.module.scss";
import { Button } from "@mui/material";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(value)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const validatePhone = (value) => {
    const regex = /^[0-9]{10}$/;
    if (!regex.test(value)) {
      setPhoneError("Phone number must be exactly 10 digits");
    } else {
      setPhoneError("");
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhone(value);
    validatePhone(value);
  };

  const handleSubmit = () => {
    const message = `Hi`;
    const whatsappNumber = "+919361266030";
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  const isFormValid = email && phone && !emailError && !phoneError;

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Box
          component="form"
          sx={{ "& > :not(style)": { marginBottom: "50px" } }}
          className={styles.box}
          noValidate
          autoComplete="off"
        >
          <TextField label="Name" variant="standard" />
          <TextField
            label="Email ID"
            variant="standard"
            value={email}
            onChange={handleEmailChange}
            error={!!emailError}
            helperText={emailError}
          />
          <TextField
            label="Phone Number"
            variant="standard"
            value={phone}
            onChange={handlePhoneChange}
            error={!!phoneError}
            helperText={phoneError}
          />
          <TextField label="Message" multiline rows={4} variant="standard" />
        </Box>
        <div className={styles.buttonContainer}>
          <Button
            variant="contained"
            className={styles.button}
            onClick={handleSubmit}
            disabled={!isFormValid}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
