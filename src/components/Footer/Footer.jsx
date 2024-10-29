import AProposNous from "./AProposNous"
import ContactezNous from "./ContactezNous"
import LiensPopulaires from "./LiensPopulaires"

const Footer = () => {
  return (
    <div className="flex items-center justify-center flex-col bg-[#1D253D]">
      <div className="grid items-center justify-center grid-cols-1 gap-20 px-4 py-8 md:grid-cols-3 md:px-20">
        <AProposNous />
        <ContactezNous />
        <LiensPopulaires />
      </div>
      <div className="w-[80%] items-center justify-center border-t" style={{borderTopColor:'rgba(249, 250, 251, 0.10)'}}></div>
      <div className="items-center justify-center px-4 md:px-0">
        <p className="py-6 text-base font-normal text-white text-sans">Droits {"d'Auteur"} © Votre Entreprise | Tous droits réservés.</p>
      </div>
    </div>
  )
}

export default Footer