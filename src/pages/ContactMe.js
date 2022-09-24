import { Button, Container, TextField, Typography } from "@mui/material";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from "react";

export default function ContactMe() {
  const form = useRef();
  const [nameValue, setNameValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [messageValue, setMessageValue] = useState('')

  const wipeForm = () => {
    setNameValue('')
    setEmailValue('')
    setMessageValue('')
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d5kf258', 'template_mtbhwpf', form.current, 'a1zim3VRUpmbUG3r0')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    wipeForm()

    window.alert('Your message has been sent.')
  };

  const onChange = (e) => {
    switch (e.target.name) {
      case 'from_email':
        setEmailValue(e.target.value)
        break
      case 'from_name':
        setNameValue(e.target.value)
        break
      case 'message':
        setMessageValue(e.target.value)
        break
      default:
        console.log('error')
    }
  }

  return (
    <Container>
      <Typography>
        Let’s see what we can create together!
      </Typography>
      <form ref={form} onSubmit={sendEmail}>
        <TextField
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
          label="Email"
          name="from_email"
          halfWidth
          sx={{ my: 2, mx: 4 }}
        />
        <TextField
          value={messageValue}
          onChange={onChange}
          id="outlined-basic"
          label="Send me an email!"
          variant="outlined"
          name="message"
          fullWidth
          multiline
          rows={5}
          sx={{ my: 2 }}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Container>
  );
};
