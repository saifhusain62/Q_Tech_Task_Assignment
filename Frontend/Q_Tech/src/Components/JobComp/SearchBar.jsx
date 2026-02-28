import React, { useState } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';

const SearchSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Sample data - replace with your actual data
  const data = [
    { id: 1, title: 'React Development', category: 'Web' },
    { id: 2, title: 'Tailwind CSS Guide', category: 'CSS' },
    { id: 3, title: 'JavaScript Basics', category: 'Programming' },
    { id: 4, title: 'Node.js Tutorial', category: 'Backend' },
    { id: 5, title: 'Python for Beginners', category: 'Programming' },
    { id: 6, title: 'MongoDB Database', category: 'Database' },
    { id: 7, title: 'Next.js Framework', category: 'Web' },
    { id: 8, title: 'TypeScript Advanced', category: 'Programming' },
  ];

  // Search function
  const handleSearch = (e) => {
    e?.preventDefault();
    
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);

    // Simulate search delay (remove in production)
    setTimeout(() => {
      const filtered = data.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filtered);
      setIsSearching(false);
    }, 300);
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
  };

  // Handle input change with live search
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    
    // Optional: Live search as you type
    if (e.target.value.trim()) {
      const filtered = data.filter(
        (item) =>
          item.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
          item.category.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center p-4 py-5">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Search Anything
          </h1>
          <p className="text-gray-400">
            Find what you're looking for instantly
          </p>
        </div>

        {/* Search Box */}
        <form onSubmit={handleSearch} className="relative">
          <div className="flex items-center bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden shadow-2xl hover:border-purple-500/50 transition-all duration-300">
            {/* Search Icon */}
            <div className="pl-5">
              <FiSearch className="text-gray-400 text-xl" />
            </div>

            {/* Input Field */}
            <input
              type="text"
              value={searchQuery}
              onChange={handleInputChange}
              placeholder="Type to search..."
              className="w-full px-4 py-4 bg-transparent text-white placeholder-gray-400 focus:outline-none text-lg"
            />

            {/* Clear Button */}
            {searchQuery && (
              <button
                type="button"
                onClick={clearSearch}
                className="p-2 mr-2 text-gray-400 hover:text-white transition-colors"
              >
                <FiX className="text-xl" />
              </button>
            )}

            {/* Search Button */}
            <button
              type="submit"
              disabled={isSearching}
              className="px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center gap-2 disabled:opacity-50"
            >
              {isSearching ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <FiSearch className="text-lg" />
                  <span className="hidden sm:inline">Search</span>
                </>
              )}
            </button>
          </div>
        </form>

        {/* Search Results */}
        {searchResults.length > 0 && (
          <div className="mt-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 overflow-hidden">
            <div className="p-4 border-b border-white/10">
              <span className="text-gray-400 text-sm">
                Found {searchResults.length} result{searchResults.length > 1 ? 's' : ''}
              </span>
            </div>
            <ul className="divide-y divide-white/10">
              {searchResults.map((item) => (
                <li
                  key={item.id}
                  className="p-4 hover:bg-white/5 cursor-pointer transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-medium">{item.title}</h3>
                      <span className="text-sm text-gray-400">
                        {item.category}
                      </span>
                    </div>
                    <FiSearch className="text-gray-500" />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* No Results */}
        {searchQuery && searchResults.length === 0 && !isSearching && (
          <div className="mt-6 text-center py-8">
            <p className="text-gray-400">No results found for "{searchQuery}"</p>
          </div>
        )}

        {/* Quick Tags */}
        <div className="mt-6 flex flex-wrap gap-2 justify-center">
          {['React', 'JavaScript', 'Web', 'CSS'].map((tag) => (
            <button
              key={tag}
              onClick={() => {
                setSearchQuery(tag);
                const filtered = data.filter(
                  (item) =>
                    item.title.toLowerCase().includes(tag.toLowerCase()) ||
                    item.category.toLowerCase().includes(tag.toLowerCase())
                );
                setSearchResults(filtered);
              }}
              className="px-4 py-2 bg-white/5 text-gray-300 rounded-full text-sm hover:bg-white/10 border border-white/10 hover:border-purple-500/50 transition-all"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SearchSection;