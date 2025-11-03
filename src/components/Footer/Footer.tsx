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
        <footer >
            <div>
                <img className="w-full" src={img} alt="" />
            </div>
            <div className="bg-[#c2b59b] h-56 py-10 flex justify-center items-center">
                <div className="flex justify-center items-end space-x-10">
                    <div className="-mb-3">
                        <img src={logo} alt="" />
                    </div>
                    <div className="space-y-4">
                        <div className="flex justify-end">
                            <p>&#91; PT · EN  · ES &#93;</p>
                        </div>
                        <div className="flex justify-end">
                            <div className="flex space-x-5 mb-3">
                                <Link to='/'>
                                    <img src={whatsap} alt="" />
                                </Link>
                                <Link to='/'>
                                    <img src={instagram} alt="" />
                                </Link>
                                <Link to='/'>
                                    <img src={facebook} alt="" />
                                </Link>
                                <Link to='/'>
                                    <img src={linkedin} alt="" />
                                </Link>
                                <Link to='/'>
                                    <img src={email} alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="md:flex space-x-5 font-semibold text-2xl">
                            <p className="text-white">quem somos</p>
                            <p>&#46;</p>
                            <p>como atuamos</p>
                            <p>&#46;</p>
                            <p>nossos projetos</p>
                            <p>&#46;</p>
                            <p>contato </p>

                        </div>
                    </div>

                </div>
            </div>

        </footer>
    )
}