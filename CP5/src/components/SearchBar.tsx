import React from 'react'

type Props = {
  value: string;
  onChange: (v: string) => void;
}

export default function SearchBar({value, onChange}: Props){
  return (
    <div className="mb-4">
      <input
        aria-label="Pesquisar notícias"
        value={value}
        onChange={(e)=>onChange(e.target.value)}
        placeholder="Filtrar por título, conteúdo ou categoria"
        className="w-full border rounded px-3 py-2"
      />
    </div>
  )
}
