import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import rose from './../assets/rose.jpeg';
import red from './../assets/red.jpg';
import bouteq from './../assets/tynq.jpg';
import he from './../assets/he.jpg';
import hu from './../assets/hu.png';
import ro from './../assets/rose1.jpg';
import white from './../assets/white.jpg';
import ul from './../assets/ul.png';
import slide from './../assets/slide1.jpg';
import fi from './../assets/fi.png';
import ma from './../assets/ma.jpg';

const Test = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const roses = [
    {
      id: 1,
      name: 'Sunlit Bliss',
      image: red,
      additionalImages: [he, hu, white, ul],
      desc: 'These vibrant, sun-kissed roses bloom with joy and radiance, a symbol of pure happiness and love...',
      features: [
        'Bright and cheerful blooms perfect for uplifting any space.',
        'Symbolizes happiness, friendship, and love.',
        'Ideal for birthdays, congratulations, or “just because” moments.',
        'Long-lasting freshness with a delightful fragrance.',
      ],
      care: 'Water regularly, ensuring the soil remains moist but not soaked. Keep in a sunny spot to enjoy the vibrant blooms.',
    }, {
      id: 2,
      name: 'Scarlet Passion',
      image: rose,
      additionalImages: [bouteq, fi, ma, slide],
      desc: 'Scarlet Passion roses embody the fiery essence of deep affection and timeless love...',
      features: [
        'Rich crimson hues that evoke intense emotions.',
        'Perfect for expressing passion and admiration.',
        'Handpicked for their flawless beauty and deep color.',
        'Adds an elegant touch to romantic evenings or special celebrations.',
      ],
      care: 'Place in a well-lit area and ensure that the roses are watered consistently to maintain their deep red hue.',
    },
    {
      id: 3,
      name: 'Crimson Whispers',
      image: bouteq,
      additionalImages: [ro, ul, white, hu],
      desc: 'Each petal of Crimson Whispers carries the story of love and romance...',
      features: [
        'Elegant roses with a story to tell in every bloom.',
        'Symbolizes tender love and heartfelt devotion.',
        'Perfect for anniversaries or meaningful gifts.',
        'Creates an aura of romance wherever they are displayed.',
      ],
      care: 'Crimson Whispers prefer slightly cooler temperatures and indirect sunlight. Be careful not to overwater them.',
    },
    {
      id: 4,
      name: 'Velvet Desire',
      image: he,
      additionalImages: [fi, ma, slide, red],
      desc: 'Elegance wrapped in a velvet hue, these roses are the epitome of romantic allure...',
      features: [
        'Deep velvet petals exuding elegance.',
        'Perfect for formal events or romantic surprises.',
        'Known for their rich, captivating fragrance.',
        'Symbolizes deep respect and heartfelt emotions.',
      ],
      care: 'Keep in indirect sunlight and water sparingly. Avoid exposing the roses to extreme temperatures.',
    },
    {
      id: 5,
      name: 'Crimson Embrace',
      image: hu,
      additionalImages: [bouteq, he, white, ro],
      desc: 'A bouquet of crimson dreams, these red roses echo the passionate longing of a heart...',
      features: [
        'Striking crimson hues perfect for grand gestures.',
        'Symbolizes eternal love and admiration.',
        'Long stems make them ideal for elaborate bouquets.',
        'Adds sophistication to any occasion.',
      ],
      care: 'Store in cool environments and trim stems regularly to maintain freshness.',
    },
    {
      id: 6,
      name: 'Ruby Devotion',
      image: ro,
      additionalImages: [slide, ul, white, red],
      desc: 'With their rich and intoxicating color, these roses express a love so deep...',
      features: [
        'Perfect for expressing loyalty and devotion.',
        'Known for their radiant ruby tones.',
        'Great for anniversaries or deep personal connections.',
        'Blooms stay fresh and vibrant longer.',
      ],
      care: 'Keep in a well-ventilated area and water sparingly to prevent wilting.',
    },
    {
      id: 7,
      name: 'Lover’s Elegance',
      image: white,
      additionalImages: [ma, fi, red, hu],
      desc: 'A perfect blend of elegance and desire, these roses capture the essence of romance...',
      features: [
        'Sophisticated white roses symbolizing purity.',
        'Perfect for weddings or elegant events.',
        'Compliments any décor with its neutral beauty.',
        'Freshly handpicked for their flawless appearance.',
      ],
      care: 'Keep in filtered sunlight and mist occasionally to prevent drying.',
    },
  ];
  

  const roseItem = roses.find((item) => item.id === parseInt(id));

  const handleOrderClick = () => {
    if (roseItem) {
      navigate('/order', { state: { roseName: roseItem.name } });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-200 via-white to-red-100 py-8 px-4">
      {roseItem ? (
        <>
          {/* Hero Section */}
          <header className="text-center mb-12">
            <h1 className="text-6xl font-extrabold text-gray-800 mb-4">{roseItem.name}</h1>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">{roseItem.desc}</p>
          </header>

          {/* Images Section */}
          <section className="mb-16">
            <div className="flex flex-col items-center md:flex-row md:justify-center gap-8">
              {/* Main Image */}
              <div className="w-full md:w-1/2 lg:w-1/3">
                <img
                  src={roseItem.image}
                  alt={roseItem.name}
                  className="w-full h-96 object-cover rounded-lg shadow-lg border-2 border-pink-200"
                />
              </div>

              {/* Additional Images */}
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {roseItem.additionalImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${roseItem.name} ${index + 1}`}
                    className="w-36 h-36 object-cover rounded-lg shadow-lg border border-gray-200"
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16 px-4 md:px-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">
              Why Choose {roseItem.name}?
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-4 text-lg max-w-3xl mx-auto">
              {roseItem.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>

          {/* Care Instructions */}
          <section className="bg-rose-50 py-12 px-6 md:px-16 rounded-lg shadow-lg border border-rose-200">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Care Instructions</h2>
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">{roseItem.care}</p>
          </section>

          {/* Call-to-Action */}
          <footer className="text-center mt-12">
            <button
              onClick={handleOrderClick}
              className="bg-pink-500 text-white py-4 px-8 rounded-full font-semibold text-lg shadow-md hover:bg-pink-600 transition duration-300"
            >
              Order {roseItem.name} Now
            </button>
          </footer>
        </>
      ) : (
        <p className="text-3xl text-red-500 text-center mt-20">
          Oops! The rose you're looking for isn't available.
        </p>
      )}
    </div>
  );
};

export default Test;
