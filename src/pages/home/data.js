// import ImgCar from "../../assets/images/car_police.png"
import CityCar from "../../assets/images/city-car.png";
import ClassicCar from "../../assets/images/classic.png";
import ConvertibleCar from "../../assets/images/convertible.png";
import HatchbackCar from "../../assets/images/hatchback.png";
import JeepCar from "../../assets/images/jeep.png";
import PickupCar from "../../assets/images/pickup.png";
import PoliceCar from "../../assets/images/police.png";
import RetroCar from "../../assets/images/retro.png";
import SedanCar from "../../assets/images/sedan.png";
import SportCar from "../../assets/images/sport.png";
import SportBackCar from "../../assets/images/sport-back.png";
import SuvCar from "../../assets/images/suv.png";
import TaxiCar from "../../assets/images/taxi.png";

export const carUpList = [
  {
    id:0,
    img:CityCar,
    name:"CITY CAR",
    rarity:"COMMON",
    rarity_level:"1",
    available: "1500",
    car_description: "The city car is well known for it’s mobility around the city. However,if used properly it can give you great results in underground races",
    acceleration: "10",
    wearability: "60"
  },
  {
    id:1,
    img:SedanCar,
    name:"SEDAN",
    rarity:"COMMON",
    rarity_level:"1",
    available: "1500",
    car_description: "The sedan is great for using in short and long distances on paved roads. It can reach great velocities and maintain a decent balance on races",
    acceleration: "12",
    wearability: "70"
  },
  {
    id:2,
    img:HatchbackCar,
    name:"HATCHBACK",
    rarity:"COMMON",
    rarity_level:"1",
    available: "1500",
    car_description: "Hatchbacks have lots of utility as they are a nice combination between sedan and suvs. With a nice styling and great comfort represent a Good option for a quick race",
    acceleration: "14",
    wearability: "65"
  },
  {
    id:3,
    img:JeepCar,
    name:"JEEP",
    rarity:"UNCOMMON",
    rarity_level:"2",
    available: "800",
    car_description: "The jeep is a versatile machine that can be used accross multiple roads and scenarios. However it’s lack of maniobrability can cause some pain to it’s driver on a city race",
    acceleration: "12",
    wearability: "80"
  },
  {
    id:4,
    img:PickupCar,
    name:"PICKUP",
    rarity: "UNCOMMON",
    rarity_level:"2",
    available: "1100",
    car_description: "The pickup truck is the perfect combination between power and mobility. Can be well used over cities and roads",
    acceleration: "13",
    wearability: "75"
  },
  {
    id:5,
    img:SuvCar,
    name:"SUV",
    rarity: "UNCOMMON",
    rarity_level:"2",
    available: "1100",
    car_description: "Suvs are an elegant and sophisticated yet useful option for a car, with huge spacing, drivers get an assured comfort. Despite is size, it’s still a pretty decent option to consider for racing",
    acceleration: "14",
    wearability: "75"
  },
]

export const carDownList = [
  {
    id:6,
    img:PoliceCar,
    name:"POLICE CAR",
    rarity: "RARE",
    rarity_level:"3",
    available: "500",
    car_description: "Police cars are very well equiped to face a race on the city and the ground. However, be careful if you choose to race on this machine, you could lose it all",
    acceleration: "17",
    wearability: "80"
  },
  {
    id:7,
    img:ConvertibleCar,
    name:"CONVERTIBLE",
    rarity:"RARE",
    rarity_level:"3",
    available: "600",
    car_description: "The convertible model is a luxury car best suited for beach and wind lovers. Don’t hesitate on taking some pretty girls on the road and get all the looks in every race you take",
    acceleration: "16",
    wearability: "70"
  },
  {
    id:8,
    img:TaxiCar,
    name:"TAXI CAR",
    rarity:"RARE",
    rarity_level:"3",
    available: "500",
    car_description: "Taxis are a huge utility model in underground. run races, take publicity and complete Passenger trips to get extra rewards on every race",
    acceleration: "15",
    wearability: "75"
  },
  {
    id:9,
    img:SportCar,
    name:"SPORT",
    rarity:"EPIC",
    rarity_level:"4",
    available: "300",
    car_description: "The sport car is one of the fastest cars available. Combine best of the line fashion style, maniobrability and high speed to get the most out of every race",
    acceleration: "22",
    wearability: "85"
  },
  {
    id:10,
    img:ClassicCar,
    name:"CLASSIC",
    rarity:"EPIC",
    rarity_level:"4",
    available: "300",
    car_description: "The old classic from 80’s to 90’s can’t be left out in this collection. It’s a combination between power and old fashioned style that will make you feel like the old days",
    acceleration: "20",
    wearability: "90"
  },
  {
    id:11,
    img:RetroCar,
    name:"RETRO",
    rarity: "EPIC",
    rarity_level:"4",
    available: "300",
    car_description: "We all love retro, so why not include a version of the father of many cars. Huge wearability and a decent power speed make this car is a must have in your collection",
    acceleration: "18",
    wearability: "100"
  },
]