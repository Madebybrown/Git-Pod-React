import logo from './logo.svg';
import './App.css';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
import NestingComponents from './components/NestingComponents';
import MethodsAsPropsParent from './components/MethodsAsPropsParent';
import RenderingLists from './components/RenderingLists';
import LifeCyclesCDM from './components/LifeCyclesCDM';
import LifeCyclesCDU from './components/LifeCyclesCDU';
import LifeCyclesCWU from './components/LifeCyclesCWU';
import ControlledForm from './components/ControlledForm';
import UncontrolledForm from './components/UncontrolledForm';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <SearchBar />
      {/* <UncontrolledForm /> */}
      {/* <ControlledForm /> */}
      {/* <LifeCyclesCWU /> */}
      {/* <LifeCyclesCDU /> */}
      {/* <LifeCyclesCDM /> */}
      {/* <RenderingLists /> */}
      {/* <MethodsAsPropsParent /> */}
      {/* <NestingComponents /> */}
      {/* <ConditionalRenderingClass /> */}
      {/* <ConditionalRenderingFunctional connected={true} /> */}
    </div>
  );
}

export default App;
