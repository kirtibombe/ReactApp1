import React,{ Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state ={
    persons:[
      {id:'1a1', name:'Kirti', age:25},
      {id:'2a2', name:'Amol', age:29},
      {id:'3a3', name:'Ajita', age:28}
    ],
    PersonShow :false
  }
personToggleHandler = () => {
let doPerson = this.state.PersonShow;
this.setState({PersonShow : !doPerson})

}

deletePersonHandler= (index) =>{
  const persons =this.state.persons;
  persons.splice(index, 1);
  this.setState({persons:persons})
}

switchNameHandler = (newName) => {

      this.setState( {
        persons:[
          {name:newName, age:25},
          {name:'Amol', age:29},
          {name:'Ajita', age:280}
        ]
      } )
  }

nameChangeHandler = (event ,id) => {
  const personIndex = this.state.persons.findIndex(p => {
    return p.id === id;

  });

  const person ={
     ...this.state.persons[personIndex]
   };

person.name = event.target.value;

const persons = [...this.state.persons];
persons[personIndex] = person;

      this.setState( {
        persons:persons
      } );
  }


  render() {
    let persons = null;

       if(this.state.PersonShow) {
           persons = (
             <div>
             {
               this.state.persons.map((person,index )=>{
                 return <Person
                 click ={() => this.deletePersonHandler(index)}
                   name ={person.name}
                   age  ={person.age}
                   key ={person.id}
                   changed ={(event) => this.nameChangeHandler(event, person.id)}
                 />
               })
             }

          </div>
        );
       }
    return (
      <div className="App">
          <h1>Welcome to My Page</h1>
          <button onClick={this.personToggleHandler}>Switch Name</button>
          {persons}
       </div>
    );

}

  // return(
  //   React.createElement('div', null,React.createElement('h1',null,'Hi  React App'))
  // );

}

export default App;

// const App = () => {
//
//   const [ personState, setPersonState] = useState({
//     persons:[
//              {name:'Kirti',age:25},
//              {name:'Amol',age:29},
//              {name:'Ajita',age:28}
//          ],
//          otherState:"some other value"
//   });
// const [otherState,setOtherState] = useState({
//   other: "some other value"
// })
//
//
// const switchNameHandler = () => {
//   setPersonState({
//     persons:[
//                  {name:'Kirti bombe', age:25},
//                  {name:'Amol', age:29},
//                  {name:'Ajita', age:280}
//               ],
//               otherState:"some other value"
//
//   });
//
// setOtherState ({
//      other: "different state"
// });
// return (
//   <div className="App">
//       <h1>Welcome to My Page</h1>
//       <button onClick={switchNameHandler}>Switch Name</button>
//     <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
//     <Person  name={personState.persons[1].name} age={personState.persons[1].age}/>
//     <Person  name={personState.persons[2].name} age={personState.persons[2].age}>
//     I Am middle sister
//     </Person>
//    </div>
// );
