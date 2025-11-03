import React from "react" // Importar React é necessário para os fragmentos (<>...<>)
import ico7 from "../../../assets/images/ico-7.png"
import fundo from "../../../assets/images/fundo-1.png"
import b1 from "../../../assets/images/bloco-1.png"
import b2 from "../../../assets/images/bloco-2.png"
import b3 from "../../../assets/images/bloco-3.png"
import b4 from "../../../assets/images/bloco-4.png"
import b5 from "../../../assets/images/bloco-5.png"
import b6 from "../../../assets/images/bloco-6.png"
import b7 from "../../../assets/images/bloco-7.png"
import b8 from "../../../assets/images/bloco-8.png"

// 1. DADOS DOS BLOCOS
// Criamos a const com os dados que mudam
const blocosAtuacao = [
    {
        id: 1,
        img: b1,
        titulo: <>Formação de técnicos <br /> e profissionais</>,
    },
    {
        id: 2,
        img: b2,
        titulo: <>Desenvolvimento <br /> de Multiplicadores</>,
    },
    {
        id: 3,
        img: b3,
        titulo: <>Apoio a fornecedores <br /> e operadores locais</>,
    },
    {
        id: 4,
        img: b4,
        titulo: <>Incubação de <br /> inovações</>,
    },
    {
        id: 5,
        img: b5,
        titulo: <>Difusão de boas <br /> práticas</>,
    },
    {
        id: 6,
        img: b6,
        titulo: <>Proposição de <br /> políticas públicas</>,
    },
    {
        id: 7,
        img: b7,
        titulo: <>Articulação entre <br /> empresas, governos, <br /> ONGs e comunidades</>,
    },
    {
        id: 8,
        img: b8,
        titulo: <>Implantação <br /> de Sistemas <br /> Agroflorestais (SAFs)</>,
    },
];

interface BlocoCardProps {
    imagem: string;
    titulo: React.ReactNode;
}

function BlocoCard({ imagem, titulo }: BlocoCardProps) {
    return (
        <div className="w-52 h-48 flex flex-col gap-2 overflow-hidden">
            <div className="flex-1 overflow-hidden">
                <img className="w-24" src={imagem} />
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


// 3. SEU COMPONENTE PRINCIPAL
export default function ComoAtuamos() {
    return (
        <div className="md:mt-20 -mt-20">
            <div className="relative">
                <img className="md:absolute right-0 -top-64 z-20" src={ico7} alt="" />
            </div>
            <div className="container">
                <div className="md:w-[35rem] text-lg">
                    <p className="font-extrabold text-[#3A451F]">Como atuamos</p>
                    <h3 className="text-[#3A451F] text-4xl font-bold mb-5">
                        Restauração produtiva <br />
                        e Impacto Positivo
                    </h3>
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
            <div className="relative md:block hidden">
                <img className="absolute top-40 left-0" src={fundo} alt="" />
            </div>
            <div className="md:mt-96 container relative z-20">
                <p className="text-[#3A451F] text-4xl font-bold">Blocos de atuação</p>
                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-20 place-items-start">
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
    );
}