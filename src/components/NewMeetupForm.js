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

const NewMeetupForm = (props) => {
  const classes = useStyles();
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const title = titleInputRef.current.value;
    const imageUrl = imageInputRef.current.value;
    const location = addressInputRef.current.value;
    const description = descriptionInputRef.current.value;

    props.onAddMeetup({
      title,
      imageUrl,
      location,
      description,
    });
  };

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
