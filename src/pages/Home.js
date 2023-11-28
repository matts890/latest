import SearchBar from "../SearchBar";
import Cards from '../Components/Cards';

export default function Home(){
    const handleSearch = (searchTerm) => {
        // Perform your search logic here, for example, fetch data from an API
        // Update searchResults state with the search results
        // setSearchResults(searchResultsData);
        console.log(`Searching for: ${searchTerm}`);
      };
     
      return (
        <div>

          
          <body className='body_s'>
          <h1 className='Text'>
          Fresh Choices, Vibrant Living.
          </h1>
          <SearchBar onSearch={handleSearch} />
          {/* Display search results */}
          </body>
          <div>
          <Cards/>
          </div>

          
          
      
        </div>
      );
}