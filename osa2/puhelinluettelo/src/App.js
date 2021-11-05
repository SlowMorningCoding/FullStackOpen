import React, { useState } from "react";

function App() {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);

  const [newPerson, setNewPerson] = useState({ name: "", number: "" });

  const addPerson = (event) => {
    event.preventDefault();
    if (!newPerson.name.length) {
      alert("Name is mandatory");
      return;
    }
    if (persons.filter((person) => person.name === newPerson.name).length) {
      alert(`${newPerson.name} is already added to phonebook`);
      return;
    }
    const newPersons = [
      ...persons,
      { name: newPerson.name, number: newPerson.number },
    ];
    setPersons(newPersons);
  };

  const handleNameChange = (event) => {
    setNewPerson({ name: event.target.value, number: newPerson.number });
  };

  const handleNumberChange = (event) => {
    setNewPerson({ name: newPerson.name, number: event.target.value });
  };

  const [personFilter, setPersonFilter] = useState("");

  const handlePersonFilterChange = (event) => {
    setPersonFilter(event.target.value);
  };

  const filteredPersons = persons.filter(
    (person) => person.name.search(new RegExp(personFilter, "i")) >= 0
  )
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

function PersonForm({
  submitHandler,
  newPerson,
  handleNameChange,
  handleNumberChange
}) {
  return (
    <form onSubmit={submitHandler}>
      <div>
        name: <input key="name" value={newPerson.name} onChange={handleNameChange} />
      </div>
      <div>
        number:{" "}
        <input key="number" value={newPerson.number} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}

function Persons({ persons }) {
  return (
    <ul>
      {persons.map((person,i) => (
          <Person key={i} person={person}/>
        ))}
    </ul>
  );
}

function Person({person}) {
  return <li>{`${person.name} ${person.number}`} </li>;
}

export default App;
