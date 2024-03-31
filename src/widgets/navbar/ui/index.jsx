import './index.scss';
import { useState } from 'react';

export default function Navbar({ setIsSidebarOpen, isSidebarOpen }) {
  return (
    <>
      <div id="mobile">
        <i className="fas fa-bars" onClick={() => setIsSidebarOpen(!isSidebarOpen)}></i>
        <i className="fas fa-times"></i>
      </div>
    </>
  );
}
