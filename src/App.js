import { useState } from "react";
import ImageGrid from "./components/ImageGrid/ImageGrid";
import Modal from "./components/Modal/Modal";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="App" style={{ position: "relative", overflow: "hidden" }}>
      <h1>Slider Component</h1>
      <ImageGrid setSelectedImage={setSelectedImage} />
      {selectedImage && (
        <Modal
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
      )}
    </div>
  );
}

export default App;
