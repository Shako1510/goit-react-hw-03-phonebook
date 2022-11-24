import PropTypes from 'prop-types';
import { ListContacts, ButtonDel } from './ContactsStyled';

const Contacts = ({ contacts, onClick }) => {
    return (
        <ListContacts>
            {contacts.map(({ id, name, number }) =>
                <li key={id}>
                    {name}: {number}
                    <ButtonDel type='button' onClick={() => onClick(id)}>Delete</ButtonDel>
                </li>)
            }

        </ListContacts>
    )
}


export default Contacts;

Contacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
};