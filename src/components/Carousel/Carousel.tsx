interface SlideCardProps {
    titulo: string;
    descricao: string;
    imagem: string;
}

export default function Carrousel({
    titulo,
    descricao,
    imagem,
}: SlideCardProps) {
    return (
        <div className={`
            flex flex-col items-center gap-6 
            transition-all duration-300 ease-in-out
        `}>
            <div className="relative w-64 h-64 md:w-[26rem] md:h-[25rem] flex items-center justify-center">
                <div className={`
                    absolute inset-0 
                    z-10
                    transition-all duration-500 ease-in-out
                `} />
                <div className={`
                    relative overflow-hidden z-20
                    transition-all duration-300 ease-in-out
                `}>
                    <img
                        src={imagem}
                        alt={titulo}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
            <div className="text-center">
                <h3 className="text-xl font-bold mb-2">{titulo}</h3>
                <p className="text-sm text-gray-700">{descricao}</p>
            </div>
        </div>
    );
}