import React from 'react';

export const CardImage = ({ advert }) => {


    return (
        <div>
            <img
                style={{
                    height: "55%",
                    width: "100%"
                }}
                className="card-img-top"
                src={advert.advertisementAssets[0].advertisementThumbnails.inventory_m.url}
                alt="House photo" />

            <div className="street-name">{advert.realestateSummary.address.city}</div>

        </div>


    )

}