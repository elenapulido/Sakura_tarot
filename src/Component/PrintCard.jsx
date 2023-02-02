import React from 'react'

function PrintCard({buttOn, selectCard}) {
    return (
        <div >
            {
                buttOn ?
                    <>
                        <img className="pastCard" key={selectCard.id} id={selectCard.id} src={selectCard.sakuraCard} alt={selectCard.englishName}>
                        </img>
                    </>
                    :
                    <>
                    </>
            }
        </div>
    )
}

export default PrintCard


