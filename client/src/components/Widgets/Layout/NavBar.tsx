import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import ChainwhizLogo from "../../../assets/images/chainwhiz_logo.svg";
import styled from "styled-components";
import { useEth } from "../../../contexts/EthContext";

interface NavBarProps {
  window?: () => Window;
}

const NavItemLink = styled.a`
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  font-size: 1.2vw;
  font-style: normal;
  font-weight: 300;
  line-height: 27px;
  letter-spacing: 0.03em;
  text-align: left;

  margin-right: 5%;

  &:hover {
    color: var(--yellow);
  }
`;

const NavItemButton = styled(Button)`
  background: var(--yellow) !important;
  text-transform: none !important;
  font-weight: 600 !important;
  padding: 0.8rem !important;

  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  line-height: 1.75;
  border-radius: 4px;
  letter-spacing: 0.02857em;
  font-size: 1.1rem !important;
  color: var(--custom-black) !important;

  margin-right: 5% !important;
`;

const NavBar: React.FC<NavBarProps> = ({ window }) => {
  const drawerWidth = 240;
  const navItems = ["Post a Bounty", "Solve a Bounty", "Vote on Solutions"];

  const data = useEth();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const truncateAccount = (accountName: string) => {
    const prefix = accountName.slice(0, 4);
    const suffix = accountName.slice(-5, -1);

    return `${prefix}...${suffix}`;
  };

  return (
    <>
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "var(--custom-black)",
        }}
      >
        <Container maxWidth={false}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            <Box sx={{ flexGrow: 1 }}>
              <img src={ChainwhizLogo} alt="Logo" style={{ width: "12vw" }} />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "right",
                alignItems: "center",
                flexGrow: 1,
              }}
            >
              <NavItemLink href="#">Post a Bounty </NavItemLink>

              <NavItemLink href="#">Solve a Bounty</NavItemLink>

              <NavItemLink href="#">Vote on Solutions</NavItemLink>

              <NavItemButton variant="contained">
                {!data?.accounts?.length
                  ? "Connect Wallet"
                  : truncateAccount(data?.accounts[0])}
              </NavItemButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default NavBar;
