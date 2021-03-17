import React, { useState } from 'react';
import { makeStyles, Box, Avatar, IconButton, Typography, Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { Close, PublishRounded } from '@material-ui/icons';
import { withNamespaces } from "react-i18next"

const useStyles = makeStyles((theme) => ({
  avatar: {
    height: 48,
    width: '100%',
    display: "flex",
  },
  content: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  }
}));

const UploadFiled = (props) => {
  const { image, setImage, t } = props;
  const [error, setError] = useState(null);
  const classes = useStyles();
  
  const setBase64Image = async (file) => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (reader.result.includes('png')) {
        setImage(reader.result.replace("data:image/png;base64,", ""))
      } else {
        setImage(reader.result.replace("data:image/jpeg;base64,", ""))
      }
    };
  }

  const handleErrorClose = () => setError(null)
  
  return (
    <Box className={classes.avatar}>
      <div className={classes.content}>
        {image && (
          <>
            <Avatar src={`data:image/jpeg;base64,${image}`} />
            <IconButton aria-label="close" onClick={() => setImage(null)}>
              <Close />
            </IconButton>
          </>
        )}
        {!image && (
          <Avatar src="/broken-image.jpg" />
        )}
        <input
          accept="image/*"
          id="icon-button-file"
          type="file"
          onChange={async (event) => {
            const file = event.target.files[0]
            if (!file) return;
            if (!["image/jpeg", "image/png"].includes(file.type)) {
              setError(t("ImageAllowed"))
              return
            }
            if (file.size > 1000000) {
              setError(t("ImageTooLarge"))
              return
            }
            await setBase64Image(file)
          }}
          hidden
        />
        <label htmlFor="icon-button-file">
          <IconButton color="primary" aria-label="upload picture" component="span">
            <PublishRounded />
          </IconButton>
        </label>
        <Typography>
          {t("ImageLimit")}
        </Typography>
      </div>
      <Snackbar open={error} autoHideDuration={6000} onClose={handleErrorClose}>
        <Alert onClose={handleErrorClose} severity="error">
          {error}
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default withNamespaces()(UploadFiled)

