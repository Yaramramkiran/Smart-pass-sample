import React from "react";
import Header from "../../components/Header";
import { IconButton } from "@mui/joy";
import DrawerMobileNavigation from "../../components/Drawer";

function Transaction() {
  const [opendrawer, setOpendrawer] = React.useState(false);

  return (
    <div>
      <Header />
      <div>
        <IconButton
          // variant="outlined"
          style={{ background: "blue" }}
          onClick={() => setOpendrawer(true)}
        ></IconButton>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Transaction</h1>
        <p>Welcome to the Transaction</p>
      </div>
      <DrawerMobileNavigation
        open={opendrawer}
        onClose={() => setOpendrawer(false)}
      />
    </div>
  );
}

export default Transaction;
