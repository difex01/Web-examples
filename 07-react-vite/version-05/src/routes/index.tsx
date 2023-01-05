import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Counter from '../components/Counter'
import Form from '../components/Form'
import UsersList from '../components/UsersList'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Counter title='Counter' />}/>
        <Route path='/form' element={<Form />}/>
        <Route path='/users' element={<UsersList />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router