// css
import '../scss/App.scss';
//API y LS
import object from '../services/Api.js';
import localStorage from '../services/LocalStorage.js';
//react
import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
//Componentes
import Header from './Header.jsx';
import LandingPage from './landingPage/LandingPage.jsx';
import CardProject from './cardProject/CardProject.jsx';
import ListProject from './listProject/ListProject.jsx';
import Footer from './Footer.jsx';
import Contact from './contact/Contact.jsx';
import ContactForm from './contact/ContactForm.jsx';
import Register from './register/Register.jsx';
import LogIn from './logIn/LogIn.jsx';
// import { response } from 'express';

function App() {
  //Variables estado
  const [formData, setFormData] = useState({
    namePj: '',
    slogan: '',
    technologies: '',
    demoUrl: '',
    gitUrl: '',
    descriptionPj: '',
    nameAut: '',
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
      namePj: '',
      slogan: '',
      technologies: '',
      demoUrl: '',
      gitUrl: '',
      descriptionPj: '',
      nameAut: '',
      job: '',
      image: '',
      photo: '',
    }
  );
  const [team, setTeam] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [logData, setLogData] = useState({
    email: '',
    userpassword: '',
  });

  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  const [localToken, setLocalToken] = useState('');
  const [loginError, setLoginError] = useState('hidden');

  const navigate = useNavigate();

  const handleLogData = (ev) => {
    const inputValue = ev.target.value;
    const inputName = ev.target.name;
    setLogData({
      ...logData,
      [inputName]: inputValue,
    });
  };

  const handleSubmitLog = (ev) => {
    ev.preventDefault();
    setLoginError('hidden');
    object.callToApiLog(logData).then(({ success, token }) => {
      setLoggedIn(success);
      if (success) {
        object.getProfile(token).then((profile) => {
          setUserName(profile);
          localStorage.set('user name', profile);
        });
        navigate('/cardProject');
        setLocalToken(token);
        localStorage.set('token', token);
      } else {
        setLoginError('');
        return false;
      }
    });
  };

  useEffect(() => {
    const token = localStorage.get('token');
    if (token) {
      object.getProfile(token).then((profile) => {
        setUserName(profile);
        localStorage.set('user name', profile);
      });
      setLoggedIn(true);
    }
  }, [localToken]);

  const handleLogOut = (ev) => {
    ev.preventDefault();
    object.logOut().then((response) => {
      setLoggedIn(response);
    });
    navigate('/');
    toggleMenu();
    localStorage.remove('token');
    localStorage.remove('user name');
  };

  useEffect(() => {
    object.getTeam().then((responseData) => {
      setTeam(responseData.data);
    });
  }, []);

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
    if (userName){
      userData.nameAut = userName;
      if (userData) {
        setFormData(userData);
      }
    }
    
  }, [userData]);

  useEffect(() => {
    localStorage.set('user', {
      namePj: formData.namePj,
      slogan: formData.slogan,
      technologies: formData.technologies,
      demoUrl: formData.demoUrl,
      gitUrl: formData.gitUrl,
      descriptionPj: formData.descriptionPj,
      nameAut: formData.nameAut,
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
      namePj: '',
      slogan: '',
      technologies: '',
      demoUrl: '',
      gitUrl: '',
      descriptionPj: '',
      nameAut: '',
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
      <Header
        loggedIn={loggedIn}
        userName={userName}
        handleLogOut={handleLogOut}
        toggleMenu={toggleMenu}
        menu={menu}
      />
      <Routes>
        <Route path="/register" element={<Register setLoggedIn={setLoggedIn} setUserName={setUserName}/>} />
        <Route
          path="/login"
          element={
            <LogIn
              handleLogData={handleLogData}
              handleSubmitLog={handleSubmitLog}
              loginError={loginError}
            />
          }
        />
        <Route path="/contact" element={<Contact team={team} />} />
        <Route path="/contactform" element={<ContactForm />} />
        <Route path="/" element={<LandingPage formData={formData} />} />
        <Route
          path="/cardProject"
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
          path="/listProject"
          element={<ListProject projectList={projectList} loggedIn={loggedIn} userName={userName}/>}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
