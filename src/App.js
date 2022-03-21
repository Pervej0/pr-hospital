import "./App.css";
import Footer from "./Component/Shared/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import Header from "./Component/Shared/Header/Header";
import Register from "./Component/Register/Register";
import Login from "./Component/Login/Login";
import AuthProvider from "./Context/AuthProvider";
import Doctors from "./Component/Doctors/Doctors";
import TestingLab from "./Component/TestingLab/TestingLab";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AddReview from "./Component/Dashboard/AddReview/AddReview";
import Dashboard from "./Component/Dashboard/Dashboard";
import AddAdmin from "./Component/Dashboard/AddAdmin/AddAdmin";
import AdminRoute from "./AdminRoute/AdminRoute";
import AllAppointments from "./Component/Dashboard/AllAppointments/AllAppointments";
import Appoinments from "./Component/Appoinments/Appointments";
import AddDoctor from "./Component/Dashboard/AddDoctor/AddDoctor";
import DoctorDetails from "./Component/Doctors/SubCompo/DoctorDetails";
import MyAppoinments from "./Component/Dashboard/MyAppointments/MyAppoinments";
import MakePayment from "./Component/Dashboard/MakePayment/MakePayment";
import Allreview from "./Component/Dashboard/AllReview/AllReview";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="home" index element={<Home />} />
            <Route path="appointments" index element={<Appoinments />} />
            <Route
              path="doctors"
              index
              element={
                <PrivateRoute>
                  <Doctors />
                </PrivateRoute>
              }
            />
            <Route
              path="doctors/:doctorId"
              index
              element={
                <PrivateRoute>
                  <DoctorDetails />
                </PrivateRoute>
              }
            />
            <Route
              path="home/:doctorId"
              index
              element={
                <PrivateRoute>
                  <DoctorDetails />
                </PrivateRoute>
              }
            />
            <Route
              path="testing&lab"
              index
              element={
                <PrivateRoute>
                  <TestingLab />
                </PrivateRoute>
              }
            />
            <Route
              path="dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            >
              <Route
                path="/dashboard"
                element={
                  <h1 className="text-center md:text-4xl text-2xl my-8 font-mono font-semibold">
                    Welcome To Dashboard
                  </h1>
                }
              />
              <Route path="/dashboard/addreview" element={<AddReview />} />
              <Route
                path="/dashboard/allAppointments"
                element={
                  <AdminRoute>
                    <AllAppointments />
                  </AdminRoute>
                }
              />
              <Route
                path="/dashboard/allreview"
                element={
                  <AdminRoute>
                    <Allreview />
                  </AdminRoute>
                }
              />
              <Route
                path="/dashboard/addadmin"
                element={
                  <AdminRoute>
                    <AddAdmin />
                  </AdminRoute>
                }
              />
              <Route
                path="/dashboard/myappointments"
                element={<MyAppoinments />}
              />
              <Route
                path="/dashboard/makePayment/:appointmentId"
                element={<MakePayment />}
              />
              <Route
                path="/dashboard/adddoctor"
                element={
                  <AdminRoute>
                    <AddDoctor />
                  </AdminRoute>
                }
              />
            </Route>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
