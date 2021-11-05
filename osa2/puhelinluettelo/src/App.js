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
    console.log("handleAddPerson", newPersons);
    setPersons(newPersons);
  };

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewPerson({ name: event.target.value, number: newPerson.number });
  };

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewPerson({ name: newPerson.name, number: event.target.value });
  };

  const [numberFilter, setNumberFilter] = useState("");

  const handleNumberFilterChange = (event) => {
    console.log("filter", event.target.value);
    setNumberFilter(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with:{" "}
        <input value={numberFilter} onChange={handleNumberFilterChange} />
      </div>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newPerson.name} onChange={handleNameChange} />
        </div>
        <div>
          number:{" "}
          <input value={newPerson.number} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.filter(person => person.name.search(new RegExp(numberFilter,"i"))>=0).map((person) => (
          <li key={person.name}>{`${person.name} ${person.number}`} </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
