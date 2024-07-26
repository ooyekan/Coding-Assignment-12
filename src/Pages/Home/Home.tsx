import React from 'react';
import HeroImage from '../../components/HeroImage/heroImage';
import Card from '../../components/Card/Card';
import MyText from '../../components/Text/text';
import MyButton from '../../components/Button/Button'; // Import MyButton
import styled from 'styled-components';



const projects = [
  { title: 'CMS', description: 'Description for project one', link: '#', imageSrc: 'src/assets/images/cardImage1.png' },
  { title: 'Portfolio', description: 'Description for project two', link: '#', imageSrc: 'src/assets/images/cardImage2.png' },
  { title: 'E-Commerce', description: 'Description for project three', link: '#', imageSrc: 'src/assets/images/cardImage3.png' },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const HeroSection = styled.div`
  position: relative; 
  width: 100%;
  align-items: centre;
  text-align: center;
  margin-bottom: 2rem;
  height: 100px; 

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;



const InfoSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  width: 100%;
  padding-top: 6rem;

  @media (max-width: 768px) {
    flex-direction: row;
    padding-top: 2rem;
    margin-top: 25rem;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  text-align: left;
  padding-top: 6rem;
  margin-right: -25rem;
  border-bottom: 8px solid white; /* Thickness and color of the bottom line */
  border-radius: 4px;
 
  @media (max-width: 768px) {
    text-align: center;
    padding-top: 2rem;
    margin-right: 0;
    margin-top: 4em;
    margin-bottom: 2rem; /* Add margin-bottom to separate text from image */
  }

  // & > MyText {
  //   @media (max-width: 768px) {
  //     size: 'medium'; /* Adjust this value as needed for medium text size */
  //   }
  // }
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 40%;
  right: 25%;
  transform: translateY(-50%);
  color: white;
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 768px) {
    position: static;
    transform: none;
    align-items: center;
    text-align: center;
    margin-top: 4em;
  }
`;

const ProjectsSection = styled.section`
  width: 100%;
  margin-bottom: 2rem;
  padding: 2rem;
  background-color: #2A2B32; 
  // #000033;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ProjectsContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 1rem; /* Add gap between cards */
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ProjectLink = styled.a`
  text-decoration: none; /* Remove underline */
  color: inherit; /* Inherit color from parent */
  
  &:hover {
    color: #FF60CB; /* Change color on hover */
  }
`;

const HeaderLink = styled.a`
  color: #fff; /* White color for the link text */
  text-decoration: none; /* Remove underline */
  
  &:hover {
    color: #FFC0CB; /* Change color on hover */ 
  }
`;


const Home: React.FC = () => (
  <Container>
    <InfoSection>
      {/* MyText Component with Bold Styling */}
      <TextContainer>
        <MyText bold={true} size = "large" >I'm Oyebisi, a <br></br>Full Stack Web Developer</MyText>
      </TextContainer>

      <HeroSection>
    
      {/* HeroImage Component */}
      <HeroImage src = "src/assets/images/hero_Image.png" alt="Hero Image" title="Hero Title" subtitle="Hero Subtitle" />
    </HeroSection>

      {/* MyButton Component */}
      <ButtonContainer>
        <MyText  size = "medium" >ABOUT ME<br></br>I am a student of the Full Stack Web <br></br>Development program at  Red River<br></br> College Polytechnic</MyText>
        <MyButton to="/about">Learn More</MyButton>
      </ButtonContainer>
    </InfoSection>

    {/* Section for Projects */}
    <ProjectsSection>
    <h2><HeaderLink href="/projects">Projects</HeaderLink></h2>
      <ProjectsContainer>
        {projects.map((project, index) => (
          <ProjectLink href={project.link} key={index}>
          <Card
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            imageSrc={project.imageSrc}
            content={''}
            size="small" 
            />
            </ProjectLink>
        ))}
      </ProjectsContainer>
    </ProjectsSection>

    
  </Container>
);

export default Home;
