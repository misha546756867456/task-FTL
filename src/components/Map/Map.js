import React from "react";
import GoogleMapReact from 'google-map-react';

export default function SimpleMap() {
    const defaultProps = {
        center: {
            lat: 50.450001,
            lng: 30.523333
        },
        zoom: 11
    };

    return (
        <div>
            <div style={{height: '507px', width: '100%'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{key: ""}}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                </GoogleMapReact>
            </div>
        </div>
    );
}