import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Aos from 'aos';
import 'aos/dist/aos.css';

const linkStyle = { textDecoration: 'none' };

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <>
      <h1 className="about-heading" data-aos="fade-right">Projects</h1>
      <div className='projects'>
        <Card style={{ width: '18rem', background: 'rgba(255, 255, 255, 0.1)', border: '1px solid white', color: 'white', transition: 'transform 0.3s' }} data-aos="fade-left" onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.07)')} onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}>
          <Card.Body>
            <Card.Title>Peptide To Music Classifier</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Vanilla JS, CSS, Python, HTML, Flask, Librosa</Card.Subtitle>
            <Card.Text>
              An application that converts music to peptide by audio processing using Librosa.
              Useful for finding diseases in peptides.
              Processes music and outputs the disease with an accuracy of about 94%.
              Model deployment using Tensorflow.
            </Card.Text>
            <Card.Link as={Link} to="https://github.com/shimmer12/peptideToMusic" style={linkStyle} target="_blank" rel="noopener noreferrer">Code (GitHub)</Card.Link>
            <Card.Link as={Link} to="https://github.com/shimmer12/peptideToMusic" style={linkStyle} target="_blank" rel="noopener noreferrer">Deployed</Card.Link>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', background: 'rgba(255, 255, 255, 0.1)', border: '1px solid white', color: 'white', transition: 'transform 0.3s' }} data-aos="fade-left" onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.07)')} onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}>
          <Card.Body>
            <Card.Title>File Tracking System</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Django, SQLite</Card.Subtitle>
            <Card.Text>
              Developed a File Tracking System using Django, SQLite.
              Implemented user-friendly interfaces and File flow status and retrieval protocols.
              Streamlined file management, enhanced productivity with automated tracking.
            </Card.Text>
            <Card.Link as={Link} to="https://github.com/shimmer12/eitc_internship" style={linkStyle} target="_blank" rel="noopener noreferrer">Code (GitHub)</Card.Link>
          </Card.Body>
        </Card>

        <div className="github">
          <Link to="https://github.com/shimmer12" target="_blank">
            <Button variant="dark" className="custom-button">GitHub<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className="bi bi-github" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 
            1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
            </svg></Button>
          </Link>
        </div>
      </div>

      <div className='Navigate'>
        <Link to="/about">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left-square">
                <rect width="18" height="18" x="3" y="3" rx="3" />
                <path d="m14 8-4 4 4 4" />
            </svg>
        </Link>
        <Link to="/contact">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right-square">
                <rect width="18" height="18" x="3" y="3" rx="3" />
                <path d="m10 8 4 4-4 4" />
            </svg>
        </Link>
      </div>
    </>
  );
};

export default Projects;
