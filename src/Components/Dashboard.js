import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Dashboard.css"
import {
  FaHome,
  FaBuilding,
  FaBed,
  FaUsers,
  FaMoneyBillWave,
  FaWallet,
  FaChartBar,
  FaCog
} from "react-icons/fa";

export const Dashboard = () => {
  return (
    <div className='dashboard'>

      <div id='stayTrack-logo'>
        <img 
            src='https://room-management-photos.s3.eu-north-1.amazonaws.com/stayTrack/stayTrack.png' 
            className='logo' 
            alt='StayTrack Logo' 
        />
      </div>
      <div id='div4'> 
        <nav>
          <NavLink to="/Login">Login</NavLink>
          <NavLink to="/dashboard">
          <FaHome /> Dashboard
          </NavLink>

          <NavLink to="/pg-management">
            <FaBuilding /> PG Management
          </NavLink>

          <NavLink to="/rooms">
            <FaBed /> Rooms
          </NavLink>

          <NavLink to="/tenants">
            <FaUsers /> Tenants
          </NavLink>

          <NavLink to="/expenses">
            <FaMoneyBillWave /> Expenses
          </NavLink>

          <NavLink to="/income">
            <FaWallet /> Income
          </NavLink>

          <NavLink to="/reports">
            <FaChartBar /> Reports
          </NavLink>

          <NavLink to="/settings">
            <FaCog /> Settings
          </NavLink>

          </nav>
      </div>
      

      <div id='div1'>
        <div id='pgs'>
          <div>
            <h4>Total PGs</h4>
            <h1>10</h1>
          </div>
          <FaBuilding className="nav-icon"/>
        </div>


        <div id='pgs'>
          <div>
            <h4>Total Tenants </h4>
            <h1>100</h1>
          </div>
          <FaUsers className="nav-icon"/>
        </div>


        <div id='pgs'>
          <div>
            <h4>Total Rooms</h4>
            <h1>100</h1>
          </div>
          
          <FaBed className="nav-icon"/>
        </div>

        <div id='pgs'>
          <div>
            <h4>Monthly Profit</h4>
            <h1>100</h1>
          </div>

          <FaWallet className="nav-icon"/>
        </div>
      </div>
      <div id='div2'> <h1>Transactions</h1>
        <table>
          <tr>
            <th>1</th>
            <th>1</th>
            <th>1</th>
            <th>1</th>
            <th>1</th>
          </tr>
        </table>
      </div>

    </div>
  )
}