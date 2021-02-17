import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// styles
import './App.css';

// pages
import ContactPage from "./pages/Contactpage";
import HomePage from "./pages/Homepage";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#17A4A4"
        },
        secondary: {
            main: "#fff"
        },
        gold: {
            main: "#D5BB78"
        }
    }
})

function App() {
  return (
      <Router>
          <ThemeProvider theme={theme}>
              <Switch>
                  <Route exact path="/">
                      <HomePage />
                  </Route>
                  <Route path="/contact">
                      <ContactPage />
                  </Route>
              </Switch>
          </ThemeProvider>
      </Router>
  );
}

export default App;
