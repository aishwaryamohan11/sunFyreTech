import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styles from "./signUpForm.module.scss";
import { Button } from "@mui/material";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(
      regex.test(value) ? "" : "Please enter a valid email address"
    );
  };

  const validatePhone = (value) => {
    const regex = /^[0-9]{10}$/;
    setPhoneError(
      regex.test(value) ? "" : "Phone number must be exactly 10 digits"
    );
  };

  const handleSubmit = () => {
    const whatsappNumber = "+919361266030";
    const fullMessage = `Hi, I'm ${name}.\n\nHere are my details:\n📧 Email: ${email}\n📱 Phone: ${phone}\n📝 Message: ${message}`;
    const encodedMessage = encodeURIComponent(fullMessage);
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  const isFormValid = name && email && phone && !emailError && !phoneError;

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
          <TextField
            sx={{ "& > :not(style)": { fontSize: "25px" } }}
            label="Name"
            variant="standard"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            sx={{ "& > :not(style)": { fontSize: "25px" } }}
            label="Email ID"
            variant="standard"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              validateEmail(e.target.value);
            }}
            error={!!emailError}
            helperText={emailError}
          />
          <TextField
            sx={{ "& > :not(style)": { fontSize: "25px" } }}
            label="Phone Number"
            variant="standard"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              validatePhone(e.target.value);
            }}
            error={!!phoneError}
            helperText={phoneError}
          />
          <TextField
            sx={{ "& > :not(style)": { fontSize: "25px" } }}
            label="Message"
            multiline
            rows={4}
            variant="standard"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
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
