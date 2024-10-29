import Contact from "./Contact"

const LiensPopulaires = () => {
  return (
    <div className="flex flex-col gap-8">
        <p className="font-sans text-xl font-medium text-white">Liens Populaires</p>
        <div className="flex flex-col gap-6">
            <Contact src={"../../../public/flech.png"} text={"À Propos de Nous"} />
            <Contact src={"../../../public/flech.png"} text={"Contactez-Nous"} />
            <Contact src={"../../../public/flech.png"} text={"Politique de Confidentialité"} />
            <Contact src={"../../../public/flech.png"} text={"Conditions d'Utilisation"} />
        </div>
    </div>
  )
}

export default LiensPopulaires