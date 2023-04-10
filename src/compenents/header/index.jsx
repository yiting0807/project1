import Slider from "react-slick";
import {Button} from 'antd';
import styles from "./Header.module.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Header() {
  
  
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,  // 一次顯示幾張
    slidesToScroll: 1, // 按下一頁的時候，要跑幾張
    autoplay:true,
    autospeed:500,

    responsive: [
      {
        breakpoint: 576,
        settings: {
        dots: false,
        }
      }
    ]
  }




    return (
      <div>

        <div className={styles.header} >
          
              <img className={styles.menulogo} src="images/menulogo.png" alt="logo"/>
        
            
            <div className={styles.imgs}>
              
          
              <img className={styles.ti} src="images/glass.png" alt="glass" />
              <img className={styles.ti} src="images/translate.png" alt="translate" width="30px" height="30px"/>
              <img className={styles.ti} src="images/login.png" alt="login" width="30px" height="30px"/>
              <img className={styles.ti} src="images/cart.png" alt="cart" width="30px" height="30px"/>
            </div>
        </div>

        <div className={styles.top}>
            <h1 className={styles.toptitle}>每週熱銷商品</h1>
          
          <div className={styles.slider}>
          <Slider {...settings}>
             <div className={styles.topimg}>
               <img className={styles.cimg} src="images/oioi.png" alt="oioi"  />
             </div>

             <div className={styles.topimg}>
                <img className={styles.cimg} src="images/cily.jpeg" alt="cily"/>
             </div>

              <div className={styles.topimg}>
               <img className={styles.cimg} src="images/cookie.jpg" alt="cookie"/>
              </div>    
          </Slider>
         </div>

        <div className={styles.fourbt}>
          <div className={styles.bt}>
               {/* <Button type="text" shape="default" size="large">FOOD</Button> */}
               <a href="#food"><p className={styles.btword}>FOOD</p></a>
            </div>

            <div className={styles.bt}>
               {/* <Button type="text" shape="default" size="large">CLOTHES</Button> */}
               <a href="#clothes"><p className={styles.btword}>CLOTHES</p></a>
            </div>

            <div className={styles.bt}>
               {/* <Button type="text" shape="default" size="large">IDOL</Button> */}
               <a href="#idol"><p className={styles.btword}>IDOL</p></a>
            </div>

            <div className={styles.bt}> 
               {/* <Button className={styles.btword} type="text" shape="default" size="large" ></Button> */}
               <a href="#makeup"><p className={styles.btword}>MAKEUP</p></a>
            </div>
        </div>

        </div>
        
        
           
        

        
             
          
     
        </div>
          
    );

  
}
