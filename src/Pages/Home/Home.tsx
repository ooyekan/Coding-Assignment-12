import React from 'react';
import HeroImage from '../../components/HeroImage/heroImage';
import Card from '../../components/Card/Card';
import MyText from '../../components/Text/text';
import MyButton from '../../components/Button/Button'; // Import MyButton
import styled from 'styled-components';



const projects = [
  {  description: 'Description for project one', link: '#' },
  { description: 'Description for project two', link: '#' },
  { description: 'Description for project three', link: '#' },
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
`;



const InfoSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  width: 100%;
  padding-top: 6rem;
`;

const TextContainer = styled.div`
  flex: 1;
  text-align: left;
  padding-top: 6rem;
  margin-right: -25rem;
  border-bottom: 8px solid white; /* Thickness and color of the bottom line */
  border-radius: 4px;
 
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
`;

const ProjectsSection = styled.section`
  width: 100%;
  margin-bottom: 2rem;
  padding: 2rem;
  background-color: #2A2B32; 
  // #000033;
`;

const ProjectsContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 1rem; /* Add gap between cards */
  
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
        <MyButton onClick={() => console.log('Button clicked')}>Learn More</MyButton>
      </ButtonContainer>
    </InfoSection>

    {/* Section for Projects */}
    <ProjectsSection>
      <h2>Projects</h2>
      <ProjectsContainer>
        {projects.map((project, index) => (
          <Card
            key={index}
            description={project.description}
            link={project.link}
            content={''}
            size="small" title={''}          />
        ))}
      </ProjectsContainer>
    </ProjectsSection>

    
  </Container>
);

export default Home;
