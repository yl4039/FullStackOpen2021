import React from 'react'

const PersonForm = ({
  newName,
  handleNewName,
  newNumber,
  handleNewNumber,
  addPerson,
}) => {
  return (
    <form>
      <div>
        name: <input value={newName} onChange={handleNewName} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNewNumber} />
      </div>
      <div>
        <button type='submit' onClick={addPerson}>
          add
        </button>
      </div>
    </form>
  )
}

export default PersonForm
