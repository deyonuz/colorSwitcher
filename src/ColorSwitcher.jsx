import React, { useReducer } from 'react';
import colorReducer from './reducer';
import * as actionTypes from './constants';

const ColorSwitcher = () => {
  const initialState = {
    red: 0,
    green: 0,
    blue: 0,
  };

  const [state, dispatch] = useReducer(colorReducer, initialState);

  return (
    <div style={{ backgroundColor: `rgb(${state.red},${state.green},${state.blue})`, padding: '200px', borderRadius: '20px' }}>
      <div>
        <button style={{width:'100px', height: '50px', marginRight: '100px', marginBottom: '50px', borderRadius: '15px'}} onClick={() => dispatch({ type: actionTypes.INCREMENT_RED })}>RED +1</button>
        <button style={{width:'100px', height: '50px', marginRight: '100px', marginBottom: '50px', borderRadius: '15px'}}  onClick={() => dispatch({ type: actionTypes.DECREMENT_RED })}>RED -1</button>
      </div>
      <div>
        <button style={{width:'100px', height: '50px', marginRight: '100px', marginBottom: '50px', borderRadius: '15px'}}  onClick={() => dispatch({ type: actionTypes.INCREMENT_GREEN })}>GREEN +1</button>
        <button style={{width:'100px', height: '50px', marginRight: '100px', marginBottom: '50px', borderRadius: '15px'}}  onClick={() => dispatch({ type: actionTypes.DECREMENT_GREEN })}>GREEN -1</button>
      </div>
      <div>
        <button style={{width:'100px', height: '50px', marginRight: '100px', marginBottom: '50px', borderRadius: '15px'}}  onClick={() => dispatch({ type: actionTypes.INCREMENT_BLUE })}>BLUE +1</button>
        <button style={{width:'100px', height: '50px', marginRight: '100px', marginBottom: '50px', borderRadius: '15px'}}  onClick={() => dispatch({ type: actionTypes.DECREMENT_BLUE })}>BLUE -1</button>
      </div>
    </div>
  );
};

export default ColorSwitcher;
