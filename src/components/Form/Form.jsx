import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Button, Input, LabelForm,  StyledForm } from './Form.styled';

class Form extends Component {
  // state всередині форми потрібен, щоб коли ми щось вводимо в форму, перемальовувались інпути
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <div>
          <LabelForm htmlFor={this.nameInputId}>
            Name
            </LabelForm>
            <Input
              value={this.state.name}
              onChange={this.handleChange}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              id={this.nameInputId}
            />
          
        </div>
        <div>
          <LabelForm htmlFor={this.numberInputId}>
            Number
            </LabelForm>
            <Input
              value={this.state.number}
              onChange={this.handleChange}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              id={this.numberInputId}
            />
          
        </div>

        <Button type="submit">Add contact</Button>
      </StyledForm>
    );
  }
}

export default Form;
