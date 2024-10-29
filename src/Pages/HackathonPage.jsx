import React from 'react'
import '../Pages/CSS/HackathonPage.css'
import Sidebar from '../Components/Sidebar/Sidebar'
import Hackathon from '../Components/Hackathon/Hackathon'

const HackathonPage = () => {
  return (
    <div class="chat-container">
      <div class="chat-sidebar">
        <Sidebar />
      </div>
      <div class="chat-content">
        <Hackathon />
      </div>
  </div>

  )
}

export default HackathonPage