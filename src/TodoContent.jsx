// Tas.js
import PropTypes from 'prop-types';
Tas.propTypes = {
    todo: PropTypes.array,
    removeTask: PropTypes.func.isRequired,
  };
function Tas({ todo = [], removeTask}) {
  return (
    <div className="todos">
      <ul>
        {todo.map((item) => (
          <li className="list" key={item.id}>
            {item.items}
            <button className="deleteTodo" onClick={() => removeTask(item.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}


export { Tas };