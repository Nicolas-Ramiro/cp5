import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { type News } from "../components/news";
import NewsDetail from "../components/NewsDetail";

export default function NewsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = News.find((n) => n.id === id);

  if (!item)
    return (
      <div className="text-center py-10">
        <p className="text-gray-600 text-lg">Notícia não encontrada.</p>
        <button
          className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={() => navigate(-1)}
        >
          Voltar
        </button>
      </div>
    );

  return (
    <div className="max-w-3xl mx-auto">
      <Link
        to="/"
        className="inline-block mb-4 text-blue-600 hover:underline text-sm"
      >
        ← Voltar para a home
      </Link>
      <NewsDetail item={item} />
    </div>
  );
}