import React, { useState, useEffect, useRef } from 'react';
import { GOOGLE_MAPS_API_KEY } from './utils/constants';

const AddressInput = () => {
    const [address, setAddress] = useState("");
    const [latLng, setLatLng] = useState(null);
    const autocompleteInputRef = useRef(null);

    useEffect(() => {
        // Initialize Google Maps Autocomplete
        const autocomplete = new window.google.maps.places.Autocomplete(
            autocompleteInputRef.current
        );

        // Add listener to get selected place when user selects an address
        autocomplete.addListener("place_changed", () => {
            const selectedPlace = autocomplete.getPlace();

            if (selectedPlace.geometry) {
                setAddress(selectedPlace.formatted_address);
                setLatLng(selectedPlace.geometry.location.toJSON());
            }
        });

        return () => {
            // Remove listener on cleanup to avoid memory leaks
            window.google.maps.event.clearInstanceListeners(autocompleteInputRef.current);
        };
    }, []);

    return (
        <div>
            <input
                ref={autocompleteInputRef}
                type="text"
                value={address}
                placeholder="Enter Delivery Address"
                onChange={(e) => setAddress(e.target.value)}
            />
            
            {latLng && 
                <iframe 
                    width="600" 
                    height="450" 
                    style={{border:0}} 
                    loading="lazy" 
                    allowFullScreen 
                    src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${latLng.lat},${latLng.lng}`}>
                </iframe>}
        </div>
    );
}

export default AddressInput;
