import {useState} from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from "./Content2.module.css"


export default function Content2() {
    
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
              <h3>宅間厚肉無籽梅干100g</h3>
              <img className={styles.img} src="images/jf1.jpg" alt="jf1" />
            </div>
  
            <div className={styles.block}>
              <h3>森永焦糖奶油夾心奶酥餅</h3>
              <img className={styles.img} src="images/jf2.png" alt="jf2" />
            </div>
  
            <div className={styles.block}>
              <h3> CHOCOPIE 伯爵茶風味巧克力派6入 </h3>
              <img className={styles.img} src="images/jf3.jpg" alt="jf3" />
            </div>
  
            <div className={styles.block}>
              <h3>UHA味覺糖普超軟糖90g</h3>
              <img className={styles.img} src="images/jf4.jpg" alt="jf4" />
            </div>
  
            <div className={styles.block}>
              <h3>台灣味水果果凍箱</h3>
              <img className={styles.img} src="images/jf5.jpg" alt="jf5" />
            </div>
  
            <div className={styles.block}>
              <h3>BOURBON帆船餅乾</h3>
              <img className={styles.img} src="images/jf6.jpg" alt="jf6"/>
            </div>
  
            <div className={styles.block}>
              <h3>和果子之鄉255g</h3>
              <img className={styles.img} src="images/jf7.jpg" alt="jf7"/>
            </div>
  
            <div className={styles.block}>
              <h3>明治草莓牛奶巧克力</h3>
              <img className={styles.img} src="images/jf8.jpg" alt="jf8"/>
            </div>
  
           </Slider>
        
  
           <div className={styles.title2}>
              <h1>限時優惠</h1>
            </div>
  
  
           <Slider {...settings}>
            <div className={styles.block}>
              <h3>日本伴手禮盒精選</h3>
              <img className={styles.img} src="images/jf2-1.jpg" alt="jf2-1" />
            </div>
  
            <div className={styles.block}>
              <h3>三角迷你草莓蛋糕</h3>
              <img className={styles.img} src="images/jf2-2.jpg" alt="jf2-2" />
            </div>
  
            <div className={styles.block}>
              <h3>蠟筆小新/ 杏仁豆腐 /皮卡丘 巧克力餅</h3>
              <img className={styles.img} src="images/jf2-3.jpg" alt="jf2-3" />
            </div>
  
            <div className={styles.block}>
              <h3>薯圈圈三角形歡樂派對包</h3>
              <img className={styles.img} src="images/jf2-4.jpg" alt="jf2-4" />
            </div>
  
            <div className={styles.block}>
              <h3>夕張哈密瓜/草莓 半切巧克力</h3>
              <img className={styles.img} src="images/jf2-5.jpg" alt="jf2-5" />
            </div>
  
            <div className={styles.block}>
              <h3> 巨人牛奶捲心棒 11枝入</h3>
              <img className={styles.img} src="images/jf2-6.jpg" alt="jf2-6"/>
            </div>
  
            <div className={styles.block}>
              <h3>蜜糖烤麵包餅 紅帽</h3>
              <img className={styles.img} src="images/jf2-7.jpg" alt="jf2-7"/>
            </div>
  
            <div className={styles.block}>
              <h3>松尾綜合巧克力</h3>
              <img className={styles.img} src="images/jf2-8.jpg" alt="jf2-8"/>
            </div>
  
           </Slider>
            
           <div className={styles.title2}>
              <h1>現貨專區</h1>
            </div>
  
           <Slider {...settings}>
            <div className={styles.block}>
              <h3>Cisco 綜合果實穀片</h3>
              <img className={styles.img} src="images/jf3-1.jpg" alt="jf3-1" />
            </div>
  
            <div className={styles.block}>
              <h3>超濃厚扇貝薄片</h3>
              <img className={styles.img} src="images/jf3-2.jpg" alt="jf3-2" />
            </div>
  
            <div className={styles.block}>
              <h3>可爾必思軟糖</h3>
              <img className={styles.img} src="images/jf3-3.jpg" alt="jf3-3" />
            </div>
  
            <div className={styles.block}>
              <h3>e-ma水果喉糖系列</h3>
              <img className={styles.img} src="images/jf3-4.jpg" alt="jf3-4" />
            </div>
  
            <div className={styles.block}>
              <h3>Lion檸檬/柚子皮糖</h3>
              <img className={styles.img} src="images/jf3-5.jpg" alt="jf3-5" />
            </div>
  
            <div className={styles.block}>
              <h3>森永小魚餅 5袋入</h3>
              <img className={styles.img} src="images/jf3-6.jpg" alt="jf3-6"/>
            </div>
  
            <div className={styles.block}>
              <h3>明治 巧克力夾心餅</h3>
              <img className={styles.img} src="images/jf3-7.jpg" alt="jf3-7"/>
            </div>
  
            <div className={styles.block}>
              <h3>森永德用鬆餅粉600g</h3>
              <img className={styles.img} src="images/jf3-8.jpg" alt="jf3-8"/>
            </div>
  
           </Slider>
            
  {/* clothes */}
  <h2 className={styles.clothes} id="clothes">Clothes</h2>
  
  <div className={styles.title}>
      <h1>最新商品</h1>
  </div>
  
  
  <Slider {...settings}>
  <div className={styles.block}>
    <h3>透明長袖T卹</h3>
    <img className={styles.img} src="images/jc1.png" alt="jc1" />
  </div>
  
  <div className={styles.block}>
    <h3>圖案短T</h3>
    <img className={styles.img} src="images/jc2.JPG" alt="jc2" />
  </div>
  
  <div className={styles.block}>
    <h3>抗uv輕薄外套</h3>
    <img className={styles.img} src="images/jc3.JPG" alt="jc3" />
  </div>
  
  <div className={styles.block}>
    <h3>開衫立領上衣</h3>
    <img className={styles.img} src="images/jc4.JPG" alt="jc4" />
  </div>
  
  <div className={styles.block}>
    <h3>袖配色百褶上衣</h3>
    <img className={styles.img} src="images/jc5.JPG" alt="jc5" />
  </div>
  
  <div className={styles.block}>
    <h3>開衫夏季針織</h3>
    <img className={styles.img} src="images/jc6.JPG" alt="jc6"/>
  </div>
  
  <div className={styles.block}>
    <h3>針織彈力薄款短袖</h3>
    <img className={styles.img} src="images/jc7.JPG" alt="jc7"/>
  </div>
  
  <div className={styles.block}>
    <h3>薄襯衫</h3>
    <img className={styles.img} src="images/jc8.JPG" alt="jc8"/>
  </div>
  
  </Slider>
  
  
  <div className={styles.title2}>
    <h1>限時優惠</h1>
  </div>
  
  
  <Slider {...settings}>
  <div className={styles.block}>
    <h3>短袖大尺寸透明襯衫</h3>
    <img className={styles.img} src="images/jc2-1.JPG" alt="jc2-1" />
  </div>
  
  <div className={styles.block}>
    <h3>方領薄長袖</h3>
    <img className={styles.img} src="images/jc2-2.JPG" alt="jc2-2" />
  </div>
  
  <div className={styles.block}>
    <h3>簡約 T 恤</h3>
    <img className={styles.img} src="images/jc2-3.JPG" alt="jc2-3" />
  </div>
  
  <div className={styles.block}>
    <h3>防汗連帽衫</h3>
    <img className={styles.img} src="images/jc2-4.JPG" alt="jc2-4" />
  </div>
  
  <div className={styles.block}>
    <h3>緞帶公主襯衫</h3>
    <img className={styles.img} src="images/jc2-5.JPG" alt="jc2-5" />
  </div>
  
  <div className={styles.block}>
    <h3>緞帶寬鬆針織</h3>
    <img className={styles.img} src="images/jc2-6.JPG" alt="jc2-6"/>
  </div>
  
  <div className={styles.block}>
    <h3>按扣開衫</h3>
    <img className={styles.img} src="images/jc2-7.JPG" alt="jc2-7"/>
  </div>
  
  <div className={styles.block}>
    <h3>緊身套頭羅紋針織</h3>
    <img className={styles.img} src="images/jc2-8.JPG" alt="jc2-8"/>
  </div>
  
  </Slider>
  
  <div className={styles.title2}>
    <h1>現貨專區</h1>
  </div>
  
  <Slider {...settings}>
  <div className={styles.block}>
    <h3>蝙蝠袖覆蓋連衣裙</h3>
    <img className={styles.img} src="images/jc3-1.JPG" alt="jc3-1" />
  </div>
  
  <div className={styles.block}>
    <h3>網眼短套頭衫</h3>
    <img className={styles.img} src="images/jc3-2.JPG" alt="jc3-2" />
  </div>
  
  <div className={styles.block}>
    <h3>花卉針織外套</h3>
    <img className={styles.img} src="images/jc3-3.JPG" alt="jc3-3" />
  </div>
  
  <div className={styles.block}>
    <h3>滾邊袖針織開衫</h3>
    <img className={styles.img} src="images/jc3-4.JPG" alt="jc3-4" />
  </div>
  
  <div className={styles.block}>
    <h3>條紋袖寬鬆設計襯衫</h3>
    <img className={styles.img} src="images/jc3-5.JPG" alt="jc3-5" />
  </div>
  
  <div className={styles.block}>
    <h3>泡泡袖襯衫</h3>
    <img className={styles.img} src="images/jc3-6.JPG" alt="jc3-6"/>
  </div>
  
  <div className={styles.block}>
    <h3>襯衫透明上衣</h3>
    <img className={styles.img} src="images/jc3-7.JPG" alt="jc3-7"/>
  </div>
  
  <div className={styles.block}>
    <h3>高領圓潤透明長袖</h3>
    <img className={styles.img} src="images/jc3-8.JPG" alt="jc3-8"/>
  </div>
  
  </Slider>
  
  {/* idol */}
  <h2 className={styles.idol} id="idol">Idol</h2>
  
  <div className={styles.title}>
      <h1>最新商品</h1>
  </div>
  
  
  <Slider {...settings}>
  <div className={styles.block}>
    <h3>禰豆子　フィギュア</h3>
    <img className={styles.img} src="images/ji1.jpg" alt="ji1" />
  </div>
  
  <div className={styles.block}>
    <h3>時透無一郎 フィギュア</h3>
    <img className={styles.img} src="images/ji2.jpg" alt="ji2" />
  </div>
  
  <div className={styles.block}>
    <h3>孫悟空 フィギュア</h3>
    <img className={styles.img} src="images/ji3.jpg" alt="ji3" />
  </div>
  
  <div className={styles.block}>
    <h3>ナルト バッジ セット</h3>
    <img className={styles.img} src="images/ji4.jpg" alt="j4" />
  </div>
  
  <div className={styles.block}>
    <h3>AKB48 10th 小嶋陽菜</h3>
    <img className={styles.img} src="images/ji5.jpg" alt="ji5" />
  </div>
  
  <div className={styles.block}>
    <h3>間諜×家庭 密森康普里托</h3>
    <img className={styles.img} src="images/ji6.jpg" alt="ji6"/>
  </div>
  
  <div className={styles.block}>
    <h3>“My Hero Academy” Can Badge & Special Holder Collection Vol.1 </h3>
    <img className={styles.img} src="images/ji7.jpg" alt="ji7"/>
  </div>
  
  <div className={styles.block}>
    <h3>《我的英雄學院》啤酒杯墊 北鄉勝美</h3>
    <img className={styles.img} src="images/ji8.jpg" alt="ji8"/>
  </div>
  
  </Slider>
  
  
  <div className={styles.title2}>
    <h1>限時優惠</h1>
  </div>
  
  
  <Slider {...settings}>
  <div className={styles.block}>
    <h3>《我的英雄學院》鐵罐筆案</h3>
    <img className={styles.img} src="images/ji2-1.jpg" alt="ji2-1" />
  </div>
  
  <div className={styles.block}>
    <h3>獵人×獵人”初始Mag “H”希索卡=莫魯</h3>
    <img className={styles.img} src="images/ji2-2.jpg" alt="ji2-2" />
  </div>
  
  <div className={styles.block}>
    <h3>《電鋸驚魂》亞克力備忘錄剪輯</h3>
    <img className={styles.img} src="images/ji2-3.jpg" alt="ji2-3" />
  </div>
  
  <div className={styles.block}>
    <h3>"拉麵紅貓”亞克力備忘錄架2件套</h3>
    <img className={styles.img} src="images/ji2-4.jpg" alt="ji2-4" />
  </div>
  
  <div className={styles.block}>
    <h3>《世界扳機》名場西洋鏡人物荀雄一</h3>
    <img className={styles.img} src="images/ji2-5.jpg" alt="ji2-5" />
  </div>
  
  <div className={styles.block}>
    <h3>《我的英雄學院》徽章戶賀姬子</h3>
    <img className={styles.img} src="images/ji2-6.jpg" alt="ji2-6"/>
  </div>
  
  <div className={styles.block}>
    <h3>“我的英雄學院”生日手電筒筒飯田天也</h3>
    <img className={styles.img} src="images/ji2-7.jpg" alt="ji2-7"/>
  </div>
  
  <div className={styles.block}>
    <h3>《惡魔殺手》圓珠筆配臉魅力尖叫於宇宇</h3>
    <img className={styles.img} src="images/ji2-8.jpg" alt="ji2-8"/>
  </div>
  
  </Slider>
  
  <div className={styles.title2}>
    <h1>現貨專區</h1>
  </div>
  
  <Slider {...settings}>
  <div className={styles.block}>
    <h3>"海久！！” 亞克力塊“英雄”五敷子</h3>
    <img className={styles.img} src="images/ji3-1.jpg" alt="ji3-1" />
  </div>
  
  <div className={styles.block}>
    <h3>“海久！！” 大剪影T恤“英雄”牛島若俊</h3>
    <img className={styles.img} src="images/ji3-2.jpg" alt="ji3-2" />
  </div>
  
  <div className={styles.block}>
    <h3> 青之八子西洋鏡人物加野千津</h3>
    <img className={styles.img} src="images/ji3-3.jpg" alt="ji3-3" />
  </div>
  
  <div className={styles.block}>
    <h3>“惡魔殺手”西洋鏡人物木托魯武一郎</h3>
    <img className={styles.img} src="images/ji3-4.jpg" alt="ji3-4" />
  </div>
  
  <div className={styles.block}>
    <h3>《猜孩子》模切貼紙</h3>
    <img className={styles.img} src="images/ji3-5.jpg" alt="ji3-5" />
  </div>
  
  <div className={styles.block}>
    <h3>[最喜歡的孩子]迷你徽章套裝</h3>
    <img className={styles.img} src="images/ji3-6.jpg" alt="ji3-6"/>
  </div>
  
  <div className={styles.block}>
    <h3>《電鋸驚魂》菲瓜特迷你牧間</h3>
    <img className={styles.img} src="images/ji3-7.jpg" alt="ji3-7"/>
  </div>
  
  <div className={styles.block}>
    <h3>《電鋸人》極光貼紙合集Vol.1</h3>
    <img className={styles.img} src="images/ji3-8.jpg" alt="ji3-8"/>
  </div>
  
  </Slider>
  
  {/* makeup */}
  <h2 className={styles.makeup} id="makeup">Makeup</h2>
  
  <div className={styles.title}>
      <h1>最新商品</h1>
  </div>
  
  
  <Slider {...settings}>
  <div className={styles.block}>
    <h3>合利他命EX Plus</h3>
    <img className={styles.img} src="images/jm1.jpg" alt="jm1" />
    <p>hhhh</p>
  </div>
  
  <div className={styles.block}>
    <h3>利他命 Medical Gold</h3>
    <img className={styles.img} src="images/jm2.jpg" alt="jm2" />
  </div>
  
  <div className={styles.block}>
    <h3> SS製藥 EVE A錠</h3>
    <img className={styles.img} src="images/jm3.jpg" alt="jm3" />
  </div>
  
  <div className={styles.block}>
    <h5>Lulu Attack CX 24片</h5>
    <img className={styles.img} src="images/jm4.jpg" alt="jm4" />
  </div>
  
  <div className={styles.block}>
    <h3>New Contac Damping Double 持久性</h3>
    <img className={styles.img} src="images/jm5.jpg" alt="jm5" />
  </div>
  
  <div className={styles.block}>
    <h3>CHIFURE BB霜0</h3>
    <img className={styles.img} src="images/jm6.png" alt="jm6"/>
  </div>
  
  <div className={styles.block}>
    <h3>Nail Nail 去光水</h3>
    <img className={styles.img} src="images/jm7.png" alt="jm7"/>
  </div>
  
  <div className={styles.block}>
    <h3>亮眼防水兩用3D 眉筆 棕褐色</h3>
    <img className={styles.img} src="images/jm8.png" alt="jm8"/>
  </div>
  
  </Slider>
  
  
  <div className={styles.title2}>
    <h1>限時優惠</h1>
  </div>
  
  
  <Slider {...settings}>
  <div className={styles.block}>
    <h3>D.UP 超激長 睫毛膏</h3>
    <img className={styles.img} src="images/jm2-1.png" alt="jm2-1" />
  </div>
  
  <div className={styles.block}>
    <h3>SUGAO 唇頰兩用慕斯 亮麗粉</h3>
    <img className={styles.img} src="images/jm2-2.png" alt="jm2-2" />
  </div>
  
  <div className={styles.block}>
    <h3>D-UP WonderEyelidTape 雙眼皮貼</h3>
    <img className={styles.img} src="images/jm2-3.png" alt="jm2-3" />
  </div>
  
  <div className={styles.block}>
    <h3>Senka Perfect Whip 膠原蛋白</h3>
    <img className={styles.img} src="images/jm2-4.jpg" alt="jm2-4" />
  </div>
  
  <div className={styles.block}>
    <h3> Senka Perfect Whip Speedy</h3>
    <img className={styles.img} src="images/jm2-5.jpg" alt="jm2-5" />
  </div>
  
  <div className={styles.block}>
    <h3>Lululun 卸妝膏 RICH MOIST</h3>
    <img className={styles.img} src="images/jm2-6.jpg" alt="jm2-6"/>
  </div>
  
  <div className={styles.block}>
    <h3>Lululun Precious RED</h3>
    <img className={styles.img} src="images/jm2-7.jpg" alt="jm2-7"/>
  </div>
  
  <div className={styles.block}>
    <h3>Arouge 保濕化妝水噴霧</h3>
    <img className={styles.img} src="images/jm2-8.png" alt="jm2-8"/>
  </div>
  
  </Slider>
  
  <div className={styles.title2}>
    <h1>現貨專區</h1>
  </div>
  
  <Slider {...settings}>
  <div className={styles.block}>
    <h3>Bison 小鼻去角質橡皮擦</h3>
    <img className={styles.img} src="images/jm3-1.png" alt="jm3-1" />
  </div>
  
  <div className={styles.block}>
    <h3>PureSmile 精萃全效滋潤面膜 </h3>
    <img className={styles.img} src="images/jm3-2.png" alt="jm3-2" />
  </div>
  
  <div className={styles.block}>
    <h3>資生堂d'program敏感話題 潔膚皂</h3>
    <img className={styles.img} src="images/jm3-3.png" alt="jm3-3" />
  </div>
  
  <div className={styles.block}>
    <h3>KOSE Softymo 嫩白卸妝 洗面乳</h3>
    <img className={styles.img} src="images/jm3-4.png" alt="jm3-4" />
  </div>
  
  <div className={styles.block}>
    <h3>Biore 藥用抗痘 洗面乳</h3>
    <img className={styles.img} src="images/jm3-5.png" alt="jm3-5" />
  </div>
  
  <div className={styles.block}>
    <h3>熊野油脂 薏仁W 洗面乳</h3>
    <img className={styles.img} src="images/jm3-6.png" alt="jm3-6"/>
  </div>
  
  <div className={styles.block}>
    <h3>ROSETTE 湖底泥  洗面乳</h3>
    <img className={styles.img} src="images/jm3-7.png" alt="jm3-7"/>
  </div>
  
  <div className={styles.block}>
    <h3>資生堂 IHADA SKIN CURE 乳液</h3>
    <img className={styles.img} src="images/jm3-8.png" alt="jm3-8"/>
  </div>
  
  </Slider>
  
  
  
  
  
  
  
  
  
            
  
         </div>
   );
  
   
     
  }
  