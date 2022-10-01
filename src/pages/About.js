import { Card } from "@mui/material";

export default function About() {
  return (
    <>
      <h1>
        This page will features several text boxes with three core paragraphs with photograph
        banners and side images
      </h1>
      <Card>
        <p>Kieran dunch is a developer blah blah blah</p>
        <img src="../../public/_MG_3186.JPG" alt="Kieran at a computer" />
      </Card>
      <Card>
        <p>Kieran dunch is an artist blah blah blah</p>
        <img src="../../public/_MG_3186.JPG" alt="Woyzeck stuff" />
      </Card>
      <Card>
        <p>Kieran dunch Likes to hike!</p>
        <img src="../../public/_MG_3186.JPG" alt="Woyzeck stuff" />
      </Card>
    </>
  );
}
