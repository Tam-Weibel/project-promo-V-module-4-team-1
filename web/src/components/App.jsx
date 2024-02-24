// css
import '../scss/App.scss';
//img
import cover2 from '../images/cover_2.jpeg';
import favicon from '../images/favicon.png';
import logoAlab from '../images/logo-adalab.png';
//API y LS
import object from '../services/Api.js';
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
import Contact from './contact/Contact.jsx';

function App() {
  //Dónde lo usamos?
  const location = useLocation();

  //Variables estado
  const [formData, setFormData] = useState({
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

  const [projectList, setProjectList] = useState([]);
  const [cardLink, setCardLink] = useState('');
  const [hideCardLink, setHideCardLink] = useState('hidden');
  const [imageSize, setImageSize] = useState('hidden');
  const [missingImage, setMissingImage] = useState('hidden');
  const [isLoading, setIsLoading] = useState(false);
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

  useEffect(() => {
    object.getProjects().then((responseData) => {
      setProjectList(responseData.data);
    });
  }, []);

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
    setUserData(localStorage.get('user'));
  }, [formData]);

  const handleClickCreateCard = (ev) => {
    ev.preventDefault();
    setMissingImage('hidden');
    if (formData.image === '' || formData.photo === '') {
      setMissingImage('');
    } else {
      setHideCardLink('');
      setMissingImage('hidden');
      setIsLoading(true);

      object.callToApi(formData).then((response) => {
        setCardLink(response.cardURL);
        setIsLoading(false);
      });
    }
  };

  const handleClearForm = (ev) => {
    ev.preventDefault();
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
    setHideCardLink('hidden');
    setCardLink('');
    setImageSize('hidden');
    setMissingImage('hidden');
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path='/contact' element={<Contact />} />
        <Route path='/' element={<LandingPage formData={formData} />} />
        <Route
          path='/cardProject'
          element={
            <CardProject
              hideCardLink={hideCardLink}
              handleClickCreateCard={handleClickCreateCard}
              handleInput={handleInput}
              setFormData={setFormData}
              formData={formData}
              cardLink={cardLink}
              handleClearForm={handleClearForm}
              setImageSize={setImageSize}
              imageSize={imageSize}
              missingImage={missingImage}
              setMissingImage={setMissingImage}
            />
          }
        />
        <Route
          path='/listProject'
          element={<ListProject projectList={projectList} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
