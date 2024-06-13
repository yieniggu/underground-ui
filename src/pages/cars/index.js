import React, { useState, useEffect } from "react";
import Layout from "../../layout/layout";
import ImgCar from '../../assets/images/city-car.png'
import ImgMagic from '../../assets/images/magic.png'
import ImgLTEffect from '../../assets/images/lt_effect.png'
import ImgRBEffect from '../../assets/images/br_effect.png'

import "./cars.scss"
import { WalletConnectButton } from "../../components/button/connect";
import { carsList, traitsList } from "./data";
import { CarItem } from "../../components/item/car";
import { useLocation } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import CarouselControl from "../../components/button/carousel-control";

const CarsPage = () => {
  const location = useLocation()
  const [carId, setCarId] = useState(0)
  const [carImage, setCarImage] = useState(ImgCar);
  const [carName, setCarName] = useState("CITY CAR");
  const [carRarity, setCarRarity] = useState("COMMON");
  const [carAvailable, setCarAvailable] = useState("1500");
  const [carAcceleration, setCarAcceleration] = useState("10");
  const [catWearability, setCarWearAbility] = useState("60");
  const [carDescription, setCarDescription] = useState("The city car is well known for it’s mobility around the city. However,if used properly it can give you great results in underground races");

  useEffect(() => {
    if(location.state !== null && location.state.id !== undefined){
      setCarId(location.state?.id);
      setCarImage(carsList[location.state?.id].img);
      setCarName(carsList[location.state?.id].name);
      setCarRarity(carsList[location.state?.id].rarity);
      setCarAvailable(carsList[location.state?.id].available);
      setCarAcceleration(carsList[location.state?.id].acceleration);
      setCarWearAbility(carsList[location.state?.id].wearability);
      setCarDescription(carsList[location.state?.id].car_description);
    }
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;
    return (
      <div className="absolute left-0 right-0 hidden w-full sm:block">
        <div className="flex justify-between">
          <CarouselControl prev={true} className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
          <CarouselControl onClick={() => next()} />
        </div>
        {/* <ButtonThree onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </ButtonThree> */}
      </div>
    );
  };

  return (<Layout title="cars page">
    <div className="cars-container">
      <div className="header pt-36 md:pt-52 lg:pt-60">
        <div className="relative py-40">
          <p className='absolute top-0 z-50 text-5xl text-center text-white -translate-x-1/2 font-birosic md:text-6xl xl:text-9xl left-1/2'>cars</p>
          <div className="relative z-0 w-10/12 mx-auto sm:w-8/12">
            <img src={ImgLTEffect} alt="effect" className="absolute top-0 left-0 z-0 w-32 effect -translate-y-1/3 -translate-x-1/3 md:w-40 lg:w-52 xl:w-max" />
            <img src={ImgRBEffect} alt="effect" className="absolute bottom-0 right-0 z-0 w-32 translate-x-1/2 effect translate-y-3/4 md:w-40 lg:w-52 xl:w-max" />
            <div className="z-10 flex flex-col gap-8 p-4 bg-app-black-700 rounded-4xl font-inter sm:flex-row">
              <div className="bg-app-black-600 rounded-4xl sm:w-1/2 xl:w-1/3">
                <img src={carImage} alt="car" className="rounded-t-4xl" />
                <div className="flex flex-col gap-4 px-4 py-12 text-white">
                  <p className="text-3xl font-bold">{carName}</p>
                  <p className="flex">Rarity: <p>{carRarity}</p></p>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-8 text-white lg:pl-16 xl:pl-32 sm:w-1/2 xl:w-2/3">
                <p className="text-4xl font-bold">{carName}</p>
                <div className="text-gray-400">
                  <div className="flex gap-1">
                    <p>Rarity: </p>
                    <p className="text-white"> {carRarity}</p>
                  </div>
                  <div className="flex gap-1">
                    <p>Available: </p>
                    <p className="text-white"> {carAvailable}</p>
                  </div>
                  <div className="flex gap-1">
                    <p>Wearability: </p>
                    <p className="text-white"> {catWearability}</p>
                  </div>
                  <div className="flex gap-1">
                    <p>Acceleration: </p>
                    <p className="text-white"> {carAcceleration}</p>
                  </div>
                </div>
                <div>
                  <p className="text-lg font-semibold">Description</p>
                  <p className="text-gray-100 ">{carDescription}</p>
                </div>
                {/* <WalletConnectButton /> */}
              </div>
            </div>
          </div>
          {/* <p className="absolute bottom-0 w-10/12 mx-auto mt-20 text-center text-white -translate-x-1/2 left-1/2">There’s a total of 12 models in gen-0. each having it’s own rarity level, wich Will determine it’s cometitive stats in game. Remi</p> */}
        </div>
        <div className="px-4 mx-auto lg:w-9/12">
          <p className="py-20 text-5xl text-white font-birosic lg:text-6xl">Traits</p>
          <img src={ImgMagic} alt="masic" className="w-12 transform sm:-translate-x-10 sm:w-max " />
          <div className="flex flex-col items-center justify-center gap-32 pb-60">
            <div className="relative w-full sm:px-10">
              <Carousel
                arrows={false} customButtonGroup={<ButtonGroup />}
                responsive={responsive}
                className="gap-4">
                {traitsList.map((car, idx) => (
                  carId === car.id && <CarItem car={car} key={idx*2} /> 
                ))}
              </Carousel>
            </div>
          </div>
          {/* <div className="grid gap-8 pb-10 sm:grid-cols-2 xl:grid-cols-3">
            {carUpList.map((car, idx) => (
              <CarItem car={car} key={idx} onClick={() => { handleNavigate(car.id) }} />
            ))}
          </div> */}
        </div>
      </div>
      <div className="px-4 mx-auto lg:w-9/12">
        <p className="py-20 text-5xl text-white font-birosic lg:text-6xl">Cars</p>
        <div className="relative w-full sm:px-10">
          <Carousel
            arrows={false} customButtonGroup={<ButtonGroup />}
            responsive={responsive}
            className="gap-4">
            {carsList.map((car, idx) => (
              <CarItem car={car} key={idx} carid={car.id} onClick={() => { setCarImage(car.img); setCarId(car.id); setCarName(car.name); setCarRarity(car.rarity); setCarAvailable(car.available); setCarAcceleration(car.acceleration); setCarWearAbility(car.wearability); setCarDescription(car.car_description);}}/>
            ))} 
          </Carousel>
        </div>
        {/* <div className="grid gap-8 pb-10 sm:grid-cols-2 xl:grid-cols-3">
          {carsList.map((car, idx) => (
            <CarItem car={car} key={idx} carid={car.id} onClick={() => { setCarImage(car.img); setCarId(car.id); setCarName(car.name); setCarRarity(car.rarity); setCarAvailable(car.available); setCarAcceleration(car.acceleration); setCarWearAbility(car.wearability); setCarDescription(car.car_description);}}/>
          ))}
        </div> */}
      </div>
    </div>
  </Layout>)
}

export default CarsPage