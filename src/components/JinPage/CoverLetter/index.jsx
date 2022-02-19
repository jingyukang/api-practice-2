import React from "react";
import { Box, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const CoverLetter = () => {
  return (
    <Box sx={style}>
      <Typography
        id="modal-modal-title"
        variant="h6"
        component="h2"
        align="center"
      >
        COVER LETTER
      </Typography>

      <Typography sx={{ mt: 1 }}>Dear Sir or Madam,</Typography>
      <Typography sx={{ mt: 1 }}>
        Thank you for the opportunity to apply for developer.
      </Typography>
      <Typography sx={{ mt: 1 }}>
        My name is Jingyu Kang. I came back to New Zealand at 23 March 2021
        after completing my military service in South Korea. And now, I am
        looking for a job in Auckland. During my job search, I heard that the
        job opening. I am applying because I want to get the opportunity to have
        work, learn, use, and improve my skills.
      </Typography>
      <Typography sx={{ mt: 1 }}>
        I have a Bachelor of Computer and Information Sciences from Auckland
        University of Technology. After graduating AUT, I worked as an intern at
        Woopa Design Ltd for around 2 months to experience the way the company
        operates. Since then, the company recognized me, so I have been working
        for around a year with the company. I learnt how to work under a team
        leader and supporting my leader and other members.
      </Typography>
      <Typography sx={{ mt: 1 }}>
        For around the year, while working at the design company, I could not
        grow much as a developer because they just want me to fix the CSS. Also,
        there is a gap in my career because of my military service and Covid-19.
        So, until July of this year (2021), I had very little knowledge about
        web development. However, with a desire to grow as a developer and the
        ability to learn quickly, now I have the knowledge of development. I
        understand ES6(javascript), ReactJS, Webpack, Git and Github. And I know
        how to use them.
      </Typography>
      <Typography sx={{ mt: 1 }}>
        I always have can-do attitude. I do not have much experience yet, but I
        have passion to learn, and I do my best to master what I have learnt. I
        want to grow further with good colleagues.
      </Typography>
      <Typography sx={{ mt: 1 }}>
        Thank you for your time and consideration. I hope to have the
        opportunity to meet and chat with you about working for your company.
        Please do not hesitate to contact me if you need more information.
      </Typography>
      <Typography sx={{ mt: 1 }} align="right">
        Yours faithfully,
      </Typography>
      <Typography sx={{ mt: 1 }} align="right">
        Jingyu Kang.
      </Typography>
    </Box>
  );
};
export default CoverLetter;
