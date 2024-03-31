import './index.scss';
import Sidebar from '../../../widgets/sidebar/ui/index.jsx';
import Container from '../../../widgets/container/ui/index.jsx';
import Navbar from '../../../widgets/navbar/ui/index.jsx';
import { useState } from 'react';

export default function FirstLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="first-layout">
      <Navbar className="first-layout__header">header</Navbar>
      <main className="first-layout__main">
        <div className="first-layout__aside">
          <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        </div>

        <Container className="first-layout__container" />
      </main>
      <footer className="first-layout__footer">footer</footer>
    </div>
  );
}
