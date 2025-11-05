import ico8 from "../../../assets/images/ico-8.png";
import ico9 from "../../../assets/images/ico-9.png";
import fundoSafs from "../../../assets/images/fundoSafs.png";
import img1 from "../../../assets/images/safs-1.png";
import img2 from "../../../assets/images/safs-2.png";
import img3 from "../../../assets/images/safs-3.png";

export default function OqueSaoSafs() {
    return (
        <main className="md:-translate-y-20">
            <section className="grid md:grid-cols-12 md:gap-x-8 items-start md:mt-0 mt-20 overflow-x-clip">
                <div className="md:col-start-1 md:col-span-5 hidden md:block z-20 -mt-96">
                    <img src={ico8} alt="" />
                </div>
                <div className="md:col-start-6 md:col-span-4 col-span-12 px-4 md:px-0 z-10 md:mb-0 mb-10">
                    <div className="md:w-[37rem] text-lg md:text-right text-center ml-auto">
                        <p className="font-extrabold text-[#3A451F]">O que são SAFs</p>
                        <h3 className="text-[#3A451F] md:text-4xl text-2xl font-bold mb-5">
                            Sistemas Agroflorestais: natureza <br />
                            e economia de mãos dadas
                        </h3>
                        <p className="mb-3">
                            Os Sistemas Agroflorestais (SAFs) combinam árvores nativas,
                            frutíferas e cultivos agrícolas, criando áreas produtivas que
                            recuperam o solo, aumentam a biodiversidade e geram renda.
                        </p>
                        <p>
                            No Ibel, os SAFs são planejados junto às comunidades,
                            respeitando saberes tradicionais e fortalecendo modos de vida.
                        </p>
                    </div>
                </div>
                <div className="md:col-start-8 md:col-span-5 hidden md:block z-20 -mt-80 aqui">
                    <img src={ico9} alt="" className="ml-auto object-contain" />
                </div>
                <div className="md:col-start-5 md:col-span-4 col-span-12 px-4 md:px-0 z-10 md:-mt-[35rem] md:mb-0 mb-10">
                    <div className="text-lg md:text-right text-center ml-auto">
                        <p className="mb-3 text-[#C2B59B] font-extrabold text-3xl">
                            Os SAFs podem multiplicar
                            em até 10 vezes a renda
                            por hectare, comparados à
                            pecuária extensiva.
                        </p>
                    </div>
                </div>
            </section>
            <section className="grid md:-mt-52">
                <div className="row-start-1 col-start-1 z-0">
                    <img className="w-full h-full object-cover" src={fundoSafs} alt="" />
                </div>
                <div className="row-start-1 col-start-1 z-10 relative mb-96">
                    <div className="container mx-auto px-4 md:px-0 pt-32 md:pt-64 pb-20">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-white -mt-20">
                            <div className="text-center text-2xl">
                                <p className="font-extrabold">Missão</p>
                                <p>
                                    Regenerar terras
                                    degradadas, fortalecendo
                                    comunidades e criando
                                    paisagens produtivas,
                                    diversas e sustentáveis.
                                </p>
                            </div>
                            <div className="text-center text-2xl">
                                <p className="font-extrabold">Visão</p>
                                <p>
                                    Ser referência até 2030 na
                                    restauração produtiva no
                                    Brasil, unindo inovação,
                                    colaboração e impacto
                                    socioambiental.
                                </p>
                            </div>
                            <div className="text-center text-2xl">
                                <p className="font-extrabold">Valores</p>
                                <p>
                                    Colaboração, respeito
                                    à diversidade, inovação
                                    com propósito, justiça
                                    socioambiental,
                                    compromisso climático e
                                    esperança em ação.
                                </p>
                            </div>
                        </div>
                        <div className="md:mt-28 mt-10  md:grid flex grid-cols-1 md:grid-cols-3 gap-8">
                            <div>
                                <img className="w-full h-full object-contain" src={img1} alt="" />
                            </div>
                            <div>
                                <img className="w-full h-full object-contain" src={img2} alt="" />
                            </div>
                            <div>
                                <img className="w-full h-full object-contain" src={img3} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}