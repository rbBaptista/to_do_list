import { useState } from 'react'
import PropTypes from 'prop-types';

export const TodoForm = ({ addTodo }) => {
    const [text, setText] = useState("");
    const [category, setCategory] = useState("");

    const handlesubmit = (e) => {
        e.preventDefault();
        if (!text || !category) {
            alert('Preencha todos os campos');
            return;
        }
        addTodo(text, category);
        setText('');
        setCategory('');
        console.log(text, category);
    }

    return (
        <div className='todo-form'>
            <h2>Adicionar nova tarefa</h2>
            <form onSubmit={handlesubmit}>
                <input value={text} type='text' placeholder='Digite a tarefa' onChange={(e) => setText(e.target.value)} />
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value=''>Selecione a categoria</option>
                    <option value='Trabalho'>Trabalho</option>
                    <option value='Pessoal'>Pessoal</option>
                    <option value='Estudos'>Estudos</option>
                </select>
                <button type='submit'>Adicionar tarefa</button>
            </form>

        </div>
    )
}

TodoForm.propTypes = {
    addTodo: PropTypes.func.isRequired,
};

export default TodoForm