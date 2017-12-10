import React from 'react';
import { AdvertisementCard } from './AdvertisementCard';

export const AdvertisementsList = ({ advertsList }) => {
    return (
        <div className="row row-pad">
            {advertsList.map(function (advert, index) {
                return (
                    <div className="col-4" key={index}>
                        <AdvertisementCard advert={advert}></AdvertisementCard>
                    </div>
                )
            })}
        </div>
    );
}