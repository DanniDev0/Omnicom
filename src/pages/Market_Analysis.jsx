import React from 'react'
import Title from '../components/Title';
import '../assets/style/Market_Analysis.css'
import ImageHover from '../components/ImageHover';
import Electricidad from '../assets/img/electricidad.jpg';
import Comercial from '../assets/img/comercial.png';
import Institucional from '../assets/img/institucional.png';
import Residencial from '../assets/img/residencial.png';
import Energia from '../assets/img/energia.jpg';
import Titleh2 from '../components/Titleh2';
import CardMarket from '../components/CardMarket';

export const Market_Analysis = () => {
    return (
        <div>
            <section className='animate-container'>
                <Title text="MARKET ANALYSIS" />
                <div className="market-image">
                    <ImageHover 
                        Image={Electricidad}
                        Name="Electricidad"
                        Title="Growth of the electrical and HVAC sector in Virginia"
                        Text="The Virginia electrical and HVAC market is projected to grow at a compound annual rate of 4.5% over the next five years, with a particular focus on Northern Virginia due to increased investments in infrastructure and residential projects"
                    />
                    <ImageHover 
                        Image={Energia}
                        Name="Energia"
                        Title="Increased demand for energy solutions"
                        Text="Growing awareness of climate change and the quest for energy efficiency drive demand for renewable and efficient solutions, especially in urban and suburban areas of Northern Virginia"
                    />
                </div>
            </section>
            <section>
                <Titleh2 text="Target Sectors"/>
                <div className="three-columns">
                    <CardMarket
                        Icon={Residencial}
                        Name="Residencial"
                        Title="Residential"
                        Text="Homeowners interested in electrical and energy efficiency improvements."
                    />
                    <CardMarket
                        Icon={Comercial}
                        Name="Comercial"
                        Title="Comercial"
                        Text="Companies and offices seeking to improve energy efficiency and reduce operating costs."
                    />
                    <CardMarket
                        Icon={Institucional}
                        Name="Institucional"
                        Title="Institucional"
                        Text="Churches, schools and government buildings requiring high energy load solutions."
                    />
                </div>
            </section>
        </div>
    )
}

export default Market_Analysis;