
const Login = () => {
  return (
    <div className="bg-[#1D253D] h-screen lg:h-auto">
        <img src="../../../public/Plan_de_travail_3_copie_2-removebg-preview.png" alt="image" className="w-[200px]"/>
        <div className="flex flex-col items-center justify-center">
            <p className="pb-20 font-sans text-lg font-medium text-white">Se connecter</p>
            <form>
                <div className="flex flex-col items-center justify-around gap-12 md:gap-6 md:flex-row md:px-20">
                    <input type="email" placeholder="E-mail" className="text-white font-normal text-lg  border-b border-white p-2 md:w-[40%] bg-[#1D253D] w-[80%]"/>
                    <input type="password" placeholder="Mot de passe" className="text-white font-normal text-lg border-b border-white p-2 md:w-[40%] bg-[#1D253D] w-[80%]"/>
                </div>
                <div className="flex flex-col items-center justify-center gap-6 pt-16 md:gap-11 md:flex-row">
                    <button className="border-2 border-white rounded-full "><p className="p-2 font-sans text-lg font-medium text-white">Se connecter</p></button>
                    <p className="font-sans text-lg font-medium text-white">Vous n’avez pas de compte ? <a href="#"><span className="font-bold underline">S’inscrire</span></a></p>
                </div>
                <div className="px-3 pt-24">
                    <img src="../../../public/Artboard 1@4x 1.png" alt="image"/>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login