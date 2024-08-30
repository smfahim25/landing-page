"use client";
import { auth } from "@/config/firebase";
import { logout } from "@/store/auth/slice";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { signOut } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import * as React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";

const settings = ["Log out"];

const Header = () => {
  const isUser = useSelector((state) => state.auth.user);
  const [user] = useAuthState(auth);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const pathname = usePathname();
  const dispatch = useDispatch();
  const router = useRouter();

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
        className="shadow-none bg-transparent header-force md:px-10 pt-5"
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
                  <Image
                    src="/img/book.png"
                    alt="logo"
                    width={31}
                    height={26}
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
                sx={{ mt: "50px", borderRadius: "15px" }}
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
                    <Image
                      src={"/img/logout.svg"}
                      alt={"logout"}
                      width={30}
                      height={30}
                      className="mx-1"
                    />
                    <Typography
                      fontWeight="bold"
                      fontStyle={{ color: "#595D62" }}
                      textAlign="center"
                      onClick={() => {
                        dispatch(logout());
                        signOut(auth);
                        router.push("/");
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
