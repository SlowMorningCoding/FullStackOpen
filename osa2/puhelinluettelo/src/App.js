import React, { useState } from "react";

function App() {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const addPerson = (event) => {
    event.preventDefault();
    if (!newName.length) {
      alert("Name is mandatory");
      return;
    }
    if (persons.filter((person) => person.name === newName).length) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    const newPersons = [...persons, { name: newName }];
    console.log("handleAddPerson", newPersons);
    setPersons(newPersons);
  };

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
