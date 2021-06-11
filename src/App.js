import React from "react";
import {Provider, useDispatch} from "react-redux"
import {BrowserRouter, Route} from "react-router-dom"
import store from "./redux/root-redux";
import {filterUsers} from "./redux/sortReducer";
import {withSuspense} from "./components/customHook/withSuspense/withSuspense";

const MainPage = React.lazy(() => import('./components/MainPage/MainPage'))
const ProfileContainer = React.lazy(() => import('./components/Profile/Profile'))
const LoginContainer = React.lazy(() => import('./components/Login/Login'))
const RegistrationsContainer = React.lazy(() => import('./components/Registrations/Registrations'))

const AppContainer = () => {
   const dispatch = useDispatch()
   dispatch(filterUsers())
   return(
       <>
          <Route exact path='/' render={withSuspense(MainPage)}/>
          <Route path='/profile' render={withSuspense(ProfileContainer)}/>
          <Route path='/login' render={withSuspense(LoginContainer)}/>
          <Route path='/registration' render={withSuspense(RegistrationsContainer)}/>
     </>
   )
}



const App = () => {
  return (
      <BrowserRouter>
         <Provider store={store}>
            <AppContainer/>
         </Provider>
      </BrowserRouter>
  );
}

export default App
