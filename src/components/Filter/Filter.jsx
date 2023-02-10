import { setFilter } from 'redux/filter';
import { useDispatch } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        onChange={e => dispatch(setFilter(e.currentTarget.value.toLowerCase()))}
      />
    </div>
  );
};
export default Filter;
