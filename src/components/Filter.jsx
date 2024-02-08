import PropTypes from 'prop-types'

const Filter = ({ filter, setFilter, setSort }) => {
    return (
        <div className="filter">
            <h2>Filtrar por status</h2>
            <div className="filter-options">
                <div>
                    <p>Status</p>
                    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value='All'>Todos</option>
                        <option value='Completed'>Concluído</option>
                        <option value='Incompleted'>Pendente</option>
                    </select>
                </div>
                <p>Ordem alfabetica</p>
                <button onClick={() => setSort("A-Z")}>A-Z</button>
                <button onClick={() => setSort("Z-A")}>Z-A</button>
            </div>
        </div>
    )
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired,
    setSort: PropTypes.func.isRequired,
};

export default Filter