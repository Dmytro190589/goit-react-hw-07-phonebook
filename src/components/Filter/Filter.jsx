import { setFilter } from 'redux/filter';
import { useDispatch } from 'react-redux';
import css from './Filter.module.css'

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <dvi  className={css.findINput}>
      <p>Find contacts by name</p>
      <input
       
        type="text"
        onChange={e => dispatch(setFilter(e.currentTarget.value.toLowerCase()))}
      />
    </dvi>
  );
};
export default Filter;
