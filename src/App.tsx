import './App.scss';
import { Navbar } from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

export const App = () => (
  <html className="has-navbar-fixed-top">
    <div data-cy="app">
      <Navbar />

      <main className="section">
        <div className="container">
          <Outlet />
        </div>
      </main>
    </div>
  </html>
);
