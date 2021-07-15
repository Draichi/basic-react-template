import MainNavigation from "./MainNavigation";
import { Toolbar, Container } from "@material-ui/core";


const Layout = props => {
  return (
    <Container>
      <MainNavigation />
      <Toolbar />
      <main>
        {props.children}
      </main>
    </Container>
  )
}

export default Layout;