import React, { useState } from 'react'
import { SectionTitle } from '../../components/label'
import Layout from '../../layout/layout'
import ImgMagic from '../../assets/images/magic.png'
import ImgItem from '../../assets/images/item.png'
import { useAppContext } from "../../contexts/AppContext";
import "./dashboard.scss"
const DashboardPage = (props) => {
  const [num, setNum] = useState(0);
  const context = useAppContext();
  console.log(context.balance)
  return (
    <Layout title="dashboard">
      <div className='dashboard-container '>
        <div className='header py-36 md:py-52 lg:py-60'>
          <p className='font-birosic text-white text-center text-4xl sm:text-5xl md:text-6xl xl:text-9xl'>dashboard</p>
          <p className='font-montserrat text-white text-center mt-12 text-xl w-8/12 mx-auto'>Check your amount of minted cars. They are not revealed yet!</p>
        </div>
        <div className='w-10/12 mx-auto'>
          <img src={ImgMagic} alt='magic' />
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-10 gap-8 gap-y-12'>
            {Array.apply(null, Array(parseInt(context.balance))).map((idx) => (
              <div key={idx} className='items-center justify-center flex px-4'>
                <img src={ImgItem} alt='item' />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default DashboardPage