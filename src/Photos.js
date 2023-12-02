import React, { useState } from 'react';

const PhotoAlbum = () => {
    const [photos, setPhotos] = useState([
        'photo1.jpg',
        'photo2.jpg',
        'photo3.jpg',
        // Add more photo URLs as needed
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
