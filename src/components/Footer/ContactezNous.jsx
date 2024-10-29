import Contact from "./Contact"

const ContactezNous = () => {
  return (
    <div className="flex flex-col gap-8">
        <p className="font-sans text-xl font-medium text-white">Contactez-Nous</p>
        <div className="flex flex-col gap-2">
            <Contact src={"../../../public/localisation.png"} text={"10 Rue des Frères OUDEK, El Harrach,"} />
            <Contact src={"../../../public/appel.png"} text={"04234523"} />
            <Contact src={"../../../public/sms.png"} text={"support@example.com"} />
        </div>
    </div>
  )
}

export default ContactezNous