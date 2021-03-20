import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Meetups</Typography>
        <Typography>
          <Link to="/">All meetups</Link>
        </Typography>
        <Typography>
          <Link to="/favorites">Favorites</Link>
        </Typography>
        <Typography>
          <Link to="/new-meetup">New meetup</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default MainNavigation;
