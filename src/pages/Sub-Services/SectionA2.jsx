import React from 'react'
import { useTranslation } from 'react-i18next'
import './css/section-a2.css'
import Footer from '../../components/Footer';

const SectionA2 = () => {

  const { t } = useTranslation();

  return (
    <>
      <h2 className='text-center tw-text-gold text-decoration-underline mt-4'>
        {t('SectionA2')}
      </h2>


      <div className='container mt-4 w-100'>
        <p className='tw-text-bone'>
          {t('A2Description_01')}
        </p>
        {/* <br /> */}
        <p className="tw-text-bone">
          {t('A2Description_02')}
        </p>



        {/* <h5 className='tw-text-gold mt-5 text-decoration-underline'>
          {t('Service')}
        </h5> */}




      </div>


      <div className='mt-5 container'>



<div className='my-4 a2 w-75'>
<div className="mt-3">
    <img src="https://empathysauce.com/wp-content/uploads/2020/05/Personal-one-on-one-scaled.jpg" className='w-100' style={{ height: 500}} alt="" />
  </div>

  <div className='mt-3 ms-4 about'>
  <h5 className='tw-text-gold  text-decoration-underline'>
          {t('A2a')}
        </h5>
    <ul className='mt-3'>
      <li className='tw-text-bone'>
        <p className=''>{t('Duration')}</p>
      </li>

      <li className='tw-text-bone'>
        <p className=''>Service Delivery Channels: Available for Online & Onsite at SOULSMITH</p>
      </li>

      <li className='tw-text-bone'>
        <p className=''>Language: Available for Thai Language only</p>
      </li>

      <li className='tw-text-bone'>
        Price :
        <ul className='mt-2' style={{ listStyleType: "circle" }}>
          <li>
            <p>Single session, 1,500</p>
          </li>
          <li>
            <p>5 Sessions: xxx</p>
          </li>
          <li>
            <p>10 Session: xxx</p>
          </li>
        </ul>
      </li>

      
    </ul>
  </div>
</div>



</div>


<Footer />
      
    </>
  )
}

export default SectionA2