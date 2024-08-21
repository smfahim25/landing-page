"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/store/auth/slice";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/config/firebase";
import { signOut } from "firebase/auth";

const settings = ["Logout"];

const Header = () => {
  const isUser = useSelector((state) => state.auth.user);
  const [user] = useAuthState(auth);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const pathname = usePathname();
  const dispatch = useDispatch();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      <AppBar
        position="static"
        className="shadow-none bg-transparent header-force"
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link href="/">
              <Image
                src="/Logo.png"
                alt="logo"
                width={40}
                height={40}
                className="border-2 rounded-full"
              />
            </Link>
            <Box
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            ></Box>
            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            ></Box>

            <Box sx={{ flexGrow: 0 }}>
              <div className="flex items-center gap-5">
                <Link href="/resource">
                  <BookOpen
                    size={31}
                    className={
                      pathname === "/resource" ? "text-[#6665DD]" : "text-black"
                    }
                  />
                </Link>
                {isUser && (
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar
                        alt={user?.displayName}
                        src={`${user?.photoURL}`}
                      />
                    </IconButton>
                  </Tooltip>
                )}
              </div>
              <Menu
                sx={{ mt: "30px" }}
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
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography
                      textAlign="center"
                      onClick={() => {
                        dispatch(logout());
                        signOut(auth);
                      }}
                    >
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;
