import React from 'react'
import type { News } from '../types'
import NewsCard from './NewsCard'

export default function NewsList({items}:{items: News[]}){
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map(i=> <NewsCard key={i.id} item={i} />)}
    </div>
  )
}