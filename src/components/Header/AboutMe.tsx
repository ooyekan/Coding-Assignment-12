import React from 'react';
import styled from 'styled-components';
import MyText from '../Text/text';

// Styled component for the container
const AboutContainer = styled.section`
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    margin-top: 5rem;
  }
`;

// Styled component for the heading
const Heading = styled.h1`
  font-size: 1.5rem;
  color: #0000FF;
  margin-bottom: 1rem;
`;

// Styled component for the text container
const TextContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
`;

// Styled component for the paragraph text
const StyledText = styled(MyText)`
  font-size: 0.5rem;
  line-height: 1.6;
  color: #555;
`;

const AboutMe: React.FC = () => (
  <AboutContainer>
    <Heading>About Me</Heading>
    <TextContainer>
      <StyledText size="medium">
        I am a student of the Full Stack Web Development program at Red River College Polytechnic, 
        currently in my second year. My journey in this program has been both challenging and rewarding, 
        providing me with a solid foundation in both front-end and back-end development. I have a keen 
        interest in creating user-centric applications and am passionate about leveraging technology to 
        solve real-world problems.
      </StyledText>
      <StyledText size="medium">
        Throughout my studies, I have gained hands-on experience with various technologies including 
        HTML, CSS, JavaScript, React, Ruby on Rails, and Python. I have worked on several projects, 
        ranging from simple web applications to more complex systems involving multiple data sources. 
        These experiences have honed my skills in coding, problem-solving, and project management.
      </StyledText>
      <StyledText size="medium">
        Outside of academics, I am actively involved in various tech communities and enjoy staying updated 
        with the latest industry trends. I am eager to apply my knowledge and skills in a real-world setting 
        through opportunities like internships and collaborative projects.
      </StyledText>
    </TextContainer>
  </AboutContainer>
);

export default AboutMe;
