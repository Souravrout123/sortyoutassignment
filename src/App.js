import "./App.css";
import CircleComponent from "./Component/CircleComponent";
import Carosol from "./Component/Carosol";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import MasterPiece from "./Component/MasterPiece";
import UpperCircle from "./Component/UpperCircle";
import VideoStreaming from "./Component/VideoStreaming";
import FileBoxes from "./Component/filebox";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Header />
      <Carosol />
      <MasterPiece />
      <UpperCircle />
      <FileBoxes />
      <CircleComponent />
      <VideoStreaming />
      <Footer />
    </div>
  );
}

export default App;
