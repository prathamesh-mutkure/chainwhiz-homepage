import { Avatar, Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import ChainwhizLogo from "../../../assets/images/chainwhiz_logo.svg";
import FooterSocialImg from "../../../assets/images/footer_img.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import RedditIcon from "@mui/icons-material/Reddit";

const FooterLogo = styled.img`
  width: 18vw;
  float: right;
  margin-right: 12%;
  margin-top: -15%;
`;

const FooterInfo = styled.p`
  font-size: 1vw;
  width: 75%;
  margin-bottom: 1rem;
  float: right;
`;

const FooterLinksGridContainer = styled(Grid)`
  font-style: normal;
  font-weight: 600;
  font-size: 1.2vw;
  line-height: 40px;
  text-align: center;
  letter-spacing: 0.01em;
`;

const FooterLink = styled.a`
  text-decoration: none;
  display: block;
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;

  p:hover {
    color: var(--yellow);
  }

  &.disabled {
    opacity: 0.4;
  }

  &.disabled:hover p {
    color: #fff;
    cursor: text;
  }

  &.highlighted p {
    color: var(--yellow);
  }
`;

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div style={{ backgroundColor: "var(--custom-black)", padding: "10% 0" }}>
      <Grid container>
        <Grid item xs={3}>
          <FooterLogo src={ChainwhizLogo} alt="logo" />
          <FooterInfo>
            Chainwhiz is an open-source bounty marketplace connecting Web3
            projects with builders and communities.
          </FooterInfo>

          <FooterInfo>
            Our mission is to build a transparent and community-centric bounty
            platform for scaling and forming communities.
          </FooterInfo>
        </Grid>

        <Grid item xs={3}>
          <FooterLinksGridContainer container>
            {[
              "Launch App",
              "White Paper",
              "Documentation",
              "Polygon Networks",
              "Product Guidelines",
              "Brand Kit",
            ].map((label: string, index: number) => {
              return (
                <Grid item xs={12}>
                  <FooterLink
                    href="/"
                    className={[1, 2, 5].includes(index) ? "disabled" : ""}
                  >
                    <p>{label}</p>
                  </FooterLink>
                </Grid>
              );
            })}
          </FooterLinksGridContainer>
        </Grid>

        <Grid item xs={3}>
          <FooterLinksGridContainer container>
            {[
              "Collective Intelligence",
              "Articles",
              "Newsletter",
              "Disclaimer",
              "FAQs",
              "hello@chainwhiz.app",
            ].map((label: string, index: number) => {
              return (
                <Grid item xs={12}>
                  <FooterLink
                    href="/"
                    className={index === 5 ? "highlighted" : ""}
                  >
                    <p>{label}</p>
                  </FooterLink>
                </Grid>
              );
            })}
          </FooterLinksGridContainer>
        </Grid>

        <Grid item xs={3} alignSelf="center" textAlign="center">
          <img src={FooterSocialImg} alt="social" />

          <Grid
            container
            justifyContent="space-between"
            xs={4}
            sx={{ margin: "-25% auto 0 auto" }}
          >
            <TelegramIcon />
            <TwitterIcon />
            <RedditIcon />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
