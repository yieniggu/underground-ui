import React from "react";
import Logo from "../../assets/images/logo.png"

const Footer = () => {
  return (
    <div className="bg-app-black w-full">
      <div className="md:flex-row flex-col flex px-4 md:divide-x-2 divide-gray-800 py-20 xl:py-33 gap-8 md:gap-0">
        <div className="flex items-center justify-center flex-col md:w-1/2">
          <div className="flex flex-col gap-4 w-full sm:w-1/2 justify-center items-center">
            <img src={Logo} alt="bottom logo" className="hidden sm:block" />
            <p className="text-white text-xl">Underground 2022</p>
            {/* <button className="rounded-full px-4 py-2 border-2 border-app-primary w-max text-app-primary">
              ConnectWallet
            </button> */}
          </div>
        </div>

        <div className=" text-white md:justify-center text-xs md:pl-32 flex xl:pl-45 md:w-1/2 w-full gap-4">
          <img src={Logo} alt="bottom logo" className="sm:hidden w-36 h-36 m-auto" />
          <div className="flex gap-4 flex-col sm:flex-row  md:flex-col w-full justify-around px-8">
            <div >
              {/* <p className="font-bold mb-2 text-sm">Info</p>
              <p>123-456-7890</p>
              <p>contact@welcome.com</p> */}
            </div>
            <div>
              {/* <p className="font-bold mb-2 text-sm">Address</p>
              <p>Underground 2022</p> */}
            </div>
            <div>
              <p className="font-bold mb-2 text-sm">Follow</p>
              {/* <p><a href="">Linkedin</a></p>
              <p><a href="">Facebook</a></p>
              <p><a href="">Instagram</a></p> */}
              <p><a href="https://twitter.com/Und3rgroundGG/">Twitter</a></p>
              <p><a href="https://underground-games.medium.com/">Medium</a></p>
              <p><a href="https://discord.gg/zxWAWXshpX/">Discord</a></p>
              <p><a href="https://whitepaper.underground.place/">Gitbook</a></p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="h-8 w-full bg-app-black-900"></div> */}
    </div>
  )
}


export default Footer