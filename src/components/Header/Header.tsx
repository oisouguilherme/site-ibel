import whatsap from "../../assets/images/whatsap.png"
import instagram from "../../assets/images/instagram.png"
import facebook from "../../assets/images/facebook.png"
import linkedin from "../../assets/images/linkedin.png"
import email from "../../assets/images/email.png"
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header className="bg-[#C2B59B]">
            <div className="banner md:h-[590px] w-full h-32"></div>
            <div className="container mx-auto px-4 py-8 md:py-12">
                <div className="flex justify-center md:justify-end md:mr-48">
                    <div className="flex space-x-5 mb-6 md:mb-3">
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
                <div className="font-semibold text-lg text-center space-y-3 
                                md:flex md:space-x-5 md:text-2xl md:text-left md:space-y-0">
                    <a href="#quemsomos" className="text-[#ba5715]">quem somos</a>
                    <p className="hidden md:block">&#46;</p>
                    <a href="#comoatuamos">como atuamos</a>
                    <p className="hidden md:block">&#46;</p>
                    <a href="#projetos">nossos projetos</a>
                    <p className="hidden md:block">&#46;</p>
                    <a href="#contato">contato </a>
                    <p>&#91; PT · EN · ES &#93;</p>
                </div>
            </div>
        </header>
    )
}