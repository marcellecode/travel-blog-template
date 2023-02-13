import "./Banner.scss";
import backgroundImage from "../../assets/img/shot-by-cerqueira-8qH4GSYBiSA-unsplash.jpg";

const Banner = () => {
    return(
        <div className="banner-container">
            <div className="banner-content">
                <span> Passeios por todo o estado do Rio</span>
                <button>saiba mais</button>
            </div>
            <img src={backgroundImage} alt="" />
        </div>
    );
}

export default Banner;