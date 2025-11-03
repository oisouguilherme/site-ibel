import whatsap from "../../../assets/images/whatsap.png"
import instagram from "../../../assets/images/instagram.png"
import facebook from "../../../assets/images/facebook.png"
import linkedin from "../../../assets/images/linkedin.png"
import email from "../../../assets/images/email.png"
import img1 from "../../../assets/images/img-1.png"
import img2 from "../../../assets/images/ico-verde.png"
import img3 from "../../../assets/images/ico-4.png"
import img4 from "../../../assets/images/ico-3.png"
import img5 from "../../../assets/images/ico-5.png"
import img6 from "../../../assets/images/ico-6.png"


import { Link } from "react-router-dom";

export default function QuemSomos() {
    return (
        <div className="bg-[#C2B59B] pb-64">
            <div className="banner md:block hidden md:h-[590px]"></div>
            <div className="container mx-auto ">
                <div className="">
                    <div className="flex justify-end md:mr-48">
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
                        <p className="text-[#ba5715]">quem somos</p>
                        <p>&#46;</p>
                        <p>como atuamos</p>
                        <p>&#46;</p>
                        <p>nossos projetos</p>
                        <p>&#46;</p>
                        <p>contato </p>
                        <p>&#91; PT · EN  · ES &#93;</p>
                    </div>
                </div>
                <div className="mt-20">
                    <div>
                        <h1 className="text-5xl font-bold">
                            Restaurar a terra é devolver <br />
                            vida e entregar futuro.
                        </h1>
                        <p className="md:w-[32rem] text-xl mt-10">
                            O Instituto Belterra - Ibel restaura muito além
                            de terras improdutivas: regenera vidas, fortalece
                            economias e devolve à biodiversidade o seu
                            lugar de abundância.
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-20 relative ">
                <div className="md:absolute right-0 -top-60 flex z-20">
                    <img className=" md:w-[55rem]" src={img1} alt="" />
                </div>
                <div className="md:absolute right-0 bottom-[-55rem] md:flex z-10 hidden">
                    <img className="md:w-[48rem]" src={img4} alt="" />
                </div>
                <div className="absolute md:right-[52rem] top-3 grid place-items-center z-10">
                    <img src={img2} alt="" className="row-start-1 col-start-1" />
                    <p className="row-start-1 col-start-1 text-center font-semibold text-white text-2xl">
                        Conheça <br />
                        nossos<br />
                        projetos<br />
                    </p>
                </div>
            </div>

            <div className="md:bg-[#C2B59B]  bg-[#DDD6C7] md:mt-64 mt-10 container mx-auto">
                <div className="pb-10 relative">
                    <div className="absolute -top-36 -left-44 z-0 md:block hidden">
                        <img className="md:w-[60rem]" src={img3} alt="" />
                    </div>
                    <div className="relative z-10 ">
                        <div className="mb-5 text-[#ba5715]">
                            <p className="font-bold">Quem somos</p>
                            <h2 className="text-4xl font-semibold">
                                Transformando terras, <br />
                                vidas, comunidades!
                            </h2>
                        </div>
                        <div className="md:w-[35rem] text-lg">
                            <p className="mb-5">
                                No Ibel, unimos a prática concreta em campo à visão estratégica
                                do desenvolvimento territorial. Atuamos implementando Sistemas
                                Agroflorestais (SAFs), apoiando comunidades locais e gerando
                                evidências sobre o que funciona - e o que não funciona - em
                                processos de restauração e desenvolvimento territorial.
                            </p>
                            <p>
                                Acreditamos que só é possível impulsionar esse ecossistema
                                unindo ação no território com articulação estratégica. Essa
                                combinação “pé no chão” junto às comunidades, aliado à visão
                                ampla de desenvolvimento , é o que nos move e nos diferencia.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative">
                <div className="md:absolute left-0 -top-5 z-20">
                    <img className="md:w-[56rem]" src={img6} alt="" />
                </div>
            </div>
            <div className="md:bg-[#C2B59B]  bg-[#DDD6C7] md:mt-64 mt-5 container mx-auto flex justify-end">
                <div className="pb-10 relative aqui">

                    <div className="absolute md:block hidden md:w-[60rem] -top-64 md:-right-32 z-0">
                        <img className="md:w-[60rem]" src={img5} alt="" />
                    </div>
                    <div className="relative z-10 ">
                        <div className="md:w-[35rem] text-lg mt-14">
                            <p className="mb-3">
                                O Brasil tem mais de 100 milhões de hectares de terras
                                degradadas. Esse é um dos maiores desafios, e também
                                uma das maiores oportunidades, do nosso tempo.
                            </p>
                            <p className="mb-3">
                                Se restaurarmos apenas uma parte dessas áreas, como
                                os 12 milhões de hectares assumidos pelo Brasil no
                                Acordo de Paris, podemos:
                            </p>
                            <ul className="list-none mt-5">
                                <li className="flex items-center mb-3">
                                    <span className="w-3 h-3 bg-[#ba5715] rounded-full mr-3 inline-block"></span>
                                    Criar 5,2 milhões de empregos
                                </li>
                                <li className="flex items-center mb-3">
                                    <span className="w-3 h-3 bg-[#ba5715] rounded-full mr-3 inline-block"></span>
                                    Movimentar R$ 776 bilhões em receita
                                </li>
                                <li className="flex items-center mb-3">
                                    <span className="w-3 h-3 bg-[#ba5715] rounded-full mr-3 inline-block"></span>
                                    Produzir 156 milhões de toneladas de alimentos
                                </li>
                                <li className="flex items-center mb-3">
                                    <span className="w-3 h-3 bg-[#ba5715] rounded-full mr-3 inline-block"></span>
                                    Remover 4,3 bilhões de toneladas de CO² da atmosfera
                                </li>
                            </ul>
                            <p>
                                O Instituto Belterra nasceu, em 2020, para liberar esse
                                potencial. Nossa missão é regenerar terras e construir um
                                Brasil mais justo, próspero e sustentável.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}