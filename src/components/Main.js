import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { TiMediaPlayOutline, TiMediaPlayReverseOutline } from 'react-icons/ti';
import { GrInstagram } from 'react-icons/gr';
import { SiFacebook } from 'react-icons/si';
import { FaTwitter } from 'react-icons/fa';
import { fetchSections } from '../redux/features/sections/sectionsSlice';
import NavBar from './NavBar';
import '../styles/Main.css';

const Main = () => {
  const dispatch = useDispatch();
  const sections = useSelector((state) => state.sections);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionsPerPage = 3;

  useEffect(() => {
    dispatch(fetchSections());
  }, [dispatch]);

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < sections.length - sectionsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const visibleSections = sections.slice(currentIndex, currentIndex + sectionsPerPage);

  return (
    <div className="main">
      <div className="the_nav">
        <NavBar />
      </div>
      <div className="main_content">

        <h1 className="title">LATEST SECTIONS</h1>
        <h3 className="title-description" id="title_id">Please select a section</h3>
        <div id="dotted_id">
          <div className="dotted-line" />
        </div>
        <div className={`prev-button-container ${currentIndex === 0 ? 'disabled' : ''}`}>
          <button type="button" className={`prev-button ${currentIndex === 0 ? 'disabled' : ''}`} onClick={handlePrevClick} disabled={currentIndex === 0}>
            <>{ /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }</>
            <TiMediaPlayReverseOutline className="previous-icon" />
          </button>
        </div>
        <div className="sections-list">
          {/* eslint-disable no-nested-ternary */}
          {visibleSections.map((section, index) => (
            <div key={section.id} className={`section ${index === 0 ? 'first-section' : index === 2 ? 'third-section' : ''}`}>
              <Link to={`/sections/${section.id}`} key={section.id} className="link_to_section">
                <img src={section.image} className="image" alt="section" />
                <div className="name">{section.name}</div>
                <div className="dotted-line-desc" />
                <div className="description">{section.description}</div>
                <div className="media-links">
                  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <SiFacebook className="icon" />
                  </a>
                  <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <FaTwitter className="icon" />
                  </a>
                  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <GrInstagram className="icon" />
                  </a>
                </div>
                {/* eslint-enable no-nested-ternary */}
              </Link>
            </div>
          ))}

        </div>
        <div className={`next-button-container ${currentIndex === sections.length - sectionsPerPage ? 'disabled' : ''}`}>
          <button type="button" className={`next-button ${currentIndex === sections.length - sectionsPerPage ? 'disabled' : ''}`} onClick={handleNextClick} disabled={currentIndex === sections.length - sectionsPerPage}>
            <>{ /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }</>
            <TiMediaPlayOutline className="next-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
