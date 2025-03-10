import React, { useState } from 'react';
import '../css/Search.css'; // For styling

function Search() {
  // State for form inputs
  const [formData, setFormData] = useState({
    bedrooms: '',
    bathrooms: '',
    priceLow: '',
    priceHigh: '',
  });
  // State for search results
  const [results, setResults] = useState([]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Placeholder API call
    try {
      const response = await fetch('https://realestate.com/api.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setResults(data); // Update results with API response
    } catch (error) {
      console.error('Error fetching listings:', error);
      // For now, use dummy data if API fails
      setResults([
        { id: 1, title: 'Cozy Cottage', bedrooms: 2, bathrooms: 1, price: 250000 },
        { id: 2, title: 'Modern Condo', bedrooms: 3, bathrooms: 2, price: 350000 },
      ]);
    }
  };

  return (
    <div className="search">
      <h1>Search Listings</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="bedrooms">Bedrooms</label>
          <input
            type="number"
            id="bedrooms"
            name="bedrooms"
            value={formData.bedrooms}
            onChange={handleChange}
            placeholder="e.g., 2"
            min="0"
          />
        </div>
        <div className="form-group">
          <label htmlFor="bathrooms">Bathrooms</label>
          <input
            type="number"
            id="bathrooms"
            name="bathrooms"
            value={formData.bathrooms}
            onChange={handleChange}
            placeholder="e.g., 1"
            min="0"
          />
        </div>
        <div className="form-group">
          <label htmlFor="priceLow">Price Low ($)</label>
          <input
            type="number"
            id="priceLow"
            name="priceLow"
            value={formData.priceLow}
            onChange={handleChange}
            placeholder="e.g., 200000"
            min="0"
          />
        </div>
        <div className="form-group">
          <label htmlFor="priceHigh">Price High ($)</label>
          <input
            type="number"
            id="priceHigh"
            name="priceHigh"
            value={formData.priceHigh}
            onChange={handleChange}
            placeholder="e.g., 500000"
            min="0"
          />
        </div>
        <button type="submit" className="search-button">Search</button>
      </form>

      {/* Results Section */}
      <div className="search-results">
        <h2>Results</h2>
        {results.length === 0 ? (
          <p>No results yet. Enter your search criteria above.</p>
        ) : (
          <div className="results-grid">
            {results.map((listing) => (
              <div key={listing.id} className="listing-card">
                <div className="listing-image"></div>
                <h3>{listing.title}</h3>
                <p>{listing.bedrooms} Beds | {listing.bathrooms} Baths</p>
                <p>${listing.price.toLocaleString()}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;