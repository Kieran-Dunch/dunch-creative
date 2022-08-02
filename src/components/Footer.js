import { Box } from '@mui/material'
import './Footer.css'

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexGrow: "1",
        backgroundColor: "slateblue",
        height: "150px",
        justifyContent: "space-evenly"
      }}
    >
      <div>
        <h2>Dunch Creative</h2>
      </div>
      <div>
        <h3>Find me here:</h3>
        <ul>
          <li>
            Email
          </li>
          <li>
            GitHub
          </li>
          <li>
            LinkedIn
          </li>
        </ul>
      </div>
    </Box>
  )
}
