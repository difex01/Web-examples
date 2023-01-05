import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Counter from '../components/Counter'
import Form from '../components/Form'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Counter title='Counter' />}/>
        <Route path='/form' element={<Form />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router