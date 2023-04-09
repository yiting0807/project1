import {useState} from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from "./Content.module.css"




export default function Content() {
    
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 446,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  


    return (
      

        <div className={styles.container}>

          <h2 className={styles.food} id="food">Food</h2>

          <div className={styles.title}>
            <h1>最新商品</h1>
          </div>

          
          <Slider {...settings}>
          <div className={styles.block}>
            <h5>ORION  預感香烤洋芋片 </h5>
            <img className={styles.img} src="images/kf1.png" alt="kf1" />
            <p>hhhh</p>
          </div>

          <div className={styles.block}>
            <h5>CW 巧克力夾心餅 5入</h5>
            <img className={styles.img} src="images/kf2.png" alt="kf2" />
          </div>

          <div className={styles.block}>
            <h5>Orion 烏龜玉米脆片 </h5>
            <img className={styles.img} src="images/kf3.png" alt="kf3" />
          </div>

          <div className={styles.block}>
            <h5>Orion  香炒醬料風味鯨魚餅乾</h5>
            <img className={styles.img} src="images/kf4.png" alt="kf4" />
          </div>

          <div className={styles.block}>
            <h3>5</h3>
            <img className={styles.img} src="images/kf5.png" alt="kf5" />
          </div>

          <div className={styles.block}>
            <h3>6</h3>
            <img className={styles.img} src="images/kf6.png" alt="kf6"/>
          </div>

          <div className={styles.block}>
            <h3>7</h3>
            <img className={styles.img} src="images/kf7.png" alt="kf7"/>
          </div>

          <div className={styles.block}>
            <h3>8</h3>
            <img className={styles.img} src="images/kf8.png" alt="kf8"/>
          </div>

         </Slider>
      

         <div className={styles.title2}>
            <h1>限時優惠</h1>
          </div>


         <Slider {...settings}>
          <div className={styles.block}>
            <h3>2-1</h3>
            <img className={styles.img} src="images/kf2-1.png" alt="kf2-1" />
          </div>

          <div className={styles.block}>
            <h3>2</h3>
            <img className={styles.img} src="images/kf2-2.png" alt="kf2-2" />
          </div>

          <div className={styles.block}>
            <h3>3</h3>
            <img className={styles.img} src="images/kf2-3.png" alt="kf2-3" />
          </div>

          <div className={styles.block}>
            <h3>4</h3>
            <img className={styles.img} src="images/kf2-4.png" alt="kf2-4" />
          </div>

          <div className={styles.block}>
            <h3>5</h3>
            <img className={styles.img} src="images/kf2-5.png" alt="kf2-5" />
          </div>

          <div className={styles.block}>
            <h3>6</h3>
            <img className={styles.img} src="images/kf2-6.png" alt="kf2-6"/>
          </div>

          <div className={styles.block}>
            <h3>7</h3>
            <img className={styles.img} src="images/kf2-7.png" alt="kf2-7"/>
          </div>

          <div className={styles.block}>
            <h3>8</h3>
            <img className={styles.img} src="images/kf2-8.png" alt="kf2-8"/>
          </div>

         </Slider>
          
         <div className={styles.title2}>
            <h1>現貨專區</h1>
          </div>

         <Slider {...settings}>
          <div className={styles.block}>
            <h3>1</h3>
            <img className={styles.img} src="images/kf3-1.png" alt="kf3-1" />
          </div>

          <div className={styles.block}>
            <h3>2</h3>
            <img className={styles.img} src="images/kf3-2.png" alt="kf3-2" />
          </div>

          <div className={styles.block}>
            <h3>3</h3>
            <img className={styles.img} src="images/kf3-3.png" alt="kf3-3" />
          </div>

          <div className={styles.block}>
            <h3>4</h3>
            <img className={styles.img} src="images/kf3-4.png" alt="kf3-4" />
          </div>

          <div className={styles.block}>
            <h3>5</h3>
            <img className={styles.img} src="images/kf3-5.png" alt="kf3-5" />
          </div>

          <div className={styles.block}>
            <h3>6</h3>
            <img className={styles.img} src="images/kf3-6.png" alt="kf3-6"/>
          </div>

          <div className={styles.block}>
            <h3>7</h3>
            <img className={styles.img} src="images/kf3-7.png" alt="kf3-7"/>
          </div>

          <div className={styles.block}>
            <h3>8</h3>
            <img className={styles.img} src="images/kf3-8.png" alt="kf3-8"/>
          </div>

         </Slider>
          
{/* clothes */}
<h2 className={styles.clothes} id="clothes">Clothes</h2>

<div className={styles.title}>
    <h1>最新商品</h1>
</div>


<Slider {...settings}>
<div className={styles.block}>
  <h5>ORION 好麗友 </h5>
  <img className={styles.img} src="images/c1.png" alt="c1" />
  <p>hhhh</p>
</div>

<div className={styles.block}>
  <h5>CW 巧克力夾心餅 5入</h5>
  <img className={styles.img} src="images/c2.png" alt="c2" />
</div>

<div className={styles.block}>
  <h5>Orion  烏龜玉米脆片 巧克力口味</h5>
  <img className={styles.img} src="images/c3.png" alt="c3" />
</div>

<div className={styles.block}>
  <h5>Orion  香炒醬料風味鯨魚餅乾</h5>
  <img className={styles.img} src="images/c4.png" alt="c4" />
</div>

<div className={styles.block}>
  <h3>5</h3>
  <img className={styles.img} src="images/c5.png" alt="c5" />
</div>

<div className={styles.block}>
  <h3>6</h3>
  <img className={styles.img} src="images/c6.png" alt="c6"/>
</div>

<div className={styles.block}>
  <h3>7</h3>
  <img className={styles.img} src="images/c7.png" alt="c7"/>
</div>

<div className={styles.block}>
  <h3>8</h3>
  <img className={styles.img} src="images/c8.png" alt="c8"/>
</div>

</Slider>


<div className={styles.title2}>
  <h1>限時優惠</h1>
</div>


<Slider {...settings}>
<div className={styles.block}>
  <h3>2-1</h3>
  <img className={styles.img} src="images/c2-1.png" alt="c2-1" />
</div>

<div className={styles.block}>
  <h3>2</h3>
  <img className={styles.img} src="images/c2-2.png" alt="c2-2" />
</div>

<div className={styles.block}>
  <h3>3</h3>
  <img className={styles.img} src="images/c2-3.png" alt="c2-3" />
</div>

<div className={styles.block}>
  <h3>4</h3>
  <img className={styles.img} src="images/c2-4.png" alt="c2-4" />
</div>

<div className={styles.block}>
  <h3>5</h3>
  <img className={styles.img} src="images/c2-5.png" alt="c2-5" />
</div>

<div className={styles.block}>
  <h3>6</h3>
  <img className={styles.img} src="images/c2-6.png" alt="c2-6"/>
</div>

<div className={styles.block}>
  <h3>7</h3>
  <img className={styles.img} src="images/c2-7.png" alt="c2-7"/>
</div>

<div className={styles.block}>
  <h3>8</h3>
  <img className={styles.img} src="images/c2-8.png" alt="c2-8"/>
</div>

</Slider>

<div className={styles.title2}>
  <h1>現貨專區</h1>
</div>

<Slider {...settings}>
<div className={styles.block}>
  <h3>1</h3>
  <img className={styles.img} src="images/c3-1.png" alt="c3-1" />
</div>

<div className={styles.block}>
  <h3>2</h3>
  <img className={styles.img} src="images/c3-2.png" alt="c3-2" />
</div>

<div className={styles.block}>
  <h3>3</h3>
  <img className={styles.img} src="images/c3-3.png" alt="c3-3" />
</div>

<div className={styles.block}>
  <h3>4</h3>
  <img className={styles.img} src="images/c3-4.png" alt="c3-4" />
</div>

<div className={styles.block}>
  <h3>5</h3>
  <img className={styles.img} src="images/c3-5.png" alt="c3-5" />
</div>

<div className={styles.block}>
  <h3>6</h3>
  <img className={styles.img} src="images/c3-6.png" alt="c3-6"/>
</div>

<div className={styles.block}>
  <h3>7</h3>
  <img className={styles.img} src="images/c3-7.png" alt="c3-7"/>
</div>

<div className={styles.block}>
  <h3>8</h3>
  <img className={styles.img} src="images/c3-8.png" alt="c3-8"/>
</div>

</Slider>

{/* idol */}
<h2 className={styles.idol} id="idol">Idol</h2>

<div className={styles.title}>
    <h1>最新商品</h1>
</div>


<Slider {...settings}>
<div className={styles.block}>
  <h5>ORION 好麗友 預感香烤洋芋片 非油炸</h5>
  <img className={styles.img} src="images/i1.jpg" alt="i1" />
  <p>hhhh</p>
</div>

<div className={styles.block}>
  <h5>CW 巧克力夾心餅 5入</h5>
  <img className={styles.img} src="images/i2.png" alt="i2" />
</div>

<div className={styles.block}>
  <h5>Orion  烏龜玉米脆片 巧克力口味</h5>
  <img className={styles.img} src="images/i3.png" alt="i3" />
</div>

<div className={styles.block}>
  <h5>Orion  香炒醬料風味鯨魚餅乾</h5>
  <img className={styles.img} src="images/i4.png" alt="i4" />
</div>

<div className={styles.block}>
  <h3>5</h3>
  <img className={styles.img} src="images/i5.png" alt="i5" />
</div>

<div className={styles.block}>
  <h3>6</h3>
  <img className={styles.img} src="images/i6.png" alt="i6"/>
</div>

<div className={styles.block}>
  <h3>7</h3>
  <img className={styles.img} src="images/i7.png" alt="i7"/>
</div>

<div className={styles.block}>
  <h3>8</h3>
  <img className={styles.img} src="images/i8.png" alt="i8"/>
</div>

</Slider>


<div className={styles.title2}>
  <h1>限時優惠</h1>
</div>


<Slider {...settings}>
<div className={styles.block}>
  <h3>2-1</h3>
  <img className={styles.img} src="images/i2-1.png" alt="i2-1" />
</div>

<div className={styles.block}>
  <h3>2</h3>
  <img className={styles.img} src="images/i2-2.png" alt="i2-2" />
</div>

<div className={styles.block}>
  <h3>3</h3>
  <img className={styles.img} src="images/i2-3.png" alt="i2-3" />
</div>

<div className={styles.block}>
  <h3>4</h3>
  <img className={styles.img} src="images/i2-4.png" alt="i2-4" />
</div>

<div className={styles.block}>
  <h3>5</h3>
  <img className={styles.img} src="images/i2-5.png" alt="i2-5" />
</div>

<div className={styles.block}>
  <h3>6</h3>
  <img className={styles.img} src="images/i2-6.png" alt="i2-6"/>
</div>

<div className={styles.block}>
  <h3>7</h3>
  <img className={styles.img} src="images/i2-7.png" alt="i2-7"/>
</div>

<div className={styles.block}>
  <h3>8</h3>
  <img className={styles.img} src="images/i2-8.png" alt="i2-8"/>
</div>

</Slider>

<div className={styles.title2}>
  <h1>現貨專區</h1>
</div>

<Slider {...settings}>
<div className={styles.block}>
  <h3>1</h3>
  <img className={styles.img} src="images/i3-1.png" alt="i3-1" />
</div>

<div className={styles.block}>
  <h3>2</h3>
  <img className={styles.img} src="images/i3-2.png" alt="i3-2" />
</div>

<div className={styles.block}>
  <h3>3</h3>
  <img className={styles.img} src="images/i3-3.jpg" alt="i3-3" />
</div>

<div className={styles.block}>
  <h3>4</h3>
  <img className={styles.img} src="images/i3-4.png" alt="i3-4" />
</div>

<div className={styles.block}>
  <h3>5</h3>
  <img className={styles.img} src="images/i3-5.png" alt="i3-5" />
</div>

<div className={styles.block}>
  <h3>6</h3>
  <img className={styles.img} src="images/i3-6.png" alt="i3-6"/>
</div>

<div className={styles.block}>
  <h3>7</h3>
  <img className={styles.img} src="images/i3-7.png" alt="i3-7"/>
</div>

<div className={styles.block}>
  <h3>8</h3>
  <img className={styles.img} src="images/i3-8.png" alt="i3-8"/>
</div>

</Slider>

{/* makeup */}
<h2 className={styles.makeup} id="makeup">Makeup</h2>

<div className={styles.title}>
    <h1>最新商品</h1>
</div>


<Slider {...settings}>
<div className={styles.block}>
  <h5>ORION 好麗友 預感香烤洋芋片 非油炸</h5>
  <img className={styles.img} src="images/km1.jpeg" alt="km1" />
  <p>hhhh</p>
</div>

<div className={styles.block}>
  <h5>CW 巧克力夾心餅 5入</h5>
  <img className={styles.img} src="images/km2.png" alt="km2" />
</div>

<div className={styles.block}>
  <h5>Orion  烏龜玉米脆片 巧克力口味</h5>
  <img className={styles.img} src="images/km3.png" alt="km3" />
</div>

<div className={styles.block}>
  <h5>Orion  香炒醬料風味鯨魚餅乾</h5>
  <img className={styles.img} src="images/km4.png" alt="km4" />
</div>

<div className={styles.block}>
  <h3>5</h3>
  <img className={styles.img} src="images/km5.png" alt="km5" />
</div>

<div className={styles.block}>
  <h3>6</h3>
  <img className={styles.img} src="images/km6.png" alt="km6"/>
</div>

<div className={styles.block}>
  <h3>7</h3>
  <img className={styles.img} src="images/km7.png" alt="km7"/>
</div>

<div className={styles.block}>
  <h3>8</h3>
  <img className={styles.img} src="images/km8.png" alt="km8"/>
</div>

</Slider>


<div className={styles.title2}>
  <h1>限時優惠</h1>
</div>


<Slider {...settings}>
<div className={styles.block}>
  <h3>2-1</h3>
  <img className={styles.img} src="images/km2-1.png" alt="km2-1" />
</div>

<div className={styles.block}>
  <h3>2</h3>
  <img className={styles.img} src="images/km2-2.png" alt="km2-2" />
</div>

<div className={styles.block}>
  <h3>3</h3>
  <img className={styles.img} src="images/km2-3.png" alt="km2-3" />
</div>

<div className={styles.block}>
  <h3>4</h3>
  <img className={styles.img} src="images/km2-4.png" alt="km2-4" />
</div>

<div className={styles.block}>
  <h3>5</h3>
  <img className={styles.img} src="images/km2-5.png" alt="km2-5" />
</div>

<div className={styles.block}>
  <h3>6</h3>
  <img className={styles.img} src="images/km2-6.png" alt="km2-6"/>
</div>

<div className={styles.block}>
  <h3>7</h3>
  <img className={styles.img} src="images/km2-7.png" alt="km2-7"/>
</div>

<div className={styles.block}>
  <h3>8</h3>
  <img className={styles.img} src="images/km2-8.png" alt="km2-8"/>
</div>

</Slider>

<div className={styles.title2}>
  <h1>現貨專區</h1>
</div>

<Slider {...settings}>
<div className={styles.block}>
  <h3>1</h3>
  <img className={styles.img} src="images/km3-1.png" alt="km3-1" />
</div>

<div className={styles.block}>
  <h3>2</h3>
  <img className={styles.img} src="images/km3-2.png" alt="km3-2" />
</div>

<div className={styles.block}>
  <h3>3</h3>
  <img className={styles.img} src="images/km3-3.png" alt="km3-3" />
</div>

<div className={styles.block}>
  <h3>4</h3>
  <img className={styles.img} src="images/km3-4.png" alt="km3-4" />
</div>

<div className={styles.block}>
  <h3>5</h3>
  <img className={styles.img} src="images/km3-5.png" alt="km3-5" />
</div>

<div className={styles.block}>
  <h3>6</h3>
  <img className={styles.img} src="images/km3-6.png" alt="km3-6"/>
</div>

<div className={styles.block}>
  <h3>7</h3>
  <img className={styles.img} src="images/km3-7.png" alt="km3-7"/>
</div>

<div className={styles.block}>
  <h3>8</h3>
  <img className={styles.img} src="images/km3-8.png" alt="km3-8"/>
</div>

</Slider>









          

       </div>
 );

 
   
}
