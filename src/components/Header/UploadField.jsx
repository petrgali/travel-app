import React from 'react';
import { makeStyles, Box, Avatar, IconButton, Typography } from '@material-ui/core';
import { Close, PublishRounded } from '@material-ui/icons';

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
  const { image, setImage } = props;
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
            if (file.size > 1000000 || !["image/jpeg", "image/png"].includes(file.type)) return
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
          (до 1 мб)
        </Typography>
      </div>
    </Box>
  )
}

export default UploadFiled

