import {useState} from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from "./Content.module.css"
import {
  Link
} from 'react-router-dom' 


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
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      // {
      //   breakpoint: 568,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2,
      //     initialSlide: 2
      //   }

      // },
      // {
      //   breakpoint: 446,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2,
      //     initialSlide: 2
      //   }
      // },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1
      //   }
      // }
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
            <h3>ORION  預感香烤洋芋片 </h3>
            <img className={styles.img} src="images/kf1.png" alt="kf1" />
            <Link to='/cart'><button>add in cart</button></Link>
          </div>
          <div className={styles.block}>
            <h3>CW 巧克力夾心餅 5入</h3>
            <img className={styles.img} src="images/kf2.png" alt="kf2" />
          </div>

          <div className={styles.block}>
            <h3>Orion 烏龜玉米脆片 </h3>
            <img className={styles.img} src="images/kf3.png" alt="kf3" />
          </div>

          <div className={styles.block}>
            <h3>Orion  香炒醬料風味鯨魚餅乾</h3>
            <img className={styles.img} src="images/kf4.png" alt="kf4" />
          </div>

          <div className={styles.block}>
            <h3>OrionSun波浪脆餅 大蒜麵包風味</h3>
            <img className={styles.img} src="images/kf5.png" alt="kf5" />
          </div>

          <div className={styles.block}>
            <h3>CROWN 皇冠 鮮奶油鬆餅</h3>
            <img className={styles.img} src="images/kf6.png" alt="kf6"/>
          </div>

          <div className={styles.block}>
            <h3>Orion草莓奶油派</h3>
            <img className={styles.img} src="images/kf7.png" alt="kf7"/>
          </div>

          <div className={styles.block}>
            <h3>Ohs 海苔糯米餅乾</h3>
            <img className={styles.img} src="images/kf8.png" alt="kf8"/>
          </div>

         </Slider>
      

         <div className={styles.title2}>
            <h1>限時優惠</h1>
          </div>


         <Slider {...settings}>
          <div className={styles.block}>
            <h3>Orion辣味陽光波浪玉米脆片</h3>
            <img className={styles.img} src="images/kf2-1.png" alt="kf2-1" />
          </div>

          <div className={styles.block}>
            <h3>Crown白巧克力夾心威化酥</h3>
            <img className={styles.img} src="images/kf2-2.png" alt="kf2-2" />
          </div>

          <div className={styles.block}>
            <h3>Nongshim玉米造型玉米餅乾</h3>
            <img className={styles.img} src="images/kf2-3.png" alt="kf2-3" />
          </div>

          <div className={styles.block}>
            <h3>Earnest F&B Pororo迷你藥果</h3>
            <img className={styles.img} src="images/kf2-4.png" alt="kf2-4" />
          </div>

          <div className={styles.block}>
            <h3>OSULLOC 優質綠茶華夫餅</h3>
            <img className={styles.img} src="images/kf2-5.png" alt="kf2-5" />
          </div>

          <div className={styles.block}>
            <h3>Nongshim黑松露蝦餅</h3>
            <img className={styles.img} src="images/kf2-6.png" alt="kf2-6"/>
          </div>

          <div className={styles.block}>
            <h3>DAY& 綜合水果蒟蒻果凍飲組 </h3>
            <img className={styles.img} src="images/kf2-7.png" alt="kf2-7"/>
          </div>

          <div className={styles.block}>
            <h3>HAITAI脆皮迷你黑森林蛋糕</h3>
            <img className={styles.img} src="images/kf2-8.png" alt="kf2-8"/>
          </div>

         </Slider>
          
         <div className={styles.title2}>
            <h1>現貨專區</h1>
          </div>

         <Slider {...settings}>
          <div className={styles.block}>
            <h3>Orion洋芋片</h3>
            <img className={styles.img} src="images/kf3-1.png" alt="kf3-1" />
          </div>

          <div className={styles.block}>
            <h3>LOTTE堅果巧克力棒</h3>
            <img className={styles.img} src="images/kf3-2.png" alt="kf3-2" />
          </div>

          <div className={styles.block}>
            <h3>HBAF 蜂蜜奶油味杏仁果</h3>
            <img className={styles.img} src="images/kf3-3.png" alt="kf3-3" />
          </div>

          <div className={styles.block}>
            <h3>Nongshim 薯條餅乾</h3>
            <img className={styles.img} src="images/kf3-4.png" alt="kf3-4" />
          </div>

          <div className={styles.block}>
            <h3>HAITAI新堂洞辣炒年糕餅乾</h3>
            <img className={styles.img} src="images/kf3-5.png" alt="kf3-5" />
          </div>

          <div className={styles.block}>
            <h3>HBAF 杏仁果 奶油餅乾味</h3>
            <img className={styles.img} src="images/kf3-6.png" alt="kf3-6"/>
          </div>

          <div className={styles.block}>
            <h3>LOTTE熔岩巧克力餅乾</h3>
            <img className={styles.img} src="images/kf3-7.png" alt="kf3-7"/>
          </div>

          <div className={styles.block}>
            <h3>Orion巧克力蛋糕 </h3>
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
  <h3>heart rabbit短T </h3>
  <img className={styles.img} src="images/c1.png" alt="c1" />
</div>

<div className={styles.block}>
  <h3>拉鍊短領上衣</h3>
  <img className={styles.img} src="images/c2.png" alt="c2" />
</div>

<div className={styles.block}>
  <h3>BRL刺繡帽</h3>
  <img className={styles.img} src="images/c3.png" alt="c3" />
</div>

<div className={styles.block}>
  <h3>慵懶工裝褲</h3>
  <img className={styles.img} src="images/c4.png" alt="c4" />
</div>

<div className={styles.block}>
  <h3>假兩件上衣</h3>
  <img className={styles.img} src="images/c5.png" alt="c5" />
</div>

<div className={styles.block}>
  <h3>灰色工裝褲</h3>
  <img className={styles.img} src="images/c6.png" alt="c6"/>
</div>

<div className={styles.block}>
  <h3>牛仔五分褲</h3>
  <img className={styles.img} src="images/c7.png" alt="c7"/>
</div>

<div className={styles.block}>
  <h3>個性無袖背心</h3>
  <img className={styles.img} src="images/c8.png" alt="c8"/>
</div>

</Slider>


<div className={styles.title2}>
  <h1>限時優惠</h1>
</div>


<Slider {...settings}>
<div className={styles.block}>
  <h3>刺繡方領背心</h3>
  <img className={styles.img} src="images/c2-1.png" alt="c2-1" />
</div>

<div className={styles.block}>
  <h3>可縮口休閒褲</h3>
  <img className={styles.img} src="images/c2-2.png" alt="c2-2" />
</div>

<div className={styles.block}>
  <h3>棒球外套</h3>
  <img className={styles.img} src="images/c2-3.png" alt="c2-3" />
</div>

<div className={styles.block}>
  <h3>針織短版背心</h3>
  <img className={styles.img} src="images/c2-4.png" alt="c2-4" />
</div>

<div className={styles.block}>
  <h3>灰色假兩件上衣</h3>
  <img className={styles.img} src="images/c2-5.png" alt="c2-5" />
</div>

<div className={styles.block}>
  <h3>黑色雲朵包</h3>
  <img className={styles.img} src="images/c2-6.png" alt="c2-6"/>
</div>

<div className={styles.block}>
  <h3>social club粉色帽</h3>
  <img className={styles.img} src="images/c2-7.png" alt="c2-7"/>
</div>

<div className={styles.block}>
  <h3>水藍針織罩衫</h3>
  <img className={styles.img} src="images/c2-8.png" alt="c2-8"/>
</div>

</Slider>

<div className={styles.title2}>
  <h1>現貨專區</h1>
</div>

<Slider {...settings}>
<div className={styles.block}>
  <h3>Y2K愛心上衣</h3>
  <img className={styles.img} src="images/c3-1.png" alt="c3-1" />
</div>

<div className={styles.block}>
  <h3>無拉鍊薄款外套</h3>
  <img className={styles.img} src="images/c3-2.png" alt="c3-2" />
</div>

<div className={styles.block}>
  <h3>簍空針織罩衫</h3>
  <img className={styles.img} src="images/c3-3.png" alt="c3-3" />
</div>

<div className={styles.block}>
  <h3>造型黑衣</h3>
  <img className={styles.img} src="images/c3-4.png" alt="c3-4" />
</div>

<div className={styles.block}>
  <h3>灰色工裝裙</h3>
  <img className={styles.img} src="images/c3-5.png" alt="c3-5" />
</div>

<div className={styles.block}>
  <h3>灰色兔子上衣</h3>
  <img className={styles.img} src="images/c3-6.png" alt="c3-6"/>
</div>

<div className={styles.block}>
  <h3>灰色百褶裙</h3>
  <img className={styles.img} src="images/c3-7.png" alt="c3-7"/>
</div>

<div className={styles.block}>
  <h3>logo黑衣</h3>
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
  <h3>ive</h3>
  <img className={styles.img} src="images/i1.jpg" alt="i1" />
</div>

<div className={styles.block}>
  <h3>stayc</h3>
  <img className={styles.img} src="images/i2.png" alt="i2" />
</div>

<div className={styles.block}>
  <h3>sweet</h3>
  <img className={styles.img} src="images/i3.png" alt="i3" />
</div>

<div className={styles.block}>
  <h3>BSS</h3>
  <img className={styles.img} src="images/i4.png" alt="i4" />
</div>

<div className={styles.block}>
  <h3>Apink</h3>
  <img className={styles.img} src="images/i5.png" alt="i5" />
</div>

<div className={styles.block}>
  <h3>Jisoo</h3>
  <img className={styles.img} src="images/i6.png" alt="i6"/>
</div>

<div className={styles.block}>
  <h3>Onew</h3>
  <img className={styles.img} src="images/i7.png" alt="i7"/>
</div>

<div className={styles.block}>
  <h3>Fifty Fifty</h3>
  <img className={styles.img} src="images/i8.png" alt="i8"/>
</div>

</Slider>


<div className={styles.title2}>
  <h1>限時優惠</h1>
</div>


<Slider {...settings}>
<div className={styles.block}>
  <h3>LE SSERAFIM </h3>
  <img className={styles.img} src="images/i2-1.png" alt="i2-1" />
</div>

<div className={styles.block}>
  <h3>Red velvet</h3>
  <img className={styles.img} src="images/i2-2.png" alt="i2-2" />
</div>

<div className={styles.block}>
  <h3>SF9</h3>
  <img className={styles.img} src="images/i2-3.png" alt="i2-3" />
</div>

<div className={styles.block}>
  <h3>aespa</h3>
  <img className={styles.img} src="images/i2-4.png" alt="i2-4" />
</div>

<div className={styles.block}>
  <h3>IU</h3>
  <img className={styles.img} src="images/i2-5.png" alt="i2-5" />
</div>

<div className={styles.block}>
  <h3>Baekhyun</h3>
  <img className={styles.img} src="images/i2-6.png" alt="i2-6"/>
</div>

<div className={styles.block}>
  <h3>(G)I-DLE</h3>
  <img className={styles.img} src="images/i2-7.png" alt="i2-7"/>
</div>

<div className={styles.block}>
  <h3>Super Junior</h3>
  <img className={styles.img} src="images/i2-8.png" alt="i2-8"/>
</div>

</Slider>

<div className={styles.title2}>
  <h1>現貨專區</h1>
</div>

<Slider {...settings}>
<div className={styles.block}>
  <h3>xxx</h3>
  <img className={styles.img} src="images/i3-1.png" alt="i3-1" />
</div>

<div className={styles.block}>
  <h3>xxx</h3>
  <img className={styles.img} src="images/i3-2.png" alt="i3-2" />
</div>

<div className={styles.block}>
  <h3>mamamoo</h3>
  <img className={styles.img} src="images/i3-3.jpg" alt="i3-3" />
</div>

<div className={styles.block}>
  <h3>nmixx</h3>
  <img className={styles.img} src="images/i3-4.png" alt="i3-4" />
</div>

<div className={styles.block}>
  <h3>xxx</h3>
  <img className={styles.img} src="images/i3-5.png" alt="i3-5" />
</div>

<div className={styles.block}>
  <h3>NCT 127</h3>
  <img className={styles.img} src="images/i3-6.png" alt="i3-6"/>
</div>

<div className={styles.block}>
  <h3>TXT</h3>
  <img className={styles.img} src="images/i3-7.png" alt="i3-7"/>
</div>

<div className={styles.block}>
  <h3>NCT DREAM</h3>
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
  <h3>強效遮瑕</h3>
  <img className={styles.img} src="images/km1.jpeg" alt="km1" />
</div>

<div className={styles.block}>
  <h3>強效維持睫毛膏</h3>
  <img className={styles.img} src="images/km2.png" alt="km2" />
</div>

<div className={styles.block}>
  <h3>閃亮亮臥讒筆</h3>
  <img className={styles.img} src="images/km3.png" alt="km3" />
</div>

<div className={styles.block}>
  <h3>定裝噴霧</h3>
  <img className={styles.img} src="images/km4.png" alt="km4" />
</div>

<div className={styles.block}>
  <h3>造型美妝蛋 三入</h3>
  <img className={styles.img} src="images/km5.png" alt="km5" />
</div>

<div className={styles.block}>
  <h3>玩轉色彩眼頰盤</h3>
  <img className={styles.img} src="images/km6.png" alt="km6"/>
</div>

<div className={styles.block}>
  <h3>沁透薄荷巧克力迷你眼彩盤</h3>
  <img className={styles.img} src="images/km7.png" alt="km7"/>
</div>

<div className={styles.block}>
  <h3>3ce 口紅</h3>
  <img className={styles.img} src="images/km8.png" alt="km8"/>
</div>

</Slider>


<div className={styles.title2}>
  <h1>限時優惠</h1>
</div>


<Slider {...settings}>
<div className={styles.block}>
  <h3>3CE迷你四色眼影盤</h3>
  <img className={styles.img} src="images/km2-1.png" alt="km2-1" />
</div>

<div className={styles.block}>
  <h3>多眼調色盤</h3>
  <img className={styles.img} src="images/km2-2.png" alt="km2-2" />
</div>

<div className={styles.block}>
  <h3>3ce腮紅 #city淡紫色</h3>
  <img className={styles.img} src="images/km2-3.png" alt="km2-3" />
</div>

<div className={styles.block}>
  <h3>感性粉啞光液體</h3>
  <img className={styles.img} src="images/km2-4.png" alt="km2-4" />
</div>

<div className={styles.block}>
  <h3>絲滑持久 24 小時長效 </h3>
  <img className={styles.img} src="images/km2-5.png" alt="km2-5" />
</div>

<div className={styles.block}>
  <h3>hince粉餅</h3>
  <img className={styles.img} src="images/km2-6.png" alt="km2-6"/>
</div>

<div className={styles.block}>
  <h3>hince唇膏</h3>
  <img className={styles.img} src="images/km2-7.png" alt="km2-7"/>
</div>

<div className={styles.block}>
  <h3>romand水潤唇膏</h3>
  <img className={styles.img} src="images/km2-8.png" alt="km2-8"/>
</div>

</Slider>

<div className={styles.title2}>
  <h1>現貨專區</h1>
</div>

<Slider {...settings}>
<div className={styles.block}>
  <h3>防水眉筆</h3>
  <img className={styles.img} src="images/km3-1.png" alt="km3-1" />
</div>

<div className={styles.block}>
  <h3>持效長久睫毛膏</h3>
  <img className={styles.img} src="images/km3-2.png" alt="km3-2" />
</div>

<div className={styles.block}>
  <h3>Javin de Seoul粉餅</h3>
  <img className={styles.img} src="images/km3-3.png" alt="km3-3" />
</div>

<div className={styles.block}>
  <h3>Javin de Seoul粉底液</h3>
  <img className={styles.img} src="images/km3-4.png" alt="km3-4" />
</div>

<div className={styles.block}>
  <h3>espoil眼影盤</h3>
  <img className={styles.img} src="images/km3-5.png" alt="km3-5" />
</div>

<div className={styles.block}>
  <h3>espoir TAPING COVER CUSHION SPF25PA++</h3>
  <img className={styles.img} src="images/km3-6.png" alt="km3-6"/>
</div>

<div className={styles.block}>
  <h3>banila mood on eye palette #Mellow Mauve</h3>
  <img className={styles.img} src="images/km3-7.png" alt="km3-7"/>
</div>

<div className={styles.block}>
  <h3>Dasique 九宮格眼影盤 </h3>
  <img className={styles.img} src="images/km3-8.png" alt="km3-8"/>
</div>

</Slider>




       </div>
 );

 
   
}
