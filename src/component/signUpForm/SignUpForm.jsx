import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styles from "./signUpForm.module.scss";
import { Button } from "@mui/material";

const SignUpForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Box
          component="form"
          sx={{
            "& > :not(style)": {
              marginBottom: "50px",
              // backgroundColor: "white",
            },
          }}
          className={styles.box}
          noValidate
          autoComplete="off"
        >
          <TextField id="standard-basic" label="Name" variant="standard" />
          <TextField id="standard-basic" label="email ID" variant="standard" />
          <TextField
            id="standard-basic"
            label="Phone Number"
            variant="standard"
          />

          <TextField
            id="standard-multiline-static"
            label="Message"
            multiline
            rows={4}
            variant="standard"
          />
        </Box>{" "}
        <div className={styles.buttonContainer}>
          <Button variant="contained" classes={{ root: styles.button }}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
