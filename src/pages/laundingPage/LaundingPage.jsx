import Footer from "../../components/Footer/Footer"

const LaundingPage = () => {
  return (
    <div className="bg-white ">
        <div className="flex pb-20 lg:pb-40">
            <div className="flex flex-col items-center md:items-start md:w-[80%]">
                <img src={"../../../public/Plan_de_travail_3_copie_3-removebg-preview.png"} alt="image" className="w-[200px]"/>
                <p className="text-[#1D253D] font-light font-sans text-4xl pl-10">Gérez toutes les informations de vos camions, matériaux etconducteurs en un seul endroit . Recevez des QR codes pour faciliter les contrôles policiers.</p>
                <div className="grid items-center justify-center grid-cols-1 gap-4 pt-4 md:pt-20 md:pl-14 md:gap-15 md:grid-cols-2">
                    <button className="bg-[#1D253D] px-5 py-2 rounded-full cursor-pointer"><p className="font-sans text-2xl font-medium text-white">Rejoignez-nous</p></button>
                    <div className="flex items-center justify-center gap-2">
                        <a href="#"><p className="text-[#1D253D] text-2xl font-medium font-sans">En savoir plus</p></a>
                        <a href="#"><img src={"../../../public/_.png"} alt="image"/></a>
                    </div>
                </div>
            </div>
            <div className="hidden md:block md:w-full">
                <img src="../../../public/LandingPage 4.png" alt="image" className="md:h-[100%] md:w-full"/>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default LaundingPage