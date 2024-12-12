'use client'

import NextImage from "next/image";
import {Collections, type CollectionModel, type GalleryModel, type ImageModel} from "./images";

// const root = "/portfolio/";
// const img = "/portfolio/img/";

interface ImageProps{
  image: ImageModel;
}
function Img({image}:ImageProps) {
  return (
    <>
      {/* Add click-to-expand-to-full-screen view */}
      <div>
        {image.name}
      </div>
      <NextImage
        className=""
        src={image.fullpath}
        alt={image.alt}
        width={500}
        height={500}
      />
      <div>
        {image.description}
      </div>
    </>
  )
}

interface GalleryProps{
  gallery: GalleryModel;
}
function Gallery({gallery}:GalleryProps){
  const imageFragments = gallery.images.map((image) => {
    return (
      <Img key={image.path} image={image} />
    )
  });
  
  return (
    <>
      <div>
        <div className="text-3xl">{gallery.name}</div>
        <div className="text-lg">{gallery.description}</div>
      </div>
      {/* Present in either a Carousel or Grid here */}
      {imageFragments}
    </>
  )
}

interface CollectionProps{
  collection: CollectionModel;
}
function Collection({collection}:CollectionProps){
  const galleryFragments = collection.galleries.map((gallery) => {
    return (
      <Gallery key={gallery.name} gallery={gallery} />
    )
  });
  return (
    <>
    <div className="text-5xl">{collection.name}</div>
      {galleryFragments}
    </>
  )
}


export default function Home() {

  const collectionFragments = Collections.map((collection) => {
    return (
      <Collection key={collection.name} collection={collection} />
    )
  });


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        {collectionFragments}
        
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
