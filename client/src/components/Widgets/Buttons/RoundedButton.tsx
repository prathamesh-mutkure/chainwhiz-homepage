import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components";

interface RoundedButtonProps {
  label: string;
  highlighted?: boolean;
  href?: string;
}

const StyledButton = styled(Button)<Partial<RoundedButtonProps>>`
  background-color: ${(props: any) =>
    props.highlighted ? "var(--yellow)" : "var(--custom-black)"} !important;
  color: ${(props: any) =>
    props.highlighted ? "var(--custom-black)" : "white"} !important;
  border: 0.2rem solid var(--yellow) !important;
  border-radius: 2.5rem !important;
  font-family: Poppins !important;
  font-style: normal !important;
  font-weight: 600 !important;
  text-transform: none !important;
  font-size: 1.6rem !important;
  padding: 0.8rem 6rem !important;

  &:hover {
    background-color: ${(props: any) =>
      !props.highlighted ? "var(--yellow)" : "var(--custom-black)"} !important;
    color: ${(props: any) =>
      !props.highlighted ? "var(--custom-black)" : "white"} !important;
  }
`;

const RoundedButton: React.FC<RoundedButtonProps> = ({
  label,
  highlighted = false,
  href = "#",
}) => {
  return (
    <a href={href} style={{ textDecoration: "none" }}>
      <StyledButton highlighted={highlighted}>{label}</StyledButton>
    </a>
  );
};

export default RoundedButton;
