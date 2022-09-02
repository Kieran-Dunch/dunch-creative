import { Button, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";

export default function ContactMe() {
  return (
    <>
      <Container>
        <Typography>
          Let’s see what we can create together!
        </Typography>
        <form action="">
          <TextField
            label="Full Name"
            halfWidth
            sx={{my: 2, mx: 4}}
          />
          <TextField
            label="Email"
            halfWidth
            sx={{my: 2, mx: 4}}
          />
          <TextField
            label="Message"
            fullWidth
            sx={{my: 2}}
          />
          <TextField
            id="outlined-basic"
            label="Send me an email!"
            variant="outlined"
            fullWidth
            multiline
            rows={5}
            sx={{my: 2}}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Container>
    </>
  )
}
