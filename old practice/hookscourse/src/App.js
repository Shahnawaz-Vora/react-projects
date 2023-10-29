import logo from './logo.svg';
import './App.css';
import Counter from './components/UseStatePractice/Counter';
import Counter2 from './components/UseStatePractice/Counter2';
import Counter3 from './components/UseStatePractice/Counter3';
import HookStateArray from './components/UseStatePractice/HookStateArray';
import EffectsExample1 from './components/useEffectPractice/EffectsExample1';
import EffectsExample2 from './components/useEffectPractice/EffectsExample2';
import EffectsExample3 from './components/useEffectPractice/EffectsExample3';
import MouseContainer from './components/useEffectPractice/MouseContainer';
import FetchMultiplePosts from './components/dataFetching/FetchMultiplePosts';
import FetchSinglePost from './components/dataFetching/FetchSinglePost';



function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      {/* <Counter2/> */}
      {/* <Counter3/> */}
      {/* <HookStateArray/> */}
      {/* <EffectsExample1/> */}
      {/* <EffectsExample2/> */}
      {/* <EffectsExample3/> */}
      {/* <MouseContainer/> */}
      {/* <FetchMultiplePosts/> */}
      <FetchSinglePost/>
    </div>
  );
}

export default App;
