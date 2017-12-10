import React from 'react';

export const CardContentContainer = ({advert}) =>{

    return(
        <div style={{
            height: "45%",
            width: "100%"
        }}>
            <div className="street-name">{advert.realestateSummary.address.city}</div>
            <div className="card-block">

                <h5 className="card-title" >{advert.title}</h5>
                <div className="street">
                    <span>{advert.realestateSummary.address.postalCode}</span>
                    <span>/</span>
                    <span>{advert.realestateSummary.address.street}</span>
                </div>
                <span className="card-text">{advert.advertisementPrice.baseRent} €</span> &nbsp;
         <span className="card-text">{advert.realestateSummary.numberOfRooms} Zimmer</span>  <span>  | ab </span> <span>{advert.realestateSummary.space.toFixed(2)} m<sup>2</sup></span>

            </div>
        </div>
    )
}