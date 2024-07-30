// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import MyButton from './components/Button/Button'
// import MyText from './components/Text/text';
// import HeroImage from './components/HeroImage/heroImage';
// import Card from './components/Card/Card';
// import Header from './components/Header/Header';
// import Dropdown from './components/Dropdown/Dropdown';
// import heroImage from './assets/images/hero_Image.png';
// import cardImage from './assets/images/card_image.png';



// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//       <MyButton label= "Read More"></MyButton>
//       <MyText text= "I'm Oyebisi, a Full Stack Web Developer"></MyText>
//       <HeroImage src= {heroImage} alt="Hero Image" title="Hero Title" subtitle="Hero Subtitle" />
//       <Card
//         title="Card Title"
//         subtitle="Card Subtitle"
//         content="This is the content of the card. It is displayed here."
//         imageSrc={cardImage} 
//       />
//       <Header title="MY PORTFOLIO"/>
//       <Dropdown
//         options={['Home', 'About', 'Resume', 'Contact Me']}
//         onSelect={(option: string) => console.log('Selected:', option)}
//       />

//     </>
//   )
// }

// export default App

import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';
import Resume from './Pages/Resume/Resume';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import IMG from './components/IMG/IMG'
import styled from 'styled-components';


// import Card from './components/Card/Card';
// import Dropdown from './components/Dropdown/Dropdown';

const AdditionalImage = styled(IMG)`
  width: 80%;
  max-width: 400px;
  height: 10%;
  margin-top: 20px;
  margin-bottom: 20px;
`;


const App: React.FC = () => (
  <Router>
    <Header title={''}
    />
    
    <main className="main-content">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/resume"  element={<Resume />} />
    </Routes>
    {/* <div className="additional-components">
        <Card title="Sample Card" description="This is a sample card description" content={''} />
        <Dropdown options={['Option 1', 'Option 2', 'Option 3']} onSelect={function (): void {
        throw new Error('Function not implemented.');
      } } onChange={function (): void {
        throw new Error('Function not implemented.');
      } } />
      </div> */}
      
      </main>
      <AdditionalImage src="src/assets/images/img.jpg" alt="Additional" />
      <Footer /> {/* Include Footer component */}
  </Router>
);

export default App;
