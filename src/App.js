import './App.css';
import AllContacts from './contacts.json';
import { useState } from 'react';

function App() {
  const [contacts, setContacts] = useState(AllContacts.slice(0, 5))
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>Image</th>
            <th>Popularity</th>
            <th>Won oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => {
            return <tr>
              <td>{contact.name}</td>
            </tr>
          })}
        </tbody>
      </table>
    </div>)
}

export default App;
