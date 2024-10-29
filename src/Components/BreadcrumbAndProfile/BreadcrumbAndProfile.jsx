import React from 'react'
import { FaUser } from 'react-icons/fa';
import '../BreadcrumbAndProfile/BreadcrumbAndProfile.css'

const BreadcrumbAndProfile = () => {
  return (
    <div className="header-container">

      <div className="breadcrumb">
        <span>Home</span>
        <span className="breadcrumb-separator">{'>'}</span>
        <span>User</span>
        <span className="breadcrumb-separator">{'>'}</span>
        <span>Profile</span>
      </div>
      
      <div className="user-info">
        <span>Nikita Sharma</span>
        <FaUser className="user-icon" />
      </div>
    </div>
  )
}

export default BreadcrumbAndProfile