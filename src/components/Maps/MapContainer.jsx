import React, { ReactElement } from 'react'
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { Map } from './Map'
export default function MapContainer() {
    const center = { lat: -34.397, lng: 150.644 };
    const zoom = 4;

     const render = (status) => {
        if (status === Status.LOADING) return <h3>{status} ..</h3>;
        if (status === Status.FAILURE) return <h3>{status} ...</h3>;
        return null;
    };


    return (
        <Wrapper apiKey="AIzaSyCk-YLITWeIR4PDW1WV5rVuLrd3yJNc_bo" render={render}>
            <Map center={center} zoom={zoom} />
        </Wrapper>
    )
}
