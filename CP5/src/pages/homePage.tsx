import React, { useState } from 'react';
import { news } from '../components/services/newData';
import NewsCard from '../components/NewsCard';
import Footer from '../components/footer';

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredNews = news.filter((item) => {
    const lowerTerm = searchTerm.toLowerCase();
    return (
      item.title.toLowerCase().includes(lowerTerm) ||
      item.content.toLowerCase().includes(lowerTerm) ||
      item.categories.some((cat) => cat.toLowerCase().includes(lowerTerm))
    );
  });

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Welcome to News Portal</h2>
      <input
        type="text"
        placeholder="Search news..."
        className="w-full p-2 mb-4 border rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {filteredNews.length === 0 ? (
        <p className="text-center text-gray-600">No articles found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredNews.map((item) => (
            <NewsCard key={item.id} news={item} />
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
};
export default Home;
