import { Button, Container, Paper, TextField, Typography } from "@mui/material";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

// styles
import "./ContactMe.css";

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
    <Container sx={{ height: "82.5vh" }}>
      <Typography variant="h2"> Let’s see what we can create together!</Typography>
      <Paper id="contact" color="text">
        <form ref={form} onSubmit={sendEmail}>
          <TextField
            className="hello"
            value={nameValue}
            onChange={onChange}
            color="text"
            label="Name"
            name="from_name"
            halfWidth
            required
            variant="filled"
            sx={{ my: 2, mx: 4 }}
          />
          <TextField
            value={emailValue}
            onChange={onChange}
            color="text"
            label="Email"
            name="from_email"
            halfWidth
            required
            variant="filled"
            sx={{ my: 2, mx: 4 }}
          />
          <TextField
            value={messageValue}
            onChange={onChange}
            color="text"
            id="outlined-basic"
            label="Send me an email!"
            name="message"
            fullWidth
            multiline
            required
            variant="filled"
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
