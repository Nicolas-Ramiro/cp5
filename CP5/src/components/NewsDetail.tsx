import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { news } from '../components/services/newData';
import Comments from '../components/Comments';

const NewsDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const newsItem = news.find((item) => item.id === Number(id));

  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    // Simulate loading after initial render
    setTimeout(() => {
      setShowComments(true);
    }, 500);
  }, []);

  if (!newsItem) {
    return <p className="text-center text-gray-600">Article not found.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <Link to="/" className="text-blue-500 hover:underline mb-4 block">
        &lt; Back to Home
      </Link>
      <img src={newsItem.image} alt={newsItem.title} className="w-full h-64 object-cover mb-4" />
      <h1 className="text-3xl font-bold mb-2">{newsItem.title}</h1>
      <p className="text-gray-600 mb-4">{newsItem.date}</p>
      <p className="text-gray-800">{newsItem.content}</p>
      <div className="flex flex-wrap mt-4">
        {newsItem.categories.map((cat) => (
          <span key={cat} className="bg-gray-200 text-gray-800 px-2 py-1 rounded mr-2 mb-2">
            {cat}
          </span>
        ))}
      </div>
      {showComments && <Comments comments={newsItem.comments} />}
    </div>
  );
};

export default NewsDetail;
