import {
  makeStyles,
  Avatar,
  Menu,
  MenuItem,
  Typography,
  IconButton
} from "@material-ui/core"
import React, { useState } from "react"
import { deleteCookie } from "../utils/cookies";

const useStyles = makeStyles((theme) => ({
  menuItem: {
    width: 150,
    whiteSpace: "pre-wrap"
  }
}));

const UserMenu = ({ user }) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
      setAnchorEl(event.currentTarget)
  }

  const handleClose = (e) => {
      setAnchorEl(null)
  }

  const handleLogout = () => {
    deleteCookie("refreshToken")
    window.location.reload()
  }

  return (
    <>
      {user.avatar && (
        <IconButton>
          <Avatar
            src={`data:image/jpeg;base64,${user.avatar}`}
            onClick={handleClick}
          />
        </IconButton>
      )}
      {!user.avatar && (
        <IconButton>
          <Avatar src="/broken-image.jpg" />
        </IconButton>
      )}
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          className={classes.menuItem}
          disabled
        >
          <Typography>
            Logged in as @{ user.username }
          </Typography>
        </MenuItem>
        <MenuItem
          className={classes.menuItem}
          onClick={handleLogout}
        >
          Logout
        </MenuItem>
      </Menu>
    </>
  )
}

export default UserMenu
