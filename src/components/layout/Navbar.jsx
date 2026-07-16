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
        backgroundColor:"#ffffff",
        color:"#333"
      }}
    >

      <Toolbar>


        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            flexGrow:1,
            textDecoration:"none",
            color: theme.palette.primary.main,
            fontWeight:700
          }}
        >

          Amaro Rocche dei Roeri

        </Typography>


        <Box
            sx={{
                display: {
                    xs: "none",
                    md: "flex"
                },
                alignItems: "center",
                gap: 1
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
                        }
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
            }
          }}

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
            width:250
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
                    onClick={()=>setMobileOpen(false)}
                  >

                    <ListItemText
                      primary={item.label}
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