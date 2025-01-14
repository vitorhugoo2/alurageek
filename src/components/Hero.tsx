import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const carouselItems = [
  {
    image: "https://cdn.awsli.com.br/2492/2492857/arquivos/banner_spiderman_marvel_playstation_loja_super_geek.jpg?auto=format&fit=crop&q=80&w=2000",
    title: "Coleção Marvel",
    description: "Action figures exclusivas dos seus heróis favoritos",
    price: "A partir de R$ 199,90",
    cta: "Comprar Agora"
  },
  {
    image: "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?auto=format&fit=crop&q=80&w=2000",
    title: "Star Wars em Destaque",
    description: "Toda linha Star Wars com até 40% OFF",
    price: "Colecionáveis a partir de R$ 299,90",
    cta: "Ver Ofertas"
  },
  {
    image: "https://repositorio.sbrauble.com/arquivos/up/ecom/home/g/6718842d0269c-7c9mt-5mrno-12960864036718842d026e3.png?auto=format&fit=crop&q=80&w=2000",
    title: "Mundo Pokémon",
    description: "Os melhores produtos para treinadores",
    price: "Cards raros a partir de R$ 49,90",
    cta: "Explorar"
  }
];

const Hero = () => {
  return (
    <div className="relative bg-gray-900">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-[600px]"
      >
        {carouselItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
                  {item.title}
                </h1>
                <p className="text-xl text-white mb-2">
                  {item.description}
                </p>
                <p className="text-2xl text-yellow-400 font-bold mb-8">
                  {item.price}
                </p>
                <div>
                  <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors">
                    {item.cta}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;