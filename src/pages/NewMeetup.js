import NewMeetupForm from "../components/NewMeetupForm";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

const NewMeetup = () => {
  const classes = useStyles();
  const history = useHistory();

  const addMeetupHandler = (meetupData) => {
    fetch("https://meetupsproject.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/");
    });
  };

  return (
    <section>
      <Typography className={classes.title} variant="h2">
        Add New Meetup
      </Typography>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetup;
