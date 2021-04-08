import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Projects from './components/projects/Projects'
import BaseStyle from "./Style"
import { ThemeProvider } from 'styled-components'
import ProjectState from './context/ProjectState'
  


const theme= {
  dark: "#282e41",
  darker: "#1c202b",
  gray: "#e1e1e1",
  bg: "#e1e1e1",
  wt: "white"
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BaseStyle/>
      <ProjectState>
        <Router>
          <Switch>
              <Route exact path='/' component={ SignIn }/>
              <Route exact path='/registro' component={ SignUp }/>
              <Route exact path='/proyectos' component={ Projects }/>
          </Switch>
        </Router>
      </ProjectState>
    </ThemeProvider>
  );
}

export default App;
