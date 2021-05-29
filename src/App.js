import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Navbar from './components/Layout/Navbar'
import Dashboard from './components/Dashboard/Dashboard'
import ProjectDetails from './components/Projects/ProjectDetails'
import SignIn from './components/Auth/SignIn'
import SignUp from './components/Auth/SignUp'
import CreateProject from './components/Projects/CreateProject'
import AuthorizedRoute from './components/Routing/AuthorizedRoute'
import UnauthorizedRoute from './components/Routing/UnauthorizedRoute'

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <AuthorizedRoute path='/' exact component={Dashboard} />
          <AuthorizedRoute path='/create' component={CreateProject} />
          <AuthorizedRoute path='/project/:id' component={ProjectDetails} />
          <UnauthorizedRoute path='/signin' component={SignIn} />
          <UnauthorizedRoute path='/signup' component={SignUp} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
