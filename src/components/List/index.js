import PropTypes from 'prop-types';

const List = ({ children, data, inverse }) => {
  if (inverse) {
    return data
      .slice(0)
      .reverse()
      .map((value, index) => children(value, index));
  }
  return data.map((value, index) => children(value, index));
};

List.defaultProps = {
  children: f => f,
};

List.propTypes = {
  children: PropTypes.func,
  data: PropTypes.array,
};

export default List;
