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
import ClassCounter from './components/ClassCounter';
import HooksCounter from './components/HooksCounter';
import ControlledFormHooks from './components/ControlledFormHooks';
import UseStateWithArrays from './components/UseStateWithArrays';
import UseStateWithObjects from './components/UseStateWithObjects';
import UseEffectCounter from './components/UseEffectCounter';
import UseEffectCounterContainer from './components/UseEffectCounterContainer';

function App() {
  return (
    <div className="App">
      <UseEffectCounterContainer />
      {/* <UseEffectCounter /> */}
      {/* <ClassCounter /> */}
      {/* <UseStateWithObjects /> */}
      {/* <UseStateWithArrays /> */}
      {/* <HooksCounter /> */}
      {/* <SearchBar /> */}
      {/* <UncontrolledForm /> */}
      {/* <ControlledForm /> */}
      {/* <ControlledFormHooks /> */}
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
