export const CarouselItem = ({ imgSrc }:{imgSrc:any}) => {
  return (
    <div className="flex justify-center items-center">
      <img src={imgSrc} alt="Carousel Slide" className="w-full rounded-lg h-80" />
    </div>
  );
};
