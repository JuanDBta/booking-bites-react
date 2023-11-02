import React from 'react';
import {
  useParams, Link, NavLink,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TiMediaPlayReverseOutline } from 'react-icons/ti';
import '../styles/Detail.css';
import NavBar from './NavBar';

const SectionDetail = () => {
  const sections = useSelector((state) => state.sections);
  const { id } = useParams();
  const detailsection = sections.find((section) => section.id === Number(id));
  if (!detailsection) {
    return <div>Loading...</div>;
  }
  return (
    <div className="detail_container flex">
      <div className="the_nav">
        <NavBar />
      </div>
      <div className="detail_content flex">
        <div className="detail_img"><img src={detailsection.image} alt="Section" /></div>
        <ul className="detail_list">
          <h2 className="discover flex">{detailsection.name}</h2>

          <p className="flex discover  text_gap">
            {' '}
            {detailsection.cover ? 'Advance payment required!' : 'Advance payment not required!'}
          </p>
          <li>
            <p>Description :</p>
            <p>{detailsection.description}</p>
          </li>
          <li>
            <p>Capacity:</p>
            <p>
              {' '}
              {detailsection.capacity}
            </p>
          </li>
          <li>
            <p>Cover: </p>
            <p>{detailsection.cover ? 'Yes' : 'No'}</p>
          </li>
          <li>
            <p>Live Music:</p>
            <p>
              {' '}
              {detailsection.live_music ? 'Yes' : 'No'}
            </p>
          </li>
          <p className="flex flex_start text_gap" id="flex_gap">
            <strong>15% gratuity </strong>
            {' '}
            before taxes will be added to the bill.
          </p>
          <p className="discover flex  text_gap">
            Discover more Section
            <img src="/detail_right_arrow.png" alt="Discover Icon" className="discover-icon" style={{ width: '1em', height: 'auto' }} />
          </p>
          <Link
            to={`/section/reserve/${detailsection.id}`}
          >
            <p className="flex discover ">
              <button type="button" className="detail_reserve flex">
                Book a table
                <div className="circle-right"><p>&gt;</p></div>
              </button>
            </p>
          </Link>
        </ul>

        <NavLink to="/home">
          <button className="go-back-button" type="button">
            <>{ /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }</>
            <TiMediaPlayReverseOutline className="previous-icon" />
          </button>
        </NavLink>
      </div>
    </div>

  );
};

export default SectionDetail;
