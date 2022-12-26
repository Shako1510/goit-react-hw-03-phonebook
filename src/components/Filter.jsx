import { LabelBox, InputBox, FindBox } from "./FilterStyled";
import PropTypes from 'prop-types';

const Filter = ({ filterValue, onChange }) => {
    return (
        <FindBox>
            <LabelBox> Find contacts by name </LabelBox>
            <InputBox
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required


                type="text"
                name="filter"
                value={filterValue}
                onChange={onChange} />

        </FindBox >

    )
}

export default Filter;

Filter.propTypes = {
    filterValue: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};