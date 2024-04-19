import "./ItemCard.sass"


export const ItemCard = ({ ...item }) => {

    return (
        <div className="card">

            <img className="card__img" src={item.image} />
            <div className="card__desc">
                <p className="card__title">{item.name}</p>
                <div className="card__text-box">
                    {item.status === 'Alive' ? <span className="card__bubble alive"></span> :
                        item.status === 'Dead' ? <span className="card__bubble dead"></span> :
                            item.status === 'unknown' ? <span className="card__bubble unknown"></span> : <span></span>}
                    <p>{item.status} - {item.species} - {item.gender}</p>

                </div>

                <div className="card__location-box">
                    <p className="card__text-title">Last known location:</p>
                    <p className="card__text-desc">{item.location.name}</p>
                </div>

                <div className="card__location-box">
                    <p className="card__text-title">First seen in:</p>
                    <p className="card__text-desc">{item.origin.name}</p>
                </div>

                
            </div>
        </div>
    )
}

