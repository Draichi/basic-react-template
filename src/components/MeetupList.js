import { Grid } from "@material-ui/core";
import MeetupItem from "./MeetupItem";

const MeetupList = (props) => {
  return (
    <Grid container direction="row" spacing={9}>
      {props.meetups.map((meetup) => (
        <Grid item xs={3}>
          <MeetupItem key={meetup.id} {...meetup} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MeetupList;
