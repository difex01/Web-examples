import { Route, Routes, BrowserRouter } from 'react-router-dom'
import UsersList from '../components/UsersList'
import Home from '../views/Home'
import FormView from '../views/FormView'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/form' element={<FormView />}/>
        <Route path='/users' element={<UsersList />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router