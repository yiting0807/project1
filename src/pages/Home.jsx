import Header from "../compenents/header"
import Content from "../compenents/content"
import Footer from "../compenents/footer"
import Slider from "react-slick";


function Home() {
    return (
      <div className="container main-layout">
        <Header className="layout-header"/>
        <Content/>
        <Footer/>
      </div>
    );
}

    
export default Home;