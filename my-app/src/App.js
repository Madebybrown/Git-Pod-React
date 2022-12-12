import logo from './logo.svg';
import './App.css';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
import NestingComponents from './components/NestingComponents';
import MethodsAsPropsParent from './components/MethodsAsPropsParent';
import RenderingLists from './components/RenderingLists';

function App() {
  return (
    <div className="App">
      <RenderingLists />
      {/* <MethodsAsPropsParent /> */}
      {/* <NestingComponents /> */}
      {/* <ConditionalRenderingClass /> */}
      {/* <ConditionalRenderingFunctional connected={true} /> */}
    </div>
  );
}

export default App;
