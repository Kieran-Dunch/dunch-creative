import { Button, Container, Paper, TextField, Typography } from "@mui/material";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Box } from "@mui/system";
import { useState } from "react";

// styles
import "./ContactMe.css";

export default function ContactMe() {
  const form = useRef();
  const [firstNameValue, setFirstNameValue] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");
  const [subjectLineValue, setSubjectLineValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const wipeForm = () => {
    setFirstNameValue("");
    setLastNameValue("");
    setSubjectLineValue("");
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
    setEmailSent(true);
    window.alert("Your message has been sent.");
  };

  const onChange = (e) => {
    switch (e.target.name) {
      case "from_email":
        setEmailValue(e.target.value);
        break;
      case "from_first_name":
        setFirstNameValue(e.target.value);
        break;
      case "from_last_name":
        setLastNameValue(e.target.value);
        break;
      case "subject_line":
        setSubjectLineValue(e.target.value);
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
      <Typography variant="h2" sx={{ my: 4 }}>
        Let’s see what we can create together!
      </Typography>
      <Paper id="contact" color="text">
        <form ref={form} onSubmit={sendEmail}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Send me an email below:
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <TextField
              value={firstNameValue}
              onChange={onChange}
              color="text"
              label="First Name"
              name="from_first_name"
              required
              variant="filled"
              sx={{ my: 2 }}
            />
            <TextField
              value={lastNameValue}
              onChange={onChange}
              color="text"
              label="Last Name"
              name="from_last_name"
              required
              variant="filled"
              sx={{ my: 2 }}
            />
          </Box>
          <TextField
            value={emailValue}
            onChange={onChange}
            color="text"
            label="Email"
            name="from_email"
            fullWidth
            required
            variant="filled"
            sx={{ my: 2 }}
          />
          <TextField
            value={subjectLineValue}
            onChange={onChange}
            color="text"
            label="Subject"
            name="subject_line"
            fullWidth
            required
            variant="filled"
            sx={{ my: 2 }}
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
          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={emailSent}
            color="primary"
            sx={{ backgroundColor: "#24344d" }}>
            Submit
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
