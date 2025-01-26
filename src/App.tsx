import "./App.css";
import BioComponent from "./components/bio.tsx";
import ErfarenhetComponent from "./components/erfarenhet.tsx";
// import NavbarComponent from "./components/navbar.tsx";

function App() {
  return (
    <>
      <div className="flex flex-wrap py-10 md:py-20 lg:pt-20 h-full w-full justify-center">
        <BioComponent />
        <ErfarenhetComponent />
      </div>
    </>
  );
}

export default App;
