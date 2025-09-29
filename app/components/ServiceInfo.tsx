// components/ServicesDisplay.tsx

import React, { useEffect, useState } from 'react'
import ImageCard from './ImageCard'
import ServiceDescription from './ServiceDescription'
import { motion, useScroll, useTransform } from 'framer-motion';
import { title } from 'process';
import { image } from 'framer-motion/client';


type Props = {
  searchValue: string;
}

const cards = [
  {
    id: '1',
    title: 'Offset / Printing Forms & reciepts',
    frontImg: '/BOOK.png',
    hoverImg: '/largformatimg.webp',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium recusandae, vero vel molestias voluptatem nam et reprehenderit. Vero repellat ipsa voluptatum maxime commodi.',
    features: ['High-quality paper', 'Custom designs', 'Quick turnaround'],
    relatedImages: [
      {src: '/largformatpicture/xbanner.png', label: 'Large xbanner'},
      {src: '/largformatimg.webp', label: 'Large Format'},
      {src: '/largformatpicture/panaflex.png.png', label: 'Large Banner'},
      {src: '/largformatpicture/tarpaulin.png', label: 'Large Banner'},
      {src: '/largformatpicture/pullupbanner.png', label: 'Large Banner'}
      
    ]
  },
  
  {
    id: '2',
    title: 'Corporate Giveaways',
    frontImg: '/BOOK.png',
    hoverImg: '/boxclothing.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium recusandae, vero vel molestias voluptatem nam et reprehenderit. Vero repellat ipsa voluptatum maxime commodi.',
    features: ['Bold designs', 'Brand-focused', 'Customizable options'],
    relatedImages: [
      {src: '/boxclothing/image1.png', label: 'design Tshirt'},
      {src: '/boxclothing/image2.png', label: 'design Tshirt2'},
      {src: '/boxclothing/image3.png', label: 'design Tshirt3'},
      {src: '/boxclothing/image4.png', label: 'design Tshirt4'},
      {src: '/boxclothing/image5.png', label: 'design Tshirt5'},
    ]
  },

  {
    id: '3',
    title: 'Large Format Services',
    frontImg: '/BOOK.png',
    hoverImg: '/brandstickers.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium recusandae, vero vel molestias voluptatem nam et reprehenderit. Vero repellat ipsa voluptatum maxime commodi.',
    features: ['Bold designs', 'Brand-focused', 'Customizable options'],
    relatedImages: [
      {src: '/brandstickers/image1.png', label: 'label stickers1'},
      {src: '/brandstickers/image2.png', label: 'label stickers2'},
      {src: '/brandstickers/image2.png', label: 'label stickers3'},
      {src: '/brandstickers/image2.png', label: 'label stickers4'}
    ]
  },
  {
    id: '4',
    title: 'Sticker & Labels',
    frontImg: '/BOOK.png',
    hoverImg: '/callingcards.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium recusandae, vero vel molestias voluptatem nam et reprehenderit. Vero repellat ipsa voluptatum maxime commodi.',
    features: ['Bold designs', 'Brand-focused', 'Customizable options'],
    relatedImages: [
      {src: '/callingcards/image1.png', label: 'calling cards1'},
      {src: '/callingcards/image2.png', label: 'calling cards2'},
      {src: '/callingcards/image3.png', label: 'calling cards3'},
      {src: '/callingcards/image4.png', label: 'calling cards4'},
      {src: '/callingcards/image4.png', label: 'calling cards5'},
    ]
  },
  {
    id: '5',
    title: 'Signage',
    frontImg: '/BOOK.png',
    hoverImg: '/corporategiveaways.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium recusandae, vero vel molestias voluptatem nam et reprehenderit. Vero repellat ipsa voluptatum maxime commodi.',
    features: ['Bold designs', 'Brand-focused', 'Customizable options'],
    relatedImages: [
      {src: '/giveaways/image1.png', label: 'giveaways design1'},
      {src: '/giveaways/image2.png', label: 'giveaways design2'},
      {src: '/giveaways/image3.png', label: 'giveaways design3'},
      {src: '/giveaways/image4.png', label: 'giveaways design4'},
      {src: '/giveaways/image5.png', label: 'giveaways design5'}
    ]
  },
  {
    id: '6',
    title: 'Marketing Collaterals',
    frontImg: '/BOOK.png',
    hoverImg: '/decalstickers.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium recusandae, vero vel molestias voluptatem nam et reprehenderit. Vero repellat ipsa voluptatum maxime commodi.',
    features: ['Bold designs', 'Brand-focused', 'Customizable options'],
    relatedImages: [
      {src: '/BOOK.png', label: 'sample1'},
      {src: '/BOOK.png', label: 'sample1'},
      {src: '/BOOK.png', label: 'sample1'},
      {src: '/BOOK.png', label: 'sample1'},
      {src: '/BOOK.png', label: 'sample1'}
    ]
  },

  {
    id: '7',
    title: 'Wall Mural',
    frontImg: '/BOOK.png',
    hoverImg: '/cardsinvitation.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium recusandae, vero vel molestias voluptatem nam et reprehenderit. Vero repellat ipsa voluptatum maxime commodi.',
    features: ['Bold designs', 'Brand-focused', 'Customizable options'],
    relatedImages: [
      {src: '/eventcards/image1.png', label: 'event cards1'},
      {src: '/eventcards/image1.png', label: 'event cards2'},
      {src: '/eventcards/image1.png', label: 'event cards3'},
      {src: '/eventcards/image1.png', label: 'event cards4'},
      {src: '/eventcards/image1.png', label: 'event cards5'}
    ]
  },

  {
    id: '8',
    title: 'Glass Frosted Sticker',
    frontImg: '/BOOK.png',
    hoverImg: '/idlanyard.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium recusandae, vero vel molestias voluptatem nam et reprehenderit. Vero repellat ipsa voluptatum maxime commodi.',
    features: ['Bold designs', 'Brand-focused', 'Customizable options'],
    relatedImages: [
      {src: '/idlanyard/image1.png', label: 'idlanyard design1'},
      {src: '/idlanyard/image2.png', label: 'idlanyard design2'},
      {src: '/idlanyard/image3.png', label: 'idlanyard design3'},
      {src: '/idlanyard/image4.png', label: 'idlanyard design4'},
      {src: '/idlanyard/image5.png', label: 'idlanyard design5'}
    ]
  },
  {
    id: '9',
    title: 'Transit Ads',
    frontImg: '/BOOK.png',
    hoverImg: '/marketingcollaterals.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium recusandae, vero vel molestias voluptatem nam et reprehenderit. Vero repellat ipsa voluptatum maxime commodi.',
    features: ['Bold designs', 'Brand-focused', 'Customizable options'],
    relatedImages: [
      {src: '/marketingcoll/image1.png', label: 'collateral sample1'},
      {src: '/marketingcoll/image2.png', label: 'collateral sample2'},
      {src: '/marketingcoll/image3.png', label: 'collateral sample3'},
      {src: '/marketingcoll/image4.png', label: 'collateral sample4'},
      {src: '/marketingcoll/image5.png', label: 'collateral sample5'},
      {src: '/marketingcoll/image6.png', label: 'collateral sample6'}
    ]
  },
  {
    id: '10',
    title: 'Graphic design',
    frontImg: '/BOOK.png',
    hoverImg: '/wallmural.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium recusandae, vero vel molestias voluptatem nam et reprehenderit. Vero repellat ipsa voluptatum maxime commodi.',
    features: ['Bold designs', 'Brand-focused', 'Customizable options'],
    relatedImages: [
      {src: '/wallmural/image1.png', label: 'wallmural sample1'},
      {src: '/wallmural/image2.png', label: 'wallmural sample2'},
      {src: '/wallmural/image3.png', label: 'wallmural sample3'},
      {src: '/wallmural/image4.png', label: 'wallmural sample4'},
      {src: '/wallmural/image5.png', label: 'wallmural sample5'},
    ]
  }
]
const ServicesInfo: React.FC<Props> =  ({searchValue}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null)
  const [selectedDescription, setSelectedDescription] = useState<string | null>(null)
  const [selectedFeatures, setSelectedFeatures] = useState<string[] | null>(null)
  const [selectedRelatedImages, setSelectedRelatedImages] = useState<{ src: string, label: string }[] | null>(null);
  const [hoveredCardTitle, setHoveredCardTitle] = useState<string | null>(null);

  const handleCardClick = (image: string, title: string, description: string, features: string[], relatedImages: {src: string, label: string}[]) => {
    setSelectedImage(image)
    setSelectedTitle(title)
    setSelectedDescription(description)
    setSelectedFeatures(features)
    setSelectedRelatedImages(relatedImages)
  }


  const handleRelatedImageClick = (image: string, label: string) => {
    setSelectedImage(image);
    setSelectedTitle(label);
  }

  const closeModal = () => {
    setSelectedImage(null)
    setSelectedTitle(null)
    setSelectedDescription(null)
    setSelectedFeatures(null)
  }

  

    // filter cards
    const filterCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchValue.toLowerCase())
  )
  return (
    <section id='gallery' className="custom-gallery-bg min-h-screen w-full bg-white px-4 py-20 flex flex-col items-center">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center text-pink mb-12">Services</h1>
      <div className="md:w-4/5 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filterCards.map((card, index) => (
          <motion.div
            key={card.id}
            animate={{x: ["0%", "20%", "60%"]}}
            initial={{opacity: 0, x: -100}}
            whileInView={{opacity: 1, x: 0}}
            transition={{
              duration: 1,
              delay: index * 0.1,
              type: "tween",
              stiffness: 100
            }}
            viewport={{once: false}}
            
          >
          <ImageCard
            key={card.id}
            frontImg={card.frontImg}
            hoverImg={card.hoverImg}
            title={card.title}
            description={card.description}
            features={card.features}
            relatedImages={card.relatedImages || []}
            onClick={(handleCardClick)} 
            isHovered
          />
     </motion.div>
        ))}
        {filterCards.length === 0 && (
          <p className="text-center text-gray-500">No results found for {searchValue}</p>
        )}
      </div>
      {/* Modal */}
      {selectedImage && (
        <div  onClick={closeModal} className="fixed inset-0 z-50 backdrop-blur-md mt-20 bg-white/50 bg-opacity-80 flex items-center justify-center">
          <div onClick={(e) => e.stopPropagation()} className="relative bg-gradient-to-tr scrollbar-hide from-neutral-500 via-neutral-300 to-neutral-300 p-6 rounded-lg scroll-hidden max-w-4xl max-h-[85vh] overflow-auto flex flex-col items-center ">
            <ServiceDescription 
              image={selectedImage ?? image}
              title={selectedTitle ?? title}
              description={selectedDescription ?? ''}
              features={selectedFeatures ?? []}
              relatedImages={selectedRelatedImages ?? []}
              onRelatedImageClick={handleRelatedImageClick}
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default ServicesInfo

