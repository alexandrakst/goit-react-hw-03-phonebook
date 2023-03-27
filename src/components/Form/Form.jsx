import React, { Component } from "react";
import { Label, Input, Div, Button} from './Form.styled'
import { nanoid } from 'nanoid'


export class Form extends Component {
    state = {
    contacts: [],
    name: '',
    number: ''
    }
    
    nameInputId = nanoid();
    numberInputId = nanoid();

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);

        this.props.onSubmit(this.state)

        this.reset();
    }

    reset = () => {
        this.setState({
            name: '',
            number: ''
        })
    }

    handleInputChange = e => {
        const { name, value } = e.currentTarget;

        this.setState({
            [name]: value,
        })
    }


    render() {
        return (
            <Div>
            <form onSubmit={ this.handleSubmit }>
                <Label htmlFor={ this.nameInputId }>
                Name
                <Input
                type="text"
                id={ this.nameInputId }
                name="name"
                value={this.state.name}
                onChange={ this.handleInputChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                    />
                    </Label> 
                    <Label htmlFor= { this.numberInputId }>
                    Number
                    <Input
                    type="tel"
                    id={ this.numberInputId }
                    name="number"
                    value={this.state.number}
                    onChange={ this.handleInputChange }
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    />
                    <Button type='submit'>Add contact</Button>
                    </Label> 
                </form>
                </Div>
        )
    }
}

export default Form