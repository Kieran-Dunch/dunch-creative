import { Button, Container, Paper, TextField, Typography } from "@mui/material";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function ContactMe() {
  const form = useRef();
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");

  const wipeForm = () => {
    setNameValue("");
    setEmailValue("");
    setMessageValue("");
  };

  const sendEmail = (e) => {
    e.preventDefault();
    // TODO: add error boundaries and validation so I don't get empty emails
    emailjs.sendForm("service_d5kf258", "template_mtbhwpf", form.current, "a1zim3VRUpmbUG3r0").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    wipeForm();

    window.alert("Your message has been sent.");
  };

  const onChange = (e) => {
    switch (e.target.name) {
      case "from_email":
        setEmailValue(e.target.value);
        break;
      case "from_name":
        setNameValue(e.target.value);
        break;
      case "message":
        setMessageValue(e.target.value);
        break;
      default:
        console.log("error");
    }
  };

  return (
    <Container>
      <Typography variant="h2"> Let’s see what we can create together!</Typography>
      <Paper>
        <form ref={form} onSubmit={sendEmail}>
          <TextField
            color="primary"
            value={nameValue}
            onChange={onChange}
            label="Name"
            name="from_name"
            halfWidth
            sx={{ my: 2, mx: 4 }}
          />
          <TextField
            value={emailValue}
            onChange={onChange}
            color="primary"
            label="Email"
            name="from_email"
            halfWidth
            sx={{ my: 2, mx: 4 }}
          />
          <TextField
            value={messageValue}
            onChange={onChange}
            color="primary"
            id="outlined-basic"
            label="Send me an email!"
            variant="outlined"
            name="message"
            fullWidth
            multiline
            rows={5}
            sx={{ my: 2 }}
          />
          <Button type="submit" color="primary" sx={{ backgroundColor: "primary" }}>
            Submit
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
