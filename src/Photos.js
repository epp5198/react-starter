import React, { useState } from 'react';

const PhotoAlbum = () => {
    const [photos, setPhotos] = useState([
       //get assets folder to work and add photo folder here
    ]);

    return (
        <div>
            <h1>My Photo Album</h1>
            <div className="assets">
                {photos.map((photo, index) => (
                    <img key={index} src={photo} alt={`photo-${index}`} className="photo" />
                ))}
            </div>
        </div>
    );
};

export default PhotoAlbum;
