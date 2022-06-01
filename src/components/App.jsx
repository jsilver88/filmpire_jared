import React from 'react'
import { CssBaseline } from '@mui/material'
import { Route, Switch } from 'react-router-dom'
import { Actors, MovieInformation, Movies, Navbar, Profile } from './'

import useStyles from './styles'

const App = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path='/'>
            <Movies />
          </Route>
          <Route path='/movies'>
            <Movies />
          </Route>
          <Route path='/movies/:id'>
            <MovieInformation />
          </Route>
          <Route path='/actors/:id'>
            <Actors />
          </Route>
          <Route path='/profile/:id'>
            <Profile />
          </Route>
        </Switch>
      </main>
    </div>
  )
}

export default App
