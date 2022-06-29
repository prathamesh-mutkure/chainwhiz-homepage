import { Grid } from "@mui/material";
import React from "react";

// TODO
// 1. Replace redux

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div>
      <Grid container>
        <Grid item>
          <p>
            Chainwhiz is an open-source bounty marketplace connecting Web3
            projects with builders and communities.
          </p>

          <p>
            Our mission is to build a transparent and community-centric bounty
            platform for scaling and forming communities.
          </p>
        </Grid>
        <Grid item></Grid>
        <Grid item></Grid>
        <Grid item></Grid>
      </Grid>
    </div>
  );
};

export default Footer;
