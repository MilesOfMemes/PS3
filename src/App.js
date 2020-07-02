import React, {Component} from 'react';
import './App.css';
import Contacts from "./Components/Contacts"
import SearchBar from "./Components/SearchBar"
import faker from "faker";

class App extends React.Component {
state= {
  name: "",
  email: "",
  contacts: [],
  searchResults: [],
}

createContact = (theID) => {
  console.log("test");
  var i;
  
  for(i = 0; i < 20; i++){
    this.setState({
      contacts: [...this.state.contacts, 
        {theName: faker.name.findName(), theEmail: faker.internet.email(), theID: theID },
      ],
    }); 
    //console.log(this.state.contacts.theID);
    //console.log(this.state.contacts[i-1].theName);
  }; 
};

searchContacts = (e) => {
  var i;
  for(i = 0; i < 20; i++){
    //search through contacts, and find what matches

    //after finding what matches, modify it in the state


      this.setState({
        
      });

      //up date the display
  }

}



id = 0;
  render(){
    this.id++;
    return (
      <div className="App">
        {console.log("This.id: " + this.id)}
        <button onClick={() => this.createContact(this.id)}>Generate names+emails</button>
        <SearchBar/>

        {}
        {this.state.contacts.map(({theID, theName, theEmail}) => {
          var i;
          for(i=0; i<20; i++){ //for loop doesn't seem to be working. 
            return( 
              <div key={theID}>
                <Contacts name={theName} email={theEmail}/>
              </div>
            );
          }
        })}

         {/* <UserList/> Get rid of this. Only keeping it for reference at the moment.*/}
      </div>
    );
  }
}

export default App;
