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

  a {
    text-decoration: none;
    color: rgb(212, 255, 30);
  }
`;

const Home: React.FC<HomeProps> = () => {
  const state = useEth();

  console.log(state);

  return (
    <div>
      <NavBar />
      <Container maxWidth="xl" sx={{ marginTop: "10%", textAlign: "center" }}>
        <Title>Kickstart Your Journey in Web3</Title>

        <h3>
          Discover Bounties. Contribute to your favorite DAOs and Protocols.
          Earn in Crypto.
        </h3>

        <Grid container justifyContent="space-evenly">
          <Grid item>
            <RoundedButton label="Post a Bounty" />
          </Grid>
          <Grid item>
            <RoundedButton label="Start Solving Bounties" highlighted />
          </Grid>
          <Grid item>
            <RoundedButton label="Vote on Solutions" />
          </Grid>
        </Grid>

        <WarningText>
          The mainnet is still a new product milestone. Report bugs and any
          improvements in our
          <span>
            <a href="/"> Discord</a>
          </span>
        </WarningText>
      </Container>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
