import React from 'react';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';

const projects = [
  { title: 'Project One', description: 'Description for project one', link: '#' },
  { title: 'Project Two', description: 'Description for project two', link: '#' },
  { title: 'Project Three', description: 'Description for project three', link: '#' },
];

const Projects: React.FC = () => (
  <>
    <Header title={''} />
    <section>
      <h2>Projects</h2>
      <div style={{ 
      display: 'flex', 
      flexDirection: 'row', 
      flexWrap: 'wrap', 
      gap: '1rem', 
      padding: '1rem 0'
    }}>
      {projects.map((project, index) => (
        <Card content={''} key={index} {...project} size="large"/>
      ))}
      </div>
    </section>
  </>
);

export default Projects;
