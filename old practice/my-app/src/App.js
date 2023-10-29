import './App.css';
import ConditionalComponent from './components/ConditionalComponent';
import DemoComponent from './components/DemoComponent';
import EmployeeList from './components/EmployeeList';
import EmployeeList1 from './components/EmployeeList1';
import InlineStyleSheet from './components/InlineStyleSheet';
import RegularStyleSheet from './components/RegularStyleSheet';
import StateComponent from './components/StateComponent';
import ProfilePic from './images/mine.png';
import moduleStyles from './components/mystylemodule.module.css'
function App() {
  return (
    <div className="App">
      <DemoComponent name="Irfan" city="Nadiad"/>
      <DemoComponent name="Shanu" city="Anand">
      <p>I am a developer</p>
      <img src={ProfilePic} width="20" height="20" />
      </DemoComponent>
      <StateComponent />
      <ConditionalComponent/>
      <EmployeeList/>
      <EmployeeList1/>
      <RegularStyleSheet primary={true}/>
      <InlineStyleSheet/>
      <h1 className={moduleStyles.success}>Success</h1>
    </div>
  );
}

export default App;
