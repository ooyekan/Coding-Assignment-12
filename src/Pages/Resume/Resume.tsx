import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/Header';

const ResumeContainer = styled.section`
  padding: 50px;
  background: #f5f5f5;
  max-width: 800px;
  margin: 0 auto;
  height: 100%
`;

const SectionTitle = styled.h1`
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  text-align: center;
  color: #333;
`;

const ResumeContent = styled.div`
  line-height: 1;
  color: #333;
`;

const Section = styled.div`
  margin-bottom: 0.5rem;
  font-size: 0.6rem;
`;

const SubTitle = styled.h2`
  font-size: 0.7rem;
  margin-bottom: 0.5rem;
  color: #444;
`;

const List = styled.ul`
  padding-left: 1.2rem;
  list-style: disc;
`;

const ListItem = styled.li`
  margin-bottom: 0.3rem;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center; /* Center the content */
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const ContactDetail = styled.p`
  margin: 0.2rem 0;
`;

const Resume: React.FC = () => (
  <ResumeContainer>
    <Header title="Resume" />
    <ResumeContent>
      <Section>
        <SectionTitle>OYEBISI OYEKAN</SectionTitle>
        <ContactInfo>
          <ContactDetail>Software Developer</ContactDetail>
          <ContactDetail>+1(204)-000-0000</ContactDetail>
          <ContactDetail>xtiana502@gmail.com</ContactDetail>
          <ContactDetail>Winnipeg, MB</ContactDetail>
        </ContactInfo>
      </Section>

      <Section>
        <SubTitle>SUMMARY</SubTitle>
          <p>Proficient in a diverse array of programming languages including Java, 
            HTML, CSS, JavaScript, PHP, MySQL, and React, with a strong foundation in 
            project management, object-oriented programming, PostgreSQL, and business 
            requirements gathering and design. Currently expanding expertise in Python, 
            Ruby, Rails, web security, and Agile methodologies. Leveraging seven years of 
            experience as a pharmacist in healthcare, I am transitioning into full-stack 
            web development, eager to merge my pharmaceutical background with newfound 
            programming skills to innovate solutions. Dedicated to enhancing patient care 
            through technology, with a keen eye for collaborative opportunities in full-stack web development.</p>
      </Section>

      <Section>
        <SubTitle>EDUCATION</SubTitle>
        <List>
          <ListItem>RED RIVER COLLEGE POLYTECH, Winnipeg, MB, CA. Diploma in Full Stack Web Development (On-going) August 2023 – December 2024</ListItem>
          <ListItem>UNIVERSITY OF IBADAN, NIGERIA. Bachelor of Pharmacy (B. Pharm) December 2016</ListItem>
        </List>
      </Section>

      <Section>
        <SubTitle>SKILLS</SubTitle>
        <List>
          <ListItem>Front-End Development: HTML, CSS, JavaScript, and React for elegant user interfaces.</ListItem>
          <ListItem>Back-End Development: Java, PHP, and PostgreSQL for robust server-side development.</ListItem>
          <ListItem>Other fields: Object-oriented programming, project management, business requirements gathering and design.</ListItem>
          <ListItem>Proficient in Microsoft Office Suite, including Word, Excel, PowerPoint, and Outlook.</ListItem>
          <ListItem>Currently Expanding: Python, Ruby, Rails, web security, Agile methodologies.</ListItem>
          <ListItem>Strong communication skills for effective collaboration with team members and stakeholders.</ListItem>
          <ListItem>Exceptional problem-solving abilities to analyze and resolve complex issues efficiently.</ListItem>
          <ListItem>Adaptability to rapidly changing project requirements and dynamic work environments.</ListItem>
        </List>
      </Section>

      <Section>
        <SubTitle>PROJECTS</SubTitle>
        <List>
          <ListItem>Content Management System for a fictional vacation company, March - April 2024 (School Project)</ListItem>
          <ListItem>Personal Professional Website, December 2023 (School Project)</ListItem>
        </List>
      </Section>
    </ResumeContent>
  </ResumeContainer>
);

export default Resume;
