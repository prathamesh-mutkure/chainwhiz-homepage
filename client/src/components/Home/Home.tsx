import { Container, Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { useEth } from "../../contexts/EthContext";
import RoundedButton from "../Widgets/Buttons/RoundedButton";
import Footer from "../Widgets/Layout/Footer";
import NavBar from "../Widgets/Layout/NavBar";

interface HomeProps {}

const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 4vw;
  letter-spacing: 0.01em;
  color: #d4ff1e;
  padding: 10% 0 5%;
`;

const Description = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 1.7vw;
  line-height: 5.5vh;
  letter-spacing: 0.05em;
`;

const WarningText = styled.i`
  color: #fff;
  padding: 10px;
  display: inline-block;
  border-radius: 5px;
  font-size: 1.2rem;
  margin-bottom: 10%;

  a {
    text-decoration: none;
    color: rgb(212, 255, 30);
  }
`;

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <NavBar />
      <div
        style={{
          borderTop: "solid 4px var(--yellow)",
          borderBottom: "solid 8px var(--yellow)",
          marginTop: "8.39%",
          textAlign: "center",
        }}
      >
        <Container maxWidth="xl">
          <Title>Kickstart Your Journey in Web3</Title>

          <Description>
            Discover Bounties. Contribute to your favorite DAOs and Protocols.
            Earn in Crypto.
          </Description>

          <div style={{ margin: "8% 0 5%" }}>
            <Grid
              container
              justifyContent="space-between"
              rowSpacing={{ xs: 3, sm: 6, md: 8, lg: 0 }}
            >
              <Grid item xs={12} lg={4}>
                <RoundedButton label="Post a Bounty" />
              </Grid>
              <Grid item xs={12} lg={4}>
                <RoundedButton label="Start Solving Bounties" highlighted />
              </Grid>
              <Grid item xs={12} lg={4}>
                <RoundedButton label="Vote on Solutions" />
              </Grid>
            </Grid>
          </div>

          <WarningText>
            The mainnet is still a new product milestone. Report bugs and any
            improvements in our
            <span>
              <a href="/"> Discord</a>
            </span>
          </WarningText>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Home;
