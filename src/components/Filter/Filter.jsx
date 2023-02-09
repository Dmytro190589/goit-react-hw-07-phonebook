import { setFilter } from 'redux/filter';
import { useDispatch } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        onChange={e => dispatch(setFilter(e.currentTarget.value.toLowerCase()))}
      />
    </>
  );
};
export default Filter;
