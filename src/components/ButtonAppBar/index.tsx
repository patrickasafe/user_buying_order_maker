import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";
// import Image from "next/image";

// import logo from "../../public/logo-frexco-slogan-HDP-300x77-1.png";
import { useRouter } from "next/router";
import { Page } from "./utils/interfaces";
import { useSession } from "next-auth/react";
import { Button } from "@mui/material";

const ButtonAppBar = ({ menuPages, settings }: { menuPages: Page[], settings: Page[] }) => {
  const router = useRouter();
  const { data: session } = useSession();

  // const [actualPage, setActualPage] = React.useState("Home");
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>

          {/* <Image src={logo} alt="logo" width="148 px" height="48 px" /> */}

          <Box sx={{ flexGrow: 1, display: "flex" }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: "block",
              }}
            >
              {menuPages.map((menuPage: Page) => (
                <MenuItem
                  key={menuPage.page}
                  onClick={() => {
                    router.push(menuPage.link)
                    handleCloseNavMenu();
                  }}
                >
                  <Typography textAlign="center">{menuPage.page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: "flex", md: "flex" }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>
          {/* <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {menuPages.map((menuPage: Page) => (
              <Button
                key={menuPage.page}
                onClick={() => {
                  router.push(menuPage.link);
                }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {menuPage.page}
              </Button>
            ))}
          </Box> */}

          {/* Something to add here later */}
          {/* if there's no session, so no icon */}
         { session ? <Box >
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {/* //TODO: FIX THIS TYPESCRIPT ERROR */}
                <Avatar alt={session ? session.user.name : "Remy Sharp"} src={session ? session.user.image : "/images/no-user-image-icon.png"} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.page}
                  onClick={() => {
                    router.push(setting.link)
                    handleCloseUserMenu();
                  }}>
                  <Typography textAlign="center">{setting.page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> : null}
          {session ? null : 
          <div>
            <Button
              color="secondary"
              variant='text'
            >
              Cadastrar
            </Button>

            <Button
              color="secondary"
              variant='text'
              onClick={
                () => router.push('/login')
              }
            >
              Entre
            </Button>
          </div>
          }

        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ButtonAppBar;
