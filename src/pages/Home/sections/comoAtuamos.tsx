import React from "react";
import ico7 from "../../../assets/images/ico-7.png";
import fundo from "../../../assets/images/fundo-1.png";
import b1 from "../../../assets/images/bloco-1.png";
import b2 from "../../../assets/images/bloco-2.png";
import b3 from "../../../assets/images/bloco-3.png";
import b4 from "../../../assets/images/bloco-4.png";
import b5 from "../../../assets/images/bloco-5.png";
import b6 from "../../../assets/images/bloco-6.png";
import b7 from "../../../assets/images/bloco-7.png";
import b8 from "../../../assets/images/bloco-8.png";

const blocosAtuacao = [
    { id: 1, img: b1, titulo: <>Formação de técnicos <br /> e profissionais</> },
    { id: 2, img: b2, titulo: <>Desenvolvimento <br /> de Multiplicadores</> },
    { id: 3, img: b3, titulo: <>Apoio a fornecedores <br /> e operadores locais</> },
    { id: 4, img: b4, titulo: <>Incubação de <br /> inovações</> },
    { id: 5, img: b5, titulo: <>Difusão de boas <br /> práticas</> },
    { id: 6, img: b6, titulo: <>Proposição de <br /> políticas públicas</> },
    { id: 7, img: b7, titulo: <>Articulação entre <br /> empresas, governos, <br /> ONGs e comunidades</> },
    { id: 8, img: b8, titulo: <>Implantação <br /> de Sistemas <br /> Agroflorestais (SAFs)</> },
];

interface BlocoCardProps {
    imagem: string;
    titulo: React.ReactNode;
}

function BlocoCard({ imagem, titulo }: BlocoCardProps) {
    return (
        <div className="w-52 h-48 flex flex-col gap-2 overflow-hidden ">
            <div className="flex-1 overflow-hidden md:block flex md:justify-start justify-center">
                <img className="w-24" src={imagem} alt="" />
            </div>
            <div className="px-4 pb-4">
                <div>
                    <p className="text-sm font-extrabold">{titulo}</p>
                </div>
                <div className="border-b-[3px] border-[#636E3B] mt-2"></div>
            </div>
        </div>
    );
}

export default function ComoAtuamos() {
    return (
        <main className="md:mt-20 mt-10">
            <section className="grid md:grid-cols-12 md:gap-x-8 items-start">
                <div className="md:col-start-4 lg:col-start-4 md:col-span-6 lg:col-span-4 col-span-12 px-4 md:px-0 z-10">
                    <div className=" text-lg">
                        <p className="font-extrabold text-[#3A451F]">Como atuamos</p>
                        <h3 className="text-[#3A451F] text-4xl font-bold mb-5">
                            Restauração produtiva <br />
                            e Impacto Positivo
                        </h3>
                        <div className="md:w-[35rem]">
                            <p className="mb-3">
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
                <div className="md:col-start-9 md:col-span-4 lg:col-span-5 col-span-12 hidden md:block md:-mt-36 lg:-mt-64 relative z-20">
                    <img className="w-full ml-auto" src={ico7} alt="" />
                </div>
            </section>
            <section className="grid md:-mt-20">
                <div className="row-start-1 col-start-1 z-0 hidden md:flex justify-start md:-translate-y-36 lg:md:-translate-y-96">
                    <img className="md:translate-y-40" src={fundo} alt="" />
                </div>
                <div className="row-start-1 col-start-1 z-10 relative md:mt-0 mt-20">
                    <div className="container mx-auto px-4 md:px-0">
                        <p className="text-[#3A451F] text-4xl font-bold">Blocos de atuação</p>
                        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-20 md:place-items-start place-items-center">
                            {blocosAtuacao.map((bloco) => (
                                <BlocoCard
                                    key={bloco.id}
                                    imagem={bloco.img}
                                    titulo={bloco.titulo}
                                />
                            ))}
                        </div>
                    </div>
                </div>

            </section>
        </main>
    );
}