import PropTypes from 'prop-types';

const Search = ({ search, setSearch }) => {
    return (
        <div className="search">
            <h2>Buscar tarefa</h2>
            <input value={search} type='text' placeholder='Digite a tarefa' onChange={(e) => setSearch(e.target.value)} />
        </div>
    )
}

Search.propTypes = {
    search: PropTypes.string.isRequired,
    setSearch: PropTypes.func.isRequired,
};

export default Search

