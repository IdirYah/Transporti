import Element from "../../components/SavoirPlus/Element"
import Footer from "../../components/Footer/Footer"

const SavoirPlus = () => {
  return (
      <div>
        <div className="flex flex-col pb-5 bg-white">
          <div className="flex items-center justify-between">
            <img src={"../../../public/Plan_de_travail_3_copie_3-removebg-preview.png"} alt="image" className="w-[100px] md:w-[300px] pt-3 md:pl-14"/>
            <div className="flex items-center gap-4 pr-4 lg:gap-20 md:pr-20">
              <a href="#"><p className="text-[#1D253D] font-sans font-normal text-base">Acceuil</p></a>
              <a href="#"><button className="border-[#1D253D] rounded-full border-2"><p className="text-[#1D253D] font-sans font-normal text-base p-3">Rejoignez-nous</p></button></a>
            </div>
          </div>
          <div className="pl-3 md:flex md:items-center md:pl-14">
            <div className="flex flex-col gap-6 pt-5 pr-3 lg:gap-14 md:pt-0">
              <Element text={"Historique détaillé des trajets et des livraisons pour une meilleure traçabilité."} src={"../../../public/icons8-history-80 1.png"}/>
              <Element text={"Intégration facile avec vos systèmes existants pour une gestion fluide."} src={"../../../public/icons8-project-management-80 1.png"}/>
              <Element text={"Sécurisation des données "} src={"../../../public/icons8-security-lock-100 1.png"}/>
            </div>
            <div className="hidden md:block">
              <img src="../../../public/Group 32.png" alt="image"/>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="hidden md:block md:pl-20 md:pt-10">
              <img src="../../../public/Group 31.png" alt="image"/>
            </div>
            <div className="flex flex-col gap-6 pt-8 pl-3 lg:gap-14 md:pr-3 md:pl-20 md:pt-0">
              <Element text={"Un QR code contenant toutes les informations de vos camions, chauffeurs et citernes."} src={"../../../public/icons8-qr-code-100 1.png"} />
              <Element text={"Contrôle facile de vos trajets et camions avec une interface conviviale."} src={"../../../public/icons8-truck-100 1.png"} />
              <Element text={"Votre outil pour numériser l'ensemble du processus de transport des matières dangereuses."} src={"../../../public/icons8-computer-80 1.png"}/>
            </div>
          </div>
        </div>
        <Footer />
      </div>
  )
}

export default SavoirPlus