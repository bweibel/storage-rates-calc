import React, { useState, useEffect, useRef } from 'react';
import { GOOGLE_MAPS_API_KEY } from './utils/constants';
import './AddressInput.css';


const AddressInput = ({ setDeliveryAddress, setDeliveryLatLng }) => {
    const [address, setAddress] = useState("");
    const [latLng, setLatLng] = useState(null);
    const autocompleteInputRef = useRef(null);

    useEffect(() => {
        const autocomplete = new window.google.maps.places.Autocomplete(autocompleteInputRef.current);

        autocomplete.addListener("place_changed", () => {
            const selectedPlace = autocomplete.getPlace();

            if (selectedPlace.geometry) {
                const selectedAddress = selectedPlace.formatted_address;
                const selectedLatLng = selectedPlace.geometry.location.toJSON();
                
                // set local state
                setAddress(selectedAddress);
                setLatLng(selectedLatLng);
                
                // set parent state
                setDeliveryAddress(selectedAddress);
                setDeliveryLatLng(selectedLatLng);
            }
        });

        return () => {
            // Remove listener on cleanup to avoid memory leaks
            window.google.maps.event.clearInstanceListeners(autocompleteInputRef.current);
        };
    }, [setDeliveryAddress, setDeliveryLatLng]);

    return (
        <div className="address-input has-shadow ">
            <h3>Please provide your delivery address:</h3>
            <input
                ref={autocompleteInputRef}
                type="text"
                value={address}
                placeholder="Enter Delivery Address"
                onChange={(e) => setAddress(e.target.value)}
            />
            
            <div className="map">
            {latLng && 
                <iframe 
                    width="100%" 
                    height="450" 
                    style={{border:0}} 
                    loading="lazy" 
                    allowFullScreen 
                    src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${latLng.lat},${latLng.lng}`}>
                </iframe>}
            </div>
        </div>
    );
}

export default AddressInput;
