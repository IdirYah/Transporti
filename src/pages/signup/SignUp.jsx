
const SignUp = () => {
  return (
    <div className="lg:flex">
        <div className="bg-white flex-col flex h-screen md:pb-7 md:h-auto lg:pb-36">
            <div className="flex items-center justify-evenly md:justify-between md:pr-14 lg:justify-start">
                <img src={"../../../public/Plan_de_travail_3_copie_3-removebg-preview.png"} alt="image" className="w-[100px] md:w-[300px] pt-3 md:pl-14"/>
                <div className="flex gap-4 lg:hidden">
                    <a href="#"><p className="text-[#1D253D] font-sans font-normal text-base">Acceuil</p></a>
                    <a href="#"><p className="text-[#1D253D] font-sans font-normal text-base">En savoir plus</p></a>
                </div>
            </div>
            <form>
                <div className="flex flex-col gap-5 md:gap-13 items-center md:items-start md:justify-start justify-center md:pl-20">
                    <p className="text-[#1D253D] font-sans text-4xl font-normal pt-9 md:pt-0">{"S'inscrire"}</p>
                    <input type="text" placeholder="Nom de l’entreprise" className="text-[#4F4F4F] font-normal text-lg bg-white border-b border-gray-400 p-2 w-[80%]"/>
                    <input type="email" placeholder="E-mail" className="text-[#4F4F4F] font-normal text-lg bg-white border-b border-gray-400 p-2 w-[80%]"/>
                    <input type="password" placeholder="Mot de passe" className="text-[#4F4F4F] font-normal text-lg bg-white border-b border-gray-400 p-2 w-[80%]"/>
                    <input type="password" placeholder="Répétez votre mot de passe" className="text-[#4F4F4F] font-normal text-lg bg-white border-b border-gray-400 p-2 w-[80%]"/>
                    <div className="flex gap-3 items-center w-[80%] pt-3">
                        <input type="checkbox" className="bg-white shrink-0 w-4 h-4 rounded"/>
                        <p className="text-[#4F4F4F] font-normal text-lg">{"J'accepte"} toutes les déclarations concernant <span className="font-bold underline">les conditions de service</span></p>
                    </div>
                    <div className="flex gap-3 items-center pt-4 md:pt-0 w-[80%]">
                        <button className="bg-[#1D253D] p-3 md:px-8 md:py-4 rounded-full cursor-pointer"><p className="font-sans text-2xl font-medium text-white">{"S'inscrire"}</p></button>
                        <p className="text-[#4F4F4F] font-normal text-lg">Vous êtes déjà un membre ? <a href="#"><span className="font-bold underline">Se connecter</span></a></p>
                    </div>
                </div>
            </form>
        </div>
        <div className="bg-[#1D253D] hidden lg:block lg:w-[55%]">
            <div className="flex items-center justify-end lg:gap-24 pt-16 pr-16">
                <a href="#"><p className="text-white font-sans font-normal text-base">Acceuil</p></a>
                <a href="#"><p className="text-white font-sans font-normal text-base">En savoir plus</p></a>
            </div>
            <div className="relative min-h-screen">
                <img src={"../../../public/Mesa de trabajo 1@4x 2.png"} alt="image" className="absolute top-0 left-0 -mt-2 -ml-16"/>
                <img src={"../../../public/Artboard 1df@4x 3.png"} alt="image" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-40"/>
            </div>
        </div>
    </div>
  )
}

export default SignUp