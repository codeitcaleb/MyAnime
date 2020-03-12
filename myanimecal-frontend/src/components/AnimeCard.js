import React from 'react'
import { Link } from 'react-router-dom'
const AnimeCard = ({anime}) => {
  return (
    <div>
      <li>
        <img src={anime.image_url} alt={`${anime.title}`} />
        <h3>
          <Link
            to={{
              pathname: `/anime/${anime.mal_id}`,
              state: {
                anime
              }
            }}
          >
            {anime.title}
          </Link>
        </h3>
        <p>{anime.synopsis}</p>
      </li>
    </div>
  );
}

export default AnimeCard