
import ComoAtuamos from "./sections/comoAtuamos";
import OqueSaoSafs from "./sections/oqueSaoSafs";
import QuemSomos from "./sections/quemSomos";


export default function HomePage() {
  return (
    <div>
      <QuemSomos />
      <ComoAtuamos />
      <OqueSaoSafs />
      
      <div className="h-screen">

      </div>

    </div>
  );
}