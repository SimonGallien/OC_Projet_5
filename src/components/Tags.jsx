import React from 'react'

function Tags({ tags }) {
  return (
    <>
      {tags.map((tag, index) => (
        <span className="tag" key={`${index}-${tag}`}>
          {tag}
        </span> // Combinaison de l'index et du tag comme clé
      ))}
    </>
  )
}

export default Tags
