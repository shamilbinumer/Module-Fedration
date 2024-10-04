import dynamic from 'next/dynamic';

// Dynamically import the About component from the second-app
const About = dynamic(() => import('second_app/About'), { ssr: false });

const AboutPage = () => {
  return (
    <div>
      <h1>This is About Page from Second App</h1>
      <About />
    </div>
  );
};

export default AboutPage;
