import './styles.css';
import Header from "../../components/Header";
import Visit from "../../components/Visit";
import CardCar from "../../components/CardCar";
import CardComments from "../../components/CardComments";
import Footer from "../../components/Footer";

export default function Catalog() {

    return (
        <>
            <Header/>
            <main className="ds-catalog-main">
                <section id="ds-catalog-section" className="ds-container">
                    <div className="ds-visit-container">
                        <Visit/>
                    </div>

                    <div className="ds-catalog-cards-container">
                        <CardCar/>
                        <CardCar/>
                    </div>
                </section>
                <section>
                    <div className="ds-catalog-section-comments">
                        <div className="ds-talk">O que estão dizendo</div>
                        <CardComments/>
                        <CardComments/>
                        <CardComments/>
                        <CardComments/>
                        <CardComments/>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
}