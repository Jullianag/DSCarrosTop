import './styles.css';
import cardImg from '../../assets/card.png';

export default function CardCar() {

    return (
        <div className="ds-card-car">
            <img src={cardImg} alt="Carro"/>
            <p>Lorem ipsum dolor</p>
        </div>
    );
}