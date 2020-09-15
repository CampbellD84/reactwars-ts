import React, { FC } from 'react'

type Props = CharProps

const Character: FC<Props> = ({ character }) => {
    return(
    <>
        <h2>Name: {character.name}</h2>
        <p><strong>Height: </strong>{character.height}</p>
        <p><strong>Mass: </strong>{character.mass}</p>
        <p><strong>Gender: </strong>{character.gender}</p>
        <p><strong>Birth Year: </strong>{character.birth_year}</p>
    </>
    )
}

export default Character