import React from 'react';
import type { News } from './news';
import { Link } from 'react-router-dom';

interface NewsCardProps {
  news: News;
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  return (
    <Link to={`/news/${news.id}`} className="block">
      <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
        <img src={news.image} alt={news.title} className="w-full h-40 object-cover mb-2" />
        <h2 className="text-xl font-semibold">{news.title}</h2>
        <p className="text-gray-600 text-sm">{news.date}</p>
        <p className="text-gray-700">{news.content.slice(0, 50)}...</p>
        <div className="flex flex-wrap mt-2">
          {news.categories.map((cat) => (
            <span key={cat} className="bg-gray-200 text-gray-800 px-2 py-1 rounded mr-2 mb-2 text-xs">
              {cat}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
