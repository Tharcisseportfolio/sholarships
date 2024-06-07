
import Navbar from './Navbar'
// import SideBar from './SideBar'
import Header from './header/Header'
import CollegeList from './collegeList/CollegeList'
import './College.css'


const College = () => {
  return (
    <div className='College'>
      <Navbar/>  
      {/* <SideBar /> */}
      <Header/>
      <div className='college-list-body'>
      <CollegeList />

      </div>
      
              
    </div>
  )
}

export default College