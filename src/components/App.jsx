// css
import '../scss/App.scss';
//img
import cover2 from '../images/cover_2.jpeg';
import favicon from '../images/favicon.png';
import logoAlab from '../images/logo-adalab.png';
//API y LS
import callToApi from '../services/Api.js';
import localStorage from '../services/LocalStorage.js';
//react
import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
//Componentes
import Header from './Header.jsx';
import LandingPage from './landingPage/LandingPage.jsx';
import CardProject from './cardProject/CardProject.jsx';
import ListProject from './listProject/ListProject.jsx';
import Footer from './Footer.jsx';

function App() {
  //Dónde lo usamos?
  const location = useLocation();

  //Variables estado
  const [formData, setFormData] = useState({});
  const [cardLink, setCardLink] = useState('');
  const [hidden, setHidden] = useState('hidden');
  const [imageSize, setImageSize] = useState('fileSizeOk');
  // let imageSize = 'fileSizeOk';

  const [userData, setUserData] = useState(
    localStorage.get('user') || {
      name: '',
      slogan: '',
      technologies: '',
      demo: '',
      repo: '',
      desc: '',
      autor: '',
      job: '',
      image: '',
      photo: '',
    }
  );

  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    const inputName = ev.target.name;
    setFormData({
      ...formData,
      [inputName]: inputValue,
    });
  };
 
  useEffect(() => {
    if (userData) {
      setFormData(userData);
    }
  }, []);

  useEffect(() => {
    localStorage.set('user', {
      name: formData.name,
      slogan: formData.slogan,
      technologies: formData.technologies,
      demo: formData.demo,
      repo: formData.repo,
      desc: formData.desc,
      autor: formData.autor,
      job: formData.job,
      image: formData.image,
      photo: formData.photo,
    });
    console.log('han cambiado los datos introducidos');
    setUserData(localStorage.get('user'));
  }, [formData]);

  const handleClickCreateCard = (ev) => {
    ev.preventDefault;
    setHidden('');
    callToApi(formData).then((response) => {
      setCardLink(response.cardURL);
      console.log(response.cardURL);
    });
  };

  const handleClearForm = (ev) => {
    ev.preventDefault;
    localStorage.remove('user');
    setFormData({
      name: '',
      slogan: '',
      technologies: '',
      demo: '',
      repo: '',
      desc: '',
      autor: '',
      job: '',
      image: '',
      photo: '',
    });
    setHidden('hidden');
    setCardLink('');
    setImageSize('fileSizeOk');
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/cardProject"
          element={
            <CardProject
              hidden={hidden}
              handleClickCreateCard={handleClickCreateCard}
              handleInput={handleInput}
              setFormData={setFormData}
              formData={formData}
              cardLink={cardLink}
              handleClearForm={handleClearForm}
              setImageSize={setImageSize}
              imageSize={imageSize}
            />
          }
        />
        <Route
          path="/listProject"
          element={<ListProject formData={formData} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
