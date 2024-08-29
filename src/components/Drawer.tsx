import * as React from "react";
import Drawer from "@mui/joy/Drawer";
import Typography from "@mui/joy/Typography";
import { useNavigate } from "react-router-dom";
// import Menu from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import PaidIcon from "@mui/icons-material/Paid";

interface propstype {
  open: boolean;
  onClose: () => void;
}

const drawerItems = [
  {
    title: "Dashboard",
    link: "/dashboard",
    icon: DashboardIcon,
  },
  {
    title: "Users",
    link: "/users",
    icon: GroupIcon,
  },
  {
    title: "Transaction",
    link: "/transaction",
    icon: PaidIcon,
  },
];

export default function DrawerMobileNavigation({ open, onClose }: propstype) {
  const [currentTab, setCurrentTab] = React.useState("");
  const navigate = useNavigate();

  React.useEffect(() => {
    if (currentTab === "Dashboard") {
      navigate("/dashboard");
    } else if (currentTab === "Users") {
      navigate("/users");
    } else if (currentTab === "Transaction") {
      navigate("/transaction");
    }
  }, [currentTab]);

  const handleselecttab = (title: string) => {
    if (title === "Dashboard") {
      setCurrentTab("Dashboard");
    } else if (title === "Users") {
      setCurrentTab("Users");
    } else if (title === "Transaction") {
      setCurrentTab("Transaction");
    }
  };
  return (
    <React.Fragment>
      <Drawer
        open={open}
        onClose={onClose}
        sx={{
          "& .MuiDrawer-content": {
            backgroundColor: "white",
            width: "350px",
            padding: "20px",
            boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {drawerItems.map((item, index) => (
            <div
              style={{
                background: "lightgrey",
                padding: "5px",
                width: "90%",
                // textAlign: "center",
                borderRadius: "10px",
                display: "flex",
                flexDirection: "row",
                gap: "10px",
                cursor: "pointer",
              }}
              key={index}
              onClick={() => handleselecttab(item?.title)}
            >
              <item.icon />
              <Typography>{item.title}</Typography>
            </div>
          ))}
        </div>
      </Drawer>
    </React.Fragment>
  );
}
