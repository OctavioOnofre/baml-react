import logo from './logo.svg';
import './App.css';
import DashHeaderComponent from './components/DashHeaderComponent';
import DashMenuComponent from './components/DashMenuComponent';
import DashboardComponent from './components/DashboardComponent';
import DashFooterComponent from './components/DashFooterComponent';

function App() {
  return (
    <div class="wrapper">
      <DashHeaderComponent/>
      <DashMenuComponent/>
      <DashboardComponent/>
      <DashFooterComponent/>
      
    </div>
  );
}

export default App;
