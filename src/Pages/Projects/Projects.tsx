import React from 'react';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import styled from 'styled-components';

const projects = [
  { title: 'CMS', description: 'A robust CMS designed to simplify content creation and management for websites, providing an intuitive interface for users to publish and edit content effortlessly.', link: 'https://github.com/ooyekan/Web-Dev-2-Project.git#', imageSrc: './cardImage1.png' },
  { title: 'Portfolio', description: 'A dynamic portfolio website showcasing your work and skills with a visually appealing design, allowing visitors to explore your projects and achievements.', link: 'https://github.com/ooyekan/Coding-Assignment-12.git', imageSrc: './cardImage2.png' },
  { title: 'E-Commerce', description: 'A comprehensive e-commerce platform offering seamless online shopping experiences, complete with product listings, shopping cart functionality, and secure checkout options.', link: 'https://github.com/ooyekan/wale_pharmacy_and_supermarket.git', imageSrc: './cardImage3.png' },
];

const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 50rem;
  }
`;

const ProjectsSection = styled.section`
  width: 100%;
  padding: 2rem;
  background-color: #2A2B32;
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem; /* Space between cards */
  justify-content: center; /* Center cards horizontally */
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 300px; /* Set a max-width for better spacing */
`;

const Title = styled.h2`
  text-align: center;
  color: #fff;
  margin-bottom: 1rem;
`;

const ProjectTitle = styled.h3`
  margin-top: 0.5rem;
  font-size: 0.45rem;
  color: #fff;
  text-align: center;
`;

const ProjectDescription = styled.p`
  margin-top: 0.5rem;
  font-size: 1rem;
  color: #fff;
  text-align: center;
`;

const ProjectLink = styled.a`
  text-decoration: none; /* Remove underline */
  color: inherit; /* Inherit color from parent */
  
  &:hover {
    color: #FF60CB; /* Change color on hover */
  }
`;

const Projects: React.FC = () => (
  <Container>
    <Header title={''} />
    <ProjectsSection>
      <Title>Projects</Title>
      <ProjectsContainer>
        {projects.map((project, index) => (
          <CardWrapper key={index}>
            <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
              <Card
                content={''}
                imageSrc={project.imageSrc}
                link={project.link}
                size="large"
                title={''}
              />
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
            </ProjectLink>
          </CardWrapper>
        ))}
      </ProjectsContainer>
    </ProjectsSection>
  </Container>
);

export default Projects;
