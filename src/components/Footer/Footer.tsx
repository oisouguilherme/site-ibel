import { Link } from "react-router-dom"
import logo from "../../assets/images/logo-footer.png"
import whatsap from "../../assets/images/whatsap.png"
import instagram from "../../assets/images/instagram.png"
import facebook from "../../assets/images/facebook.png"
import linkedin from "../../assets/images/linkedin.png"
import email from "../../assets/images/email.png"
import img from "../../assets/images/img-footer.png"

export default function Footer() {
    return (
        <footer className="mt-20">
            <div>
                <img className="w-full" src={img} alt="Detalhe decorativo do rodapé" />
            </div>
            <div className="bg-[#c2b59b] h-auto py-10 flex justify-center items-center">
                <div className="flex flex-col items-center space-y-8 lg:flex-row lg:items-end lg:justify-center lg:space-y-0 lg:space-x-10">
                    <div className="lg:-mb-3">
                        <img src={logo} alt="Logo da empresa" />
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-center lg:justify-end">
                            <p>&#91; PT · EN · ES &#93;</p>
                        </div>
                        <div className="flex justify-center lg:justify-end">
                            <div className="flex space-x-5 mb-3">
                                <Link to='/'>
                                    <img src={whatsap} alt="WhatsApp" />
                                </Link>
                                <Link to='/'>
                                    <img src={instagram} alt="Instagram" />
                                </Link>
                                <Link to='/'>
                                    <img src={facebook} alt="Facebook" />
                                </Link>
                                <Link to='/'>
                                    <img src={linkedin} alt="LinkedIn" />
                                </Link>
                                <Link to='/'>
                                    <img src={email} alt="Email" />
                                </Link>
                            </div>
                        </div>
                        <div className="font-semibold text-xl text-center grid grid-cols-2 gap-x-6 gap-y-2 lg:text-2xl lg:text-left lg:flex lg:gap-0 lg:space-y-0 lg:space-x-5">

                            {/* O "text-white" continua aqui */}
                            <a href="#quemsomos" className="text-white">quem somos</a>

                            {/* Este separador 'lg:block' continua correto (escondido no mobile, visível no desktop) */}
                            <p className="hidden lg:block">&#46;</p>
                            <a href="#comofunciona">como funciona</a>

                            <p className="hidden lg:block">&#46;</p>
                            <a href="#noticias">notícias</a>

                            <p className="hidden lg:block">&#46;</p>
                            <a href="#trabalheconosco">trabalhe conosco</a>

                            <p className="hidden lg:block">&#46;</p>
                            <a href="#canalaberto">canal aberto</a>

                            <p className="hidden lg:block">&#46;</p>
                            <a href="#contato">contato</a>
                        </div>
                    </div>

                </div>
            </div>

        </footer>
    )
}