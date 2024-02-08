import PropTypes from 'prop-types';

const Todo = ({ todo, removeTodo, completeTodo }) => {
    return (
        <div className='todo' style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
            <div className='content'>
                <p>{todo.text}</p>
                <p className='category'>({todo.category})</p>
            </div>
            <div>
                <button className='complete' onClick={() => completeTodo(todo.id)}>Concluir</button>
                <button className='remove' onClick={() => removeTodo(todo.id)}>Excluir</button>
            </div>
        </div>
    );
};

Todo.propTypes = {
    todo: PropTypes.shape({
        text: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
        isCompleted: PropTypes.bool.isRequired,
    }).isRequired,
    removeTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired,
};

export default Todo;