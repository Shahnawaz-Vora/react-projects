import './App.css';
import ComponentC from './components/consumer/ComponentC';
import React from 'react';
import Counter1 from './components/reducer/Counter1';
import Counter2 from './components/reducer/Counter2';
import Counter3 from './components/reducer/Counter3';
import UseStateDataFetch from './components/useStateDataFetch/UseStateDataFetch';
import UseReducerDataFetch from './components/useReducerDataFetch/UseReducerDataFetch';
import MainComponent from './components/useCallback/MainComponent';
import MyMemoCounter from './components/useMemo/MyMemoCounter';
import FocusInput from './components/useRef/FocusInput';
import Interval from './components/useRef/Interval';

export const PriceContext = React.createContext()
export const ItemContext = React.createContext()

function App() {
  return (
    <div className="App">
      {/* consumer */}
      {/* <PriceContext.Provider value="200">
        <ItemContext.Provider value={"Samsung"}>
          <ComponentC/>
        </ItemContext.Provider>
      </PriceContext.Provider> */}

      {/* reducer */}
      {/* <Counter1/> */}
      {/* <Counter2/> */}
      {/* <Counter3/> */}

      {/* <UseStateDataFetch/> */}
      {/* <UseReducerDataFetch/> */}

      {/* <MainComponent/> */}
      {/* <MyMemoCounter/> */}

      {/* <FocusInput/> */}

      <Interval/>
    </div>
  );
}

export default App;
