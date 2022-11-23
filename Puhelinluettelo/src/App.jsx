import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

function App() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    console.log('effect');
    axios.get('http://localhost:3001/persons').then((response) => {
      console.log('promise fulfilled');
      setPersons(response.data);
    });
  }, []);

  const [newPerson, setNewPerson] = useState({ name: '', number: '' });

  const addPerson = (event) => {
    event.preventDefault();
    if (!newPerson.name.length) {
      alert('Name is mandatory');
      return;
    }
    if (persons.filter((person) => person.name === newPerson.name).length) {
      alert(`${newPerson.name} is already added to phonebook`);
      return;
    }
    const newPersons = [...persons, { name: newPerson.name, number: newPerson.number }];
    setPersons(newPersons);
  };

  const handleNameChange = (event) => {
    setNewPerson({ name: event.target.value, number: newPerson.number });
  };

  const handleNumberChange = (event) => {
    setNewPerson({ name: newPerson.name, number: event.target.value });
  };

  const [personFilter, setPersonFilter] = useState('');

  const handlePersonFilterChange = (event) => {
    setPersonFilter(event.target.value);
  };

  const filteredPersons = persons.filter((person) => person.name.search(new RegExp(personFilter, 'i')) >= 0);
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={personFilter} handlePersonFilterChange={handlePersonFilterChange} />
      <h3>Add a new</h3>
      <PersonForm
        submitHandler={addPerson}
        newPerson={newPerson}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Persons persons={filteredPersons} />
    </div>
  );
}

function Filter({ personFilter, handlePersonFilterChange }) {
  return (
    <div>
      filter shown with: <input value={personFilter} onChange={handlePersonFilterChange} />
    </div>
  );
}
Filter.propTypes = {
  personFilter: PropTypes.string,
  handlePersonFilterChange: PropTypes.func.isRequired,
};

function PersonForm({ submitHandler, newPerson, handleNameChange, handleNumberChange }) {
  return (
    <form onSubmit={submitHandler}>
      <div>
        name: <input key="name" value={newPerson.name} onChange={handleNameChange} />
      </div>
      <div>
        number: <input key="number" value={newPerson.number} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}
PersonForm.propTypes = {
  submitHandler: PropTypes.func.isRequired,
  newPerson: PropTypes.object.isRequired,
  handleNameChange: PropTypes.func.isRequired,
  handleNumberChange: PropTypes.func.isRequired,
};

function Persons({ persons }) {
  return (
    <ul>
      {persons.map((person, i) => (
        <Person key={i} person={person} />
      ))}
    </ul>
  );
}
Persons.propTypes = {
  persons: PropTypes.array.isRequired,
};

function Person({ person }) {
  return <li>{`${person.name} ${person.number}`} </li>;
}
Person.propTypes = {
  person: PropTypes.object.isRequired,
};

export default App;
