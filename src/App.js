import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Homepage from "./containers/Homepage"
import SignIn from "./containers/SignIn"
import SignUp from "./containers/SignUp"

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/profile">
          <h1>Profile</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
