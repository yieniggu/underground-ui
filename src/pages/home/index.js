import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Layout from "../../layout/layout";
import ImgRoadMap from "../../assets/images/roadmap.png";
import ImgRoadVerticalMap from "../../assets/images/roadmap_vertical.png";
import ImgGraffiti from "../../assets/images/graffiti.png";
import ImgCool from "../../assets/images/cool.png";
import ImgCar from "../../assets/images/car.png";
import "./homepage.scss";
import { SectionTitle } from "../../components/label";
import { carUpList, carDownList } from "./data";
import { CarItem } from "../../components/item/car";
import CarouselControl from "../../components/button/carousel-control";
import { useNavigate } from "react-router-dom";
import { contractABI } from "../../contract-abi";
import { useAppContext } from "../../contexts/AppContext";
import { Modal } from "../../modal";
import Web3 from "web3";

const HomePage = (props) => {
  const context = useAppContext();

  const [mintCount, setMintCount] = useState(0);
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");

  const onMintPressed = async () => {
    if (context.walletConnected) {
      if (mintCount > 0) {
        let contractAddress = "0x8dFEabdf183983a9ae706674651c94618e1De62C";

        let web3 = new Web3(context.provider);

        const myContract = new web3.eth.Contract(contractABI, contractAddress);

        const price = await myContract.methods.getCurrentPrice().call();

        myContract.methods
          .mintNFT(mintCount)
          .send({ from: context.walletAddress, value: price * mintCount })
          .on("transactionHash", function (hash) {
            setContent("Transaction succeed. You're now a prekey holder!");
            setMessage("See transaction in snowtrace...\n" + hash);
            setOpen(true);
          });
      } else {
        setMessage("Minting: you can't mint 0 NFTS duuuh");
        setOpen(true);
      }
    } else {
      setMessage("Connect wallet...");
      setOpen(true);
    }
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const navigate = useNavigate();
  const handleNavigate = (id) => {
    console.log(id);
    navigate("/cars", {
      state: {
        id: id,
      },
    });
  };

  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div className="absolute left-0 right-0 hidden w-full sm:block">
        <div className="flex justify-between">
          <CarouselControl
            prev={true}
            className={currentSlide === 0 ? "disable" : ""}
            onClick={() => previous()}
          />
          <CarouselControl onClick={() => next()} />
        </div>
        {/* <ButtonThree onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </ButtonThree> */}
      </div>
    );
  };

  return (
    <Layout>
      <div className="home-container font-inter ">
        <div className="flex justify-center text-white mint-container pt-36 md:pt-52 lg:pt-60">
          <div className="flex flex-col-reverse w-10/12 clear-left lg:flex-row">
            <div className="flex flex-col w-full gap-12 px-4 lg:w-1/2 md:px-8 lg:px-20">
              <div className="flex flex-col">
                <SectionTitle>
                  <p className="flex flex-col text-white sm:flex-row">
                    <p className="flex items-end text-app-purple">
                      <p className="-mb-1 text-6xl xl:text-8xl">U</p>
                      nder
                    </p>
                    <p className="flex items-end text-white">
                      <p className="-mb-1 text-6xl xl:text-8xl">G</p>
                      round
                    </p>
                  </p>
                </SectionTitle>
                <SectionTitle>
                  <p className="flex items-end">
                    <p className="-mb-1 text-6xl xl:text-8xl">R</p>acing
                  </p>
                </SectionTitle>
              </div>
              <p className="text-gray-400">
                Underground racing is a Brand new community driven Racing p2e
                game coming to avalanche where you can run underground races on
                different maps and get rewards on every won race.
              </p>
              {/* <button className="px-4 py-2 mx-auto capitalize rounded-full bg-app-purple w-max">start collection NFT</button> */}
              <div className="grid grid-cols-3 mx-auto lg:w-2/3">
                <p className="text-3xl font-bold">{context.totalBalance}</p>
                <p className="text-3xl font-bold">{context.totalBalance}</p>
                <p className="text-3xl font-bold">10.000</p>
                <p className="text-gray-400">Total Minted</p>
                <p className="text-gray-400">Owners</p>
                <p className="text-gray-400">Supply</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="flex items-center gap-2">
                  <button
                    className="text-3xl"
                    onClick={() =>
                      setMintCount(mintCount > 0 ? mintCount - 1 : 0)
                    }
                  >
                    -
                  </button>
                  <div className="py-1 text-xl text-center rounded-full w-28 bg-app-primary">
                    {mintCount}
                  </div>
                  <button
                    className="text-3xl"
                    onClick={() => setMintCount(mintCount + 1)}
                  >
                    +
                  </button>
                </div>
                <button className="text-xl" onClick={onMintPressed}>
                  MINT
                </button>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <img src={ImgCar} alt="car" />
            </div>
          </div>
        </div>

        {/* models */}
        <div className="flex flex-col text-white bg-black model-container pt-33">
          <div className="flex flex-col items-center justify-center w-full gap-16">
            <div className="mx-auto">
              <SectionTitle className="flex text-center">
                GEN-O <p className="text-app-purple">Cars</p>
              </SectionTitle>
            </div>
            <p className="w-3/4 mx-auto text-xl text-center md:w-2/3 md:text-2xl">
              There’s a total of 12 models in gen-0. each having it’s own rarity
              level, wich Will determine it’s cometitive stats in game. Remind
              that there’s a huge randomness factor in every race and having
              rarest cars won’t assure at all that you win every race, but Will
              increase a lot your chances of winning them.
            </p>
          </div>
          <div className="flex flex-col gap-16 mt-33">
            <p className="text-4xl font-bold text-center font-montserrat">
              The available models in <br />
              <span className="font-birosic">gen-o</span> are:
            </p>
            {/* <p className="w-3/4 mx-auto text-xl text-center md:w-2/3 md:text-2xl">There’s a total of 12 models in gen-0. each having it’s own rarity level, wich Will determine it’s cometitive stats in game. Remind that there’s a huge randomness factor in every race and having rarest cars won’t assure at all that you win every race, but Will increase a lot your chances of winning them.</p> */}
          </div>
          <img
            src={ImgCool}
            alt="cool"
            className="w-32 ml-8 sm:ml-12 lg:ml-32"
          />
          <div className="flex flex-col items-center justify-center gap-32 pb-60">
            <div className="relative w-10/12 sm:px-10">
              <Carousel
                arrows={false}
                customButtonGroup={<ButtonGroup />}
                responsive={responsive}
                className="gap-4"
              >
                {carUpList.map((car, idx) => (
                  <CarItem
                    car={car}
                    key={idx}
                    onClick={() => {
                      handleNavigate(car.id);
                    }}
                  />
                ))}
              </Carousel>
            </div>
            <div className="relative w-10/12 sm:px-10">
              <Carousel
                arrows={false}
                customButtonGroup={<ButtonGroup />}
                responsive={responsive}
                className="gap-4"
              >
                {carDownList.map((car, idx) => (
                  <CarItem
                    car={car}
                    key={car.id}
                    onClick={() => {
                      handleNavigate(car.id);
                    }}
                  />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          content={content}
          message={message}
        />
        {/* roadmap */}
        <div className="flex flex-col items-center pt-8 roadmap-container xl:pb-82 pb:12 md:pb-28 md:pt-28 xl:pt-45">
          <div className="relative">
            <SectionTitle>RoadMap</SectionTitle>
            <img
              src={ImgGraffiti}
              alt="graffiti"
              className="absolute bottom-0 right-0 w-12 transform translate-x-1/2 translate-y-2/3 sm:w-20 md:w-32"
            />
          </div>
          <img
            src={ImgRoadMap}
            alt="roadmap"
            className="hidden w-10/12 mt-20 sm:block"
          />
          <img
            src={ImgRoadVerticalMap}
            alt="vertical roadmap"
            className="mt-12 sm:hidden"
          />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
