import React from 'react'
import './Inquire.css'
import inquire_sales from '../../assets/sales.png'
import inquire_s from '../../assets/sales.png'
import customer_s from '../../assets/cstt.png'
import customer_st from '../../assets/cstt.png'
const Inquire = () => {
  return (
    <div className='inquires'>
         <div className="inquire">
            <img src={inquire_sales} alt="" />
            <div className="caption">
                <img src={inquire_s} alt="" />
                <p>
                    Plan
                </p>
            </div>
         </div>
         <div className="inquire">
            <img src={customer_s} alt="" />
            <div className="caption">
                <img src={customer_st} alt="" />
                <p>Customer support</p>
                {/* <p>Good Afternoon! This bida support Speaking. How May I Help You?</p> */}
            </div>
         </div>
    </div>
  )
}

export default Inquire