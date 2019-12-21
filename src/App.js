import React, { Component } from 'react';
import classes from  './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'fdadbsaf', name: "John", age: 20 },
      { id: 'fsdadsds', name: "Thinh", age: 22 },
      { id: 'chkdsgfd', name: "Kaa", age: 21 }
    ],
    otherState: "Other state",
    showPersons: false

  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1)
    this.setState({ persons: persons });

  }

  handleShowPersons = () => {
    const { showPersons } = this.state;
    this.setState({ showPersons: !showPersons });
  }

  handleChangeName = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => person.id === id);

    //Make a copy of target person -> Because we do not mutate the state of the App
    const person = {
      ...this.state.persons[personIndex]
    };
    //const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;

    //Make a deep copy of state persons not references
    const persons = [...this.state.persons];

    persons[personIndex] = person;
    this.setState({ persons: persons });

  }

  render() {

    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return (
                <Person
                  name={person.name}
                  age={person.age}
                  handleClick={() => this.deletePersonHandler(index)}
                  key={person.id}
                  changed={(event) => this.handleChangeName(event, person.id)}
                />
              )
            })
          }
        </div>
      );
      btnClass = classes.Red;
    }

    const assignedClasses = [];

    if (this.state.persons.length <= 2)
      assignedClasses.push(classes.red);
    if (this.state.persons.length <= 1)
      assignedClasses.push(classes.bold);

    return (
      <div className={classes.App}>
        <h1>Hi, This is a courses </h1>
        <p className={assignedClasses.join(' ')}>This is really working.</p>
        <button
          onClick={this.handleShowPersons}
          className = {btnClass}
        >
          Switch Button
          </button>
        {persons}
      </div>
    );
  }
}

export default App
