import React, { FC } from 'react'

type Props = CharProps & {
    prevPage: () => {}
    nextPage: () => {}
}

const PaginationBTN: FC<Props> = ({prevPage, nextPage}) => {
    return (
        <>
            <button onClick={prevPage}>Prev</button>
            <button onClick={nextPage}>Next</button>
        </>
    )
}

export default PaginationBTN