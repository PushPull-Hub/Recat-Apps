import React from 'react';
import { Admin, Resource } from 'react-admin';
import { UserList } from './components/users';
import jsonServerProvider from 'ra-data-json-server';
import './App.css';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

function App() {
  return (
    <div className='App'>
      <Admin dataProvider={dataProvider}>
        <Resource name='users' list={UserList} />
        <Resource name='posts' list={UserList} />
      </Admin>
    </div>
  );
}

export default App;
