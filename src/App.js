
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import LoginFrom from './Pages/LoginFrom';
import Signup from './Pages/Signup';
import VerifyEmail from './Pages/VerifyEmail';
import Profile from './Pages/Profile';
import Setting from './Pages/dashbord/Setting';
import Navbar from './Pages/home/Navbar';
import CarSecetion from './Pages/storeBar/CarSecetion';
import ForgetPassword from './Pages/ForgetPassword';
import CreateStore from './Pages/dashbord/Admin/CreateStore';
import Cart from './Pages/cart';
import CreateBikeDetail from './Pages/dashbord/Admin/CreateBikeDetail';
import CrateEngineData from './Pages/dashbord/Admin/CrateEngineData';
import Master from './Pages/dashbord/Admin/Master';
import HomePage from './Pages/HomePage';
import MyBookingBike from './Pages/home/MyBookingBike';
import Error from './Pages/storeBar/Error';
import About from './Pages/About';
import AdminBooking from './Pages/dashbord/Admin/AdminBooking';
import { useSelector } from 'react-redux';
import Contact from './Pages/ContactPage/Contact';
import Sidebar from './Componet/Sidebar';
import ResetPasswordVerifiyEmail from './Pages/storeBar/ResetPasswordVerifiyEmail';
import Bike from './Pages/home/Bike_Secetion/Bike';
import New from './Pages/home/Bike_Secetion/New';
import AddNotification from './Pages/dashbord/Admin/PushNoti/AddNotification';


function App() {
  const {user} = useSelector((state)=>state.profile)
  return (
    <div className='xscroll-smooth'>
        <Navbar/>
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='login' element={<LoginFrom/>} />
            <Route path='About' element={<About/>} /> 
            <Route path='forget-password' element={<ForgetPassword/>} />
            <Route path='signup' element={<Signup/>} />
            <Route path='verifiye-Email' element={<VerifyEmail/>} />
            <Route path='ResetPasswordverifiye-Email' element={<ResetPasswordVerifiyEmail/>} />
            <Route path='Contact-us' element={<Contact/>} />
            <Route path='/dashbord/getstoreDetail' element={<CarSecetion/>} />
            <Route path='/addtocart' element={<Cart/>} />
            <Route path='/dashbord/getstore/MasterDetail/:StoreId' element={<Master/>} />
            {
                user?.accountType ==="Customer" ?  <Route path='/dashbord' element={<Sidebar/>} >
                <Route path='setting' element={<Setting/>}/>
                <Route path='myprofile' element={<Profile/>} />
                <Route path='myBookingBike' element={<MyBookingBike/>} />
            </Route> : <Route path='/dashbord' element={<Sidebar/>} >
                  <Route path='myprofile' element={<Profile/>} />
                  <Route path='BookingBike' element={<AdminBooking/>} />
                  <Route path='Admin/cratestore' element={<CreateStore/>} />
                  <Route path='Notifications' element={<AddNotification/>} />
                  <Route path='Admin/cratestore/BikeInformation/:StoreId' element={<CreateBikeDetail/>} />
                  <Route path='Admin/cratestore/BikeInformation/Engine/:BikeId' element={<CrateEngineData/>} />
                  <Route path='setting' element={<Setting/>}/>
            </Route>
            }
           
            <Route path="*" element={<Error/>} />
        </Routes>
    </div>
  );
}

export default App;
