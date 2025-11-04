
import ComoAtuamos from "./sections/comoAtuamos";
import OqueSaoSafs from "./sections/oqueSaoSafs";
import Projetos from "./sections/projetos";
import QuemSomos from "./sections/quemSomos";


export default function HomePage() {
  return (
    <div>
      <QuemSomos />
      <ComoAtuamos />
      <OqueSaoSafs />
      <Projetos/>
    </div>
  );
}