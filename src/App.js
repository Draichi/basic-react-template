import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
import { Toolbar, Container } from "@material-ui/core";

import MainNavigation from "./layout/MainNavigation";
function App() {
  return (
    <Container>
      <MainNavigation />
      <Toolbar />
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
