import React from 'react';
import { CardImage } from './CardImage';
import { CardContentContainer } from './CardContentContainer';




export const AdvertisementCard = ({ advert }) => {


    return (
        <div className="card">

            <CardImage advert={advert}></CardImage>
            <CardContentContainer advert={advert}></CardContentContainer>
           
        </div>
    );
}