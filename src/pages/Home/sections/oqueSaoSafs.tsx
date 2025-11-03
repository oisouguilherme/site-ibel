import ico8 from "../../../assets/images/ico-8.png"
import ico9 from "../../../assets/images/ico-9.png"
import fundoSafs from "../../../assets/images/fundoSafs.png"
import img1 from "../../../assets/images/safs-1.png"
import img2 from "../../../assets/images/safs-2.png"
import img3 from "../../../assets/images/safs-3.png"

export default function OqueSaoSafs() {
    return (
        <div className="md:mt-[30rem]">
            <div className="relative md:pr-0 pr-5 md:mt-0 mt-20">
                <img className="md:absolute left-0 -top-80 z-20" src={ico8} alt="" />
            </div>
            <div className="container md:mt-0 mt-10">
                <div className="container flex justify-end">
                    <div className="md:w-[37rem] text-lg text-right">
                        <p className="font-extrabold text-[#3A451F]">O que são SAFs</p>
                        <h3 className="text-[#3A451F] text-4xl font-bold mb-5">
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
            </div>
            <div className="relative md:mt-0 mt-10 md:pl-0 pl-5">
                <img className="md:absolute right-0 -top-0 z-20" src={ico9} alt="" />
            </div>
            <div className="container md:mt-64 mt-10">
                <div className="container flex justify-end">
                    <div className="md:w-[50rem] text-lg text-right md:pr-64">
                        <p className="mb-3 text-[#C2B59B] font-extrabold text-4xl">
                            Os SAFs podem multiplicar
                            em até 10 vezes a renda
                            por hectare, comparados à
                            pecuária extensiva.
                        </p>
                    </div>

                </div>
            </div>
            <div className="relative mt-64">
                <img className="absolute top-0 w-full" src={fundoSafs} alt="" />
            </div>
            <div className="container relative z-10 mt-[30rem]">
                <div className="flex justify-between space-x-10 text-white">
                    <div className="text-center text-2xl w-72">
                        <p className="font-extrabold">Missão</p>
                        <p>
                            Regenerar terras
                            degradadas, fortalecendo
                            Regenerar terras
                            comunidades e criando
                            paisagens produtivas,
                            diversas e sustentáveis.
                        </p>
                    </div>
                    <div className="text-center text-2xl w-72">
                        <p className="font-extrabold">Visão</p>
                        <p>
                            Ser referência até 2030 na
                            restauração produtiva no
                            Brasil, unindo inovação,
                            colaboração e impacto
                            socioambiental.
                        </p>
                    </div>
                    <div className="text-center text-2xl w-72">
                        <p className="font-extrabold">Valores</p>
                        <p>
                            Colaboração, respeito
                            à diversidade, inovação
                            Colaboração, respeito
                            com propósito, justiça
                            socioambiental,
                            compromisso climático e
                            esperança em ação.
                        </p>
                    </div>
                </div>
                <div className="mt-20">
                    <div className="flex justify-between">
                        <div>
                            <img className="w-80" src={img1} alt="" />
                        </div>
                        <div>
                            <img className="w-80" src={img2} alt="" />
                        </div>
                        <div>
                            <img className="w-80" src={img3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}