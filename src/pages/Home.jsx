import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

import rose from './../assets/rose.jpeg';
import red from './../assets/red.jpg';
import bouteq from './../assets/tynq.jpg';
import he from './../assets/he.jpg';
import hu from './../assets/hu.png';
import ro from './../assets/rose1.jpg';
import ul from './../assets/ul.png';
import slide from './../assets/slide1.jpg';
import fi from './../assets/fi.png';
import ma from './../assets/ma.jpg';

import white from './../assets/white.jpg';

const Home = () => {
  const navigate = useNavigate();

  // Default images for the slider
  const defaultImages = [ul, slide, fi, ma];

  // State for dynamically uploaded images
  const [sliderImages, setSliderImages] = useState(defaultImages);

  // Handle image upload
  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const uploadedImages = files.map((file) => URL.createObjectURL(file));
    setSliderImages(uploadedImages);
  };

  const technologys = [
    {
      id: 1,
      name: 'Sunlit Bliss',
      image: red,
      desc: 'These vibrant, sun-kissed roses bloom with joy and radiance, a symbol of pure happiness and love that fills the air with warmth and beauty.',
    },
    {
      id: 2,
      name: 'Scarlet Passion',
      image: rose,
      desc: 'A timeless symbol of passion and deep affection, these rich red roses speak the language of love, evoking the fiery emotions that dance within our hearts.',
    },
    {
      id: 3,
      name: 'Crimson Whispers',
      image: bouteq,
      desc: 'Every delicate petal of these red roses tells a story of romance, their vibrant color igniting the flame of love and devotion with every glance.',
    },
    {
      id: 4,
      name: 'Velvet Desire',
      image: he,
      desc: 'Elegance wrapped in a velvet hue, these roses are the epitome of romantic allure, their deep red petals whispering sweet nothings and eternal promises.',
    },
    {
      id: 5,
      name: 'Crimson Embrace',
      image: hu,
      desc: 'A bouquet of crimson dreams, these red roses echo the passionate longing of a heart that beats only for you, forever entwined in a dance of love.',
    },
    {
      id: 6,
      name: 'Ruby Devotion',
      image: ro,
      desc: 'With their rich and intoxicating color, these roses express a love so deep, so profound, that it blooms with timeless beauty in the garden of the heart.',
    },
    {
      id: 7,
      name: 'Lover’s Elegance',
      image: white, // Corrected by importing and using the white image
      desc: 'A perfect blend of elegance and desire, these roses capture the essence of romance, their velvety petals unfurling like whispered secrets between lovers.',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section with Slider */}
      <section className="relative">
        {/* Image Upload */}
        <div className="absolute top-4 right-4 z-20">
          <label
            htmlFor="upload-images"
            className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
          >
            Upload Images
          </label>
          <input
            id="upload-images"
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={handleImageUpload}
          />
        </div>

        <Swiper
  modules={[Autoplay, Pagination, Navigation]}
  spaceBetween={30}
  pagination={{ clickable: true }}
  navigation
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  loop={true}
  className="relative h-[300px] w-full" // Reduced height with relative positioning for overlay
>
  {sliderImages.map((img, index) => (
    <SwiperSlide key={index}>
      <div className="relative h-full w-full">
        {/* Background Image */}
        <img
          src={img}
          alt={`Slide ${index + 1}`}
          className="w-full h-full object-cover" // Ensure full coverage and proper alignment
        />
        {/* Overlay for Title and Quote */}
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Rose Boutique</h1>
          <p className="text-sm md:text-lg italic">
            "Where every petal tells a story of love, elegance, and passion."
          </p>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

      </section>

      {/* Main Content Section */}
      <section className="container mx-auto px-4 py-8 ">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologys.map((tech) => (
            <div
              key={tech.id}
              onClick={() => navigate(`/test/${tech.id}`)} // Navigate to the Test page with the correct id
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 cursor-pointer"
            >
              {/* Image Container */}
              <div className="flex justify-center items-center">
                <img
                  src={tech.image}
                  alt={tech.name}
                  className="h-60 w-56 object-cover mix-blend-multiply"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl text-gray-800">{tech.name}</h3>
                <p className="text-sm text-gray-600 mt-2">{tech.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Boutique of Love. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
