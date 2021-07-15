import NewMeetupForm from "../components/NewMeetupForm";
import {
  Typography
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }
}));

const NewMeetup = () => {
  const classes = useStyles();

  return (
    <section>
      <Typography className={classes.title} variant="h2">Add New Meetup</Typography>
      <NewMeetupForm />
    </section>
  )
};

export default NewMeetup;
