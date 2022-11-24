import { React, Component } from 'react';
import PropTypes from 'prop-types';
import { FormBox, ButtonAdd, InputBox, LabelBox } from './FormStyled';



// const nameInputId = nanoid(5);
// const numberInputId = nanoid(8)


class ContactForm extends Component {

    state = {
        name: '',
        number: '',
    };


    handleInputChange = e => {
        const { name, value } = e.currentTarget;
        this.setState(
            { [name]: value }
        );
    };

    handleSubmit = event => {
        event.preventDefault();


        this.props.onSubmit(this.state);

        this.reset();
    };

    reset = () => {
        this.setState({ name: '', number: '' })
    };

    render() {
        return (
            <FormBox>
                <form onSubmit={this.handleSubmit}>
                    <LabelBox >Name
                        <InputBox
                            type="text"
                            name="name"
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                            onChange={this.handleInputChange}
                            value={this.state.name}

                        />
                    </LabelBox>

                    <LabelBox>Number
                        <InputBox
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                            onChange={this.handleInputChange}
                            value={this.state.number}


                        />
                    </LabelBox>

                    <ButtonAdd type="submit">Add contact</ButtonAdd>
                </form>
            </FormBox >
        )
    }
}


export default ContactForm;

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,

};