import "./Portofolio.css";
import { useState, useEffect } from "react";

// Import images from multiple folders
const coverImages = import.meta.glob("../../assets/covers/*.{jpg,png}");
const beautyImages = import.meta.glob("../../assets/beauty/*.jpg");
const fashionImages = import.meta.glob("../../assets/fashion/*.jpg");
const commercialImages = import.meta.glob(
  "../../assets/commercial/*.{jpg,jpeg}"
);

// Categories and their associated image sources
const imageCategories = {
  covers: coverImages,
  beauty: beautyImages,
  fashion: fashionImages,
  commercial: commercialImages,
};

export const Portofolio = () => {
  const [category, setCategory] = useState("covers"); // Default to covers
  const [imageList, setImageList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showImages, setShowImages] = useState(false);

  useEffect(() => {
    const preloadImages = async () => {
      for (const category in imageCategories) {
        const images = imageCategories[category];
        await Promise.all(
          Object.keys(images).map(async (key) => {
            const module = await images[key]();
            const img = new Image();
            img.src = module.default; // Preload the image
          })
        );
      }
    };

    preloadImages(); // Preload all images on mount
  }, []);

  useEffect(() => {
    const loadImages = async () => {
      setLoading(true);
      setShowImages(false);
      const selectedImages = imageCategories[category]; // Load images based on the selected category
      const imageArray = await Promise.all(
        Object.keys(selectedImages).map(async (key) => {
          const module = await selectedImages[key]();
          return {
            src: module.default,
            alt: key
              .split("/")
              .pop()
              .replace(/\.(jpg|png|jpeg)$/, ""),
          };
        })
      );
      setImageList(imageArray);
      setTimeout(() => {
        setLoading(false);
        setTimeout(() => setShowImages(true), 100);
      }, 3000);
    };

    loadImages();
  }, [category]);

  return (
    <section id="portofolio" className="portofolio">
      <div className="category-menu">
        <button onClick={() => setCategory("covers")}>Covers</button>
        <button onClick={() => setCategory("beauty")}>Beauty</button>
        <button onClick={() => setCategory("fashion")}>Fashion</button>
        <button onClick={() => setCategory("commercial")}>Commercial</button>
      </div>

      {loading && (
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
      )}

      {!loading && (
        <div className={`portofolio-gallery ${showImages ? "slide-in" : ""}`}>
          {imageList.map((image, index) => (
            <img key={index} src={image.src} alt={image.alt} loading="eager" />
          ))}
        </div>
      )}
    </section>
  );
};
