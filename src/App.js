import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App" style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
        <h1>Todo App</h1>
        <AddTask />
        <ListTask />
      </div>
    </Provider>
  );
}

export default App;
