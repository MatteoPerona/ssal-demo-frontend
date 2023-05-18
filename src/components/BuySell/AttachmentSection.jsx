import React, { useState } from 'react';

const AttachmentSection = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <div>
        {image && (
          <div>
            <p style={{ fontWeight: "bold" }}>Uploaded Image</p>
            <img src={image} alt="Uploaded" style={{ width: "400px", height: "600px" }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default AttachmentSection;