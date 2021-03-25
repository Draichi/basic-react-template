import { Grid } from "@material-ui/core";
import MeetupItem from "./MeetupItem";

const MeetupList = (props) => {
  return (
    <Grid container direction="column" spacing={9}>
      {props.meetups.map((meetup) => (
        <Grid item xs={12}>
          <MeetupItem key={meetup.id} {...meetup} />
        </Grid>
      ))}
    </Grid>
  );
};

export default MeetupList;
