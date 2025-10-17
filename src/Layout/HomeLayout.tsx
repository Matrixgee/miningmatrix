
import Header from '../Component/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Component/Footer'

const HomeLayout = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default HomeLayout
