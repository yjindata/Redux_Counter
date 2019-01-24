import { createStore } from 'redux';

const counterHeadings = document.getElementsByTagName('h1')[0];
const plusButton = document.getElementById('plus-btn');
const minusButton = document.getElementById('minus-btn');


const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });


const initialState = {
  light: false,
  counter: 0
};


function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };
    default:
      return state;
  }
}

// store
const store = createStore(reducer);

// render function
const render = () => {
  const state = store.getState(); 
  const { counter } = state; 

  counterHeadings.innerText = counter;
};

render();


store.subscribe(render);

plusButton.onclick = () => {
  store.dispatch(increment());
};

minusButton.onclick = () => {
  store.dispatch(decrement());
};
