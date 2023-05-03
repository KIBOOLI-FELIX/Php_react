import { BrowserRouter,Routes,Route } from "react-router-dom"
import AddEmployee from './views/AddEmployee';
import EditEmployee from './views/EditEmployee';

function App() {

  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<AddEmployee/>}/>
        <Route path='/employ/:id/edit' element={<EditEmployee/>}/>
      </Routes>
    </div>
  )
}

export default App
