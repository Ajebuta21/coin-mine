import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import HomeLayout from "./layouts/HomeLayout";
import AllDeposits from "./pages/admin/AllDeposits";
import AllUsers from "./pages/admin/AllUsers";
import AllWithdrawals from "./pages/admin/AllWithdrawals";
import CreatePlan from "./pages/admin/CreatePlan";
import ShowDeposit from "./pages/admin/ShowDeposit";
import ShowWithdrawal from "./pages/admin/ShowWithdrawal";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import About from "./pages/guest/About";
import Atm from "./pages/guest/Atm";
import Swap from "./pages/guest/Swap";
import Tesla from "./pages/guest/Tesla";
import Home from "./pages/Home";
import CalcPage from "./pages/user/CalcPage";
import Dashboard from "./pages/user/Dashboard";
import MakeDeposit from "./pages/user/MakeDeposit";
import MakeWIthdrawal from "./pages/user/MakeWIthdrawal";
import Plans from "./pages/user/Plans";
import Profile from "./pages/user/Profile";
import UserEarnings from "./pages/user/UserEarnings";
import UserPlans from "./pages/user/UserPlans";
import UserTransaction from "./pages/user/UserTransaction";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <HomeLayout>
              <Home />
            </HomeLayout>
          }
        />
        <Route
          path="/login"
          element={
            <HomeLayout>
              <Login />
            </HomeLayout>
          }
        />
        <Route
          path="/signup"
          element={
            <HomeLayout>
              <Signup />
            </HomeLayout>
          }
        />
        <Route
          path="/about"
          element={
            <HomeLayout>
              <About />
            </HomeLayout>
          }
        />
        <Route
          path="/atm"
          element={
            <HomeLayout>
              <Atm />
            </HomeLayout>
          }
        />
        <Route
          path="/swap"
          element={
            <HomeLayout>
              <Swap />
            </HomeLayout>
          }
        />
        <Route
          path="/tesla"
          element={
            <HomeLayout>
              <Tesla />
            </HomeLayout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          }
        />
        <Route
          path="/profile"
          element={
            <DashboardLayout>
              <Profile />
            </DashboardLayout>
          }
        />
        <Route
          path="/deposit"
          element={
            <DashboardLayout>
              <MakeDeposit />
            </DashboardLayout>
          }
        />
        <Route
          path="/withdrawal"
          element={
            <DashboardLayout>
              <MakeWIthdrawal />
            </DashboardLayout>
          }
        />
        <Route
          path="/user-transactions"
          element={
            <DashboardLayout>
              <UserTransaction />
            </DashboardLayout>
          }
        />
        <Route
          path="/user-earnings"
          element={
            <DashboardLayout>
              <UserEarnings />
            </DashboardLayout>
          }
        />
        <Route
          path="/plan"
          element={
            <DashboardLayout>
              <Plans />
            </DashboardLayout>
          }
        />
        <Route
          path="/user-plans"
          element={
            <DashboardLayout>
              <UserPlans />
            </DashboardLayout>
          }
        />
        <Route
          path="/calculator"
          element={
            <DashboardLayout>
              <CalcPage />
            </DashboardLayout>
          }
        />
        <Route
          path="/the-site/admin/all-depo-sits"
          element={
            <DashboardLayout>
              <AllDeposits />
            </DashboardLayout>
          }
        />
        <Route
          path="/the-site/admin/all-withdraw-als"
          element={
            <DashboardLayout>
              <AllWithdrawals />
            </DashboardLayout>
          }
        />
        <Route
          path="/the-site/admin/all-withdraw-als/:id"
          element={
            <DashboardLayout>
              <ShowWithdrawal />
            </DashboardLayout>
          }
        />
        <Route
          path="/the-site/admin/all-depo-sits/:id"
          element={
            <DashboardLayout>
              <ShowDeposit />
            </DashboardLayout>
          }
        />
        <Route
          path="/the-site/admin/create-handle-plan"
          element={
            <DashboardLayout>
              <CreatePlan />
            </DashboardLayout>
          }
        />
        <Route
          path="/the-site/admin/all-users"
          element={
            <DashboardLayout>
              <AllUsers />
            </DashboardLayout>
          }
        />
      </Routes>
    </>
  );
};

export default App;
