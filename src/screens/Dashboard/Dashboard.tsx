import React from "react";
import Header from "../../components/Header";
import { IconButton } from "@mui/joy";
import DrawerMobileNavigation from "../../components/Drawer";

function Dashboard() {
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
        <h1>Dashboard</h1>
        <p>Welcome to the dashboard</p>
      </div>
      {/* <Drawer open={opendrawer} onClose={() => setOpendrawer(false)} /> */}
      <DrawerMobileNavigation
        open={opendrawer}
        onClose={() => setOpendrawer(false)}
      />
    </div>
  );
}

export default Dashboard;
