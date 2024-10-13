import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/navbar/navbar';
import VideoGrid from './components/video-box/video-box';
import UploadFile from './components/upload-file/UploadFile';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
function App() {
  return (
    <Router >
      <CustomNavbar />
      <Routes>
        <Route exact path='/' element={<VideoGrid />} />
        <Route path='/upload' element={<UploadFile />} />
      </Routes>
    </Router>
  );
}

export default App;
