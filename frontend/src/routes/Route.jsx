import {Routes,Route} from 'react-router-dom';
import AddEmployee from '../views/AddEmployee';
import EditEmployee from '../views/EditEmployee';
const Router=()=>{
  <div>
    <Routes>
      <Route path='/' element={<AddEmployee/>}/>
      <Route path='employ/id/edit' element={<EditEmployee/>}/>
    </Routes>
  </div>
}
export default Router;