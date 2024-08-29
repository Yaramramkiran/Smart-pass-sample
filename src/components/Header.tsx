import { Button, Stack, styled, Typography } from "@mui/joy";
import React from "react";

const StyledComponents = {
  HeaderTitle: styled("div")({
    display: "flex",
    justifyContent: "space-between",
    padding: "0 20px",
    alignItems: "center",
    height: "100px",
    backgroundColor: "#f0f0f0",
    color: "#333",
    fontSize: "24px",
    fontWeight: "bold",
  }),
};
function Header() {
  return (
    <StyledComponents.HeaderTitle>
      <Stack direction="column" alignItems={"center"} spacing={1}>
        <Typography>ARCHINTZ</Typography>
        <Typography>CONSULT BUILD SUCEED</Typography>
      </Stack>
      <Button variant="solid" style={{ background: "blue", width: "120px" }}>
        Logout
      </Button>
    </StyledComponents.HeaderTitle>
  );
}

export default Header;
