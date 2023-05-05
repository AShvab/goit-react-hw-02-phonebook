import { Component } from 'react';
// import { nanoid } from 'nanoid';
import Form from './Form';


class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = data =>{
console.log(data)
  };

  render() {
    return (
      <>
        <h1>PhoneBook</h1>
        {/* onSubmit це проп, при сабміті отримуємо фінальні дані форми */}
        <Form onSubmit={this.formSubmitHandler} />       
      </>
    );
  }
}

export default App;
