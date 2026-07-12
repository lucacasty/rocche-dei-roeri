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

import MenuIcon from "@mui/icons-material/Menu";

import { Link } from "react-router-dom";


export default function Navbar() {

  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);


  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const closeMenu = () => {
    setAnchorEl(null);
  };


  const menuItems = [
    {
      label: "Home",
      path: "/"
    },
    {
      label: "Chi siamo",
      path: "/#chi-siamo"
    },
    {
      label: "Contatti",
      path: "/#contatti"
    },
    {
      label: "Privacy",
      path: "/privacy"
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
            color:"#355834",
            fontWeight:700
          }}
        >

          Amaro Rocche dei Roeri

        </Typography>



        <Box
          sx={{
            display:{
              xs:"none",
              md:"flex"
            },
            alignItems:"center"
          }}
        >


          <Button
            component={Link}
            to="/"
            color="inherit"
          >
            Home
          </Button>


          <Button
            color="inherit"
            onClick={openMenu}
          >
            Prodotti
          </Button>


          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={closeMenu}
          >

            <MenuItem
              component={Link}
              to="/amaro"
              onClick={closeMenu}
            >
              Amaro Rocche dei Roeri
            </MenuItem>


            <MenuItem
              component={Link}
              to="/amarissimo"
              onClick={closeMenu}
            >
              Amarissimo Rocche dei Roeri
            </MenuItem>


          </Menu>



          <Button
            component={Link}
            to="/ordina"
            color="inherit"
          >
            Ordina
          </Button>



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



            <ListItem disablePadding>

              <ListItemButton
                component={Link}
                to="/amaro"
                onClick={()=>setMobileOpen(false)}
              >

                <ListItemText
                  primary="Amaro Rocche dei Roeri"
                />

              </ListItemButton>


            </ListItem>



            <ListItem disablePadding>

              <ListItemButton
                component={Link}
                to="/amarissimo"
                onClick={()=>setMobileOpen(false)}
              >

                <ListItemText
                  primary="Amarissimo Rocche dei Roeri"
                />

              </ListItemButton>


            </ListItem>



          </List>


        </Box>


      </Drawer>


    </AppBar>

  );

}