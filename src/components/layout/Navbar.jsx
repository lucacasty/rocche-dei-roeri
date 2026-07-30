import { useState } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import { useTheme } from "@mui/material/styles";

import MenuIcon from "@mui/icons-material/Menu";

import { Link, useLocation } from "react-router-dom";


export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const theme = useTheme();

  const menuItems = [
    {
      label: "Home",
      path: "/"
    },
    {
      label: "Chi siamo",
      path: "/about"
    },
    {
      label: "Prodotti",
      path: "/products"
    },
    {
      label: "Ordina",
      path: "/ordina"
    }
  ];

  return (

    <AppBar
      position="sticky"
      elevation={1}
      sx={{
        backgroundColor: theme.palette.background.contrast
      }}
    >

      <Toolbar>

        <Box
          sx={{
            flexGrow: 1,
          }}
        >
          <Link
            to="/"
            style={{
              display: "flex",
              justifyContent: "center",
              width: "fit-content",
              margin: "0 auto",
            }}
          >
            <Box
              component="img"
              src="/images/logo.jpg"
              alt="Amaro rocche dei roeri"
              sx={{
                height: {
                  xs: "60px",
                  md: "80px"
                },
                display: "block"
              }}
            />
          </Link>
        </Box>
        <Box
            sx={{
                display: {
                    xs: "none",
                    md: "flex"
                },
                alignItems: "center",
                gap: 1,
                position: "absolute",
                right: "24px"
            }}
        >
            {menuItems.map((item) => (
                <Button
                    key={item.path}
                    component={Link}
                    to={item.path}
                    sx={{
                        color: location.pathname === item.path ? theme.palette.primary.main : "#555",
                        fontWeight: location.pathname === item.path ? 700 : 500,
                        borderBottom:
                            location.pathname === item.path
                                ? "3px solid " + theme.palette.primary.main
                                : "3px solid transparent",
                        borderRadius: 0,
                        px: 2,
                        "&:hover": {
                            backgroundColor: "transparent",
                            borderBottom: "3px solid " + theme.palette.primary.main
                        },
                        opacity: 1
                    }}
                >
                    {item.label}
                </Button>
            ))}
        </Box>




        <IconButton

          sx={{
            display:{
              xs:"flex",
              md:"none"
            } ,
            position: "absolute",
            right: "10px",
          }}

          color="primary"

          onClick={()=>setMobileOpen(true)}

        >

          <MenuIcon />

        </IconButton>



      </Toolbar>



      <Drawer

        anchor="right"

        open={mobileOpen}

        onClose={()=>setMobileOpen(false)}

      >

        <Box
          sx={{
            width:250,
          }}
        >

          <List>


            {
              menuItems.map((item)=>(

                <ListItem
                  key={item.label}
                  disablePadding
                >

                  <ListItemButton
                    component={Link}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    sx={{
                      backgroundColor: location.pathname === item.path ? theme.palette.primary.main : "transparent",
                      color: location.pathname === item.path ? theme.palette.primary.contrastText : "inherit",
                      fontWeight: location.pathname === item.path ? 700 : 400
                    }}
                  >

                    <ListItemText
                      primary={item.label}
                      sx={{
                        color: "inherit",
                        '& .MuiTypography-root': {
                          fontWeight: location.pathname === item.path ? 700 : 400,
                        },
                      }}
                    />

                  </ListItemButton>


                </ListItem>

              ))
            }

          </List>


        </Box>


      </Drawer>


    </AppBar>

  );

}