import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import css from './ContactList.module.css';
export default function ContactList(
  {
    contacts,
  }
) {

  const dispatch = useDispatch()
  return (
    <ul>
      {contacts.map(e => (
        <li className={css.list} key={e.id} id={e.id}>
          <p>
            {e.name} : {e.number}
          </p>
          <button className={css.btn} onClick={() =>
            dispatch(deleteContact(e.id))
          }>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  })).isRequired,
};