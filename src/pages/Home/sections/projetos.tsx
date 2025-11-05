// Página: Projetos.tsx

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Carrousel from "../../../components/Carousel/Carousel";
import seta1 from "../../../assets/images/seta-1.png"
import seta2 from "../../../assets/images/seta-2.png"

export default function Projetos() {
    const projetos = [
        {
            id: 1,
            titulo: 'Marajó Resiliente',
            descricao: 'Cultivando esperança e fortalecendo comunidades tradicionais diante das mudanças climáticas.',
            imagem: '/img/marajo-img.png',
            corBlob: 'bg-[#98a652]',
        },
        {
            id: 2,
            titulo: 'Águas do Marajó',
            descricao: 'Segurança hídrica e alimentar para transformar a abundância em vida.',
            imagem: '/img/aguas-do-marajo-img.png',
            corBlob: 'bg-[#5a2c6d]',
        },
        {
            id: 3,
            titulo: 'Diálogos',
            descricao: 'Conectando empresas, governos e comunidades para destravar a restauração.',
            imagem: '/img/aguas-do-marajo-img.png',
            corBlob: 'bg-[#e48f32]',
        },
        {
            id: 4,
            titulo: 'Águas do Marajó',
            descricao: 'Segurança hídrica e alimentar para transformar a abundância em vida.',
            imagem: '/img/marajo-img.png',
            corBlob: 'bg-[#5a2c6d]',
        },
    ];

    return (
        <div>
            <div className="container relative z-20 md:-mt-[40rem] -mt-[19rem]" id='projetos'>
                <div className="text-[#39085C] font-extrabold">
                    <p className="text-lg">Projetos</p>
                    <h3 className="md:text-4xl text-2xl">Onde a restauração acontece</h3>
                </div>
            </div>

            <div className="relative w-full py-16 md:mt-40 mt-10">
                <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    slidesPerView={'auto'}
                    spaceBetween={200}
                    centeredSlides={true}
                    pagination={{
                        el: '.swiper-pagination-custom',
                        clickable: true,
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next-custom',
                        prevEl: '.swiper-button-prev-custom',
                    }}
                    className="!overflow-x-hidden"
                >
                    {projetos.map((projeto) => (
                        <SwiperSlide
                            key={projeto.id}
                            className="!w-72 md:!w-80"
                        >
                            <Carrousel
                                titulo={projeto.titulo}
                                descricao={projeto.descricao}
                                imagem={projeto.imagem}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="absolute w-full justify-between md:px-40 -bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-16">
                    <button className="swiper-button-prev-custom p-2 rounded-full text-[#5a2c6d] transition-opacity hover:opacity-70 disabled:opacity-30">
                        <img src={seta1} alt="" />
                    </button>

                    <div className="swiper-pagination-custom !relative !bottom-auto !top-auto !w-auto flex gap-2" />

                    <button className="swiper-button-next-custom p-2 rounded-full text-[#5a2c6d] transition-opacity hover:opacity-70 disabled:opacity-30">
                        <img src={seta2} alt="" />
                    </button>
                </div>
            </div>
            <div className='md:mt-40 mt-20 flex justify-center'>
                <div className='text-center'>
                    <div className='text-[#5A6345] font-bold text-3xl mb-10 md:w-[36rem] mx-auto'>
                        <p>
                            A restauração produtiva é o caminho
                            que une passado, presente e futuro:
                        </p>
                    </div>
                    <div className='text-3xl text-[#5A6345] mb-20'>
                        <p>
                            Cura o clima. Impulsiona a economia. Transforma vidas.
                        </p>
                    </div>
                    <div className='text-3xl font-extrabold text-[#FCB651] md:w-[36rem] mx-auto'>
                        <p>
                            Faça parte da construção
                            de um Brasil regenerativo.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}