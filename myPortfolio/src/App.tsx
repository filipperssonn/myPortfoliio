import "./App.css";
import BioComponent from "./components/bio.tsx";
import ErfarenhetComponent from "./components/erfarenhet.tsx";
import NavbarComponent from "./components/navbar.tsx";

function App() {
  return (
    <>
      <div className="flex flex-wrap py-20 md:py-20 lg:pt-20 mx-auto h-full max-w-4xl justify-center">
        <NavbarComponent />
        <BioComponent />
        <ErfarenhetComponent />
      </div>
    </>
  );
}

export default App;
