import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../Footer.jsx';
import Preview from '../Preview.jsx';
import ButtonCreateCard from '../ButtonCreateCard.jsx';
import '../../scss/core/Variables.scss';
import '../../scss/layout/Header.scss';
import '../../scss/layout/Main.scss';
import '../../scss/layout/ListProject.scss';
import PreviewListProject from './PreviewListProject.jsx';



function ListProject({ formData }) {
  return (
    <main className="main">
      <ButtonCreateCard />
      <div className="listproject">
        {/* <Preview formData={formData} />
        <Preview formData={formData} /> */}
        < PreviewListProject formData={formData} />
        < PreviewListProject formData={formData} />
      </div>
    </main>
  );
}
ListProject.propTypes = {
  formData: PropTypes.object.isRequired,
};

export default ListProject;
