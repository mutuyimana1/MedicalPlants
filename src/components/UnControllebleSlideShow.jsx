import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../assets/images/Clerodendrum myricoides R. Br.(umukuzanyana).jpg';
import ExampleCarouselImage2 from '../assets/images/depositphotos_210464032-stock-photo-close-green-leaves-water-drops.jpg';
import ExampleCarouselImage3 from '../assets/images/Clerodendrum myricoides R. Br.(umukuzanyana).jpg';
import { fetchPlants } from '../redux/slices/plant/plantThunks';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function UnControlebleSlideShow() {
  const { allplants, is_plants_loading } = useSelector((state) => state.plants);
  console.log("allplants", allplants);
  const truncate = (input) =>
    input.length > 170 ? `${input.substring(0, 170)}...` : input;
  return (

    <Carousel>
      {allplants.map((el, i) => 
        <Carousel.Item>
        <div className="bg-white block md:flex justify-between px-10 pt-10 ">
          <div className="w-full md:w-1/2 pb-5">
            <div className="w-[25rem] h-[20rem] m-auto">
              <img src={el?.images[0]?.url} alt="" className="w-full h-full rounded-md" />
            </div>
          </div>
          <div className="w-full md:w-2/3 pt-80 md:pt-10">
            <h1 className="text-4xl font-medium leading-[4rem] text-[#363636] w-full lg:w-1/2 ">
              {el?.title}.
            </h1>
  
            <p className="text-lg font-medium leading-[1.5rem] text-[#363636] py-8 w-2/3">
              {truncate(el?.description)}
            </p>
          </div>
        </div>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      )}
    </Carousel>
  );
}

export default UnControlebleSlideShow;