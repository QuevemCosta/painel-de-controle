import './index.css'

function Search(props){
	return(
		<form className="Search">
			<input type="search" placeholder="Buscar Produto"/>
			<input type="submit" value="Buscar"/> 
		</form>
	)
}

export default Search;