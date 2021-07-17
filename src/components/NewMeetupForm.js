import { Card, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useRef } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginBottom: theme.spacing(1),
  },
  card: {
    padding: theme.spacing(4),
  },
  button: {
    float: "right",
    marginTop: theme.spacing(2),
  },
}));

const NewMeetupForm = () => {
  const classes = useStyles();
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    console.log({
      enteredTitle,
      enteredImage,
      enteredAddress,
      enteredDescription,
    });
  }

  return (
    <Card className={classes.card}>
      <form noValidate onSubmit={submitHandler}>
        <div className={classes.root}>
          <TextField
            className={classes.textField}
            inputRef={titleInputRef}
            label="Meetup Title"
            id="title"
            required
            fullWidth
          />
          <TextField
            className={classes.textField}
            inputRef={imageInputRef}
            label="Meetup Image"
            type="url"
            id="image"
            required
            fullWidth
          />
          <TextField
            className={classes.textField}
            inputRef={addressInputRef}
            label="Address"
            id="address"
            required
            fullWidth
          />
          <TextField
            className={classes.textField}
            inputRef={descriptionInputRef}
            label="Description"
            rows="5"
            id="description"
            required
            multiline
            fullWidth
          />
        </div>
        <div>
          <Button type="submit" className={classes.button}>
            Add Meetup
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
