import React, { useEffect, useState } from 'react';
import Rating from '@material-ui/lab/Rating';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  CardActions,
  Link,
  makeStyles,
  Typography,
  IconButton,
  Avatar
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Close } from '@material-ui/icons';
import { createRating, getRatings } from '../../../services/rating';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    display: "flex",
  },
  dialogContent: {
    maxHeight: 300,
    display: "flex",
    flexDirection: "column",
    rowGap: 10,
  },
  dialogTitle: {
    fontWeight: 900,
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  rating: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    wordBreak: "break-all",
    textAlign: "center"
  },
}))

const CountryRating = ({ nameEN, capitalEN }) => {
  const classes = useStyles()
  const [isRatingsOpen, setIsRatingsOpen] = useState(false)
  const [rating, setRating] = useState({
    averageRateNumber: 0,
    rates: [],
  })
  const userState = useSelector((state) => state.user)

  useEffect(() => {
    getRatings(nameEN, capitalEN).then((data) => setRating(data))
  }, [nameEN, capitalEN])

  const canRate = () => (
    userState.username !== null && !rating.rates.find((rate) => rate.user.username === userState.username)
  )

  const handleRate = async (event, rateNumber) => {
    if (!canRate) return;
    await createRating({
      country: nameEN,
      capital: capitalEN,
      rateNumber
    }).then((data) => {
      const newRates = [ ...rating.rates, data ]
      setRating({
        rates: newRates,
        averageRateNumber: (
          newRates.reduce((sum, rate) => sum + rate.rateNumber, 0) /
          newRates.length
        )
      })
    })
  }

  const handleClose = () => setIsRatingsOpen(false)

  const handleOpen = () => setIsRatingsOpen(true)

  return (
    <>
      <CardActions className={classes.root}>
        <Rating
          value={rating.averageRateNumber}
          onChange={handleRate}
          disabled={!canRate()}
        />
        <Link href="" onClick={(event) => {
          handleOpen()
          event.preventDefault()
        }}>({rating.rates.length})</Link>
      </CardActions>

      <Dialog
        fullWidth
        maxWidth="xs"
        open={isRatingsOpen}
        onClose={handleClose}
      >
            <DialogTitle>
                <Typography className={classes.dialogTitle}>Рейтинги</Typography>
                {true ? (
                    <IconButton
                        aria-label="close"
                        className={classes.closeButton}
                        onClick={handleClose}
                    >
                        <Close />
                    </IconButton>
                ) : null}
            </DialogTitle>
            <DialogContent className={classes.dialogContent} dividers>
              {rating.rates.map((rate) => (
                <div className={classes.rating}>
                  {rate.user.avatar && (
                    <Avatar src={`data:image/jpeg;base64,${rate.user.avatar}`} />
                  )}
                  {!rate.user.avatar && (
                    <Avatar src="/broken-image.jpg" />
                  )}
                  <Typography>@{rate.user.username}</Typography>
                  <Rating value={rate.rateNumber} disabled />
                </div>
              ))}
            </DialogContent>
        </Dialog>
    </>
  )
}

export default CountryRating
