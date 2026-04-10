import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import {
  Navbar,
  Hero,
  AITermsExplorer,
  MyBookSlider,
  SocialBentoGrid,
  DeepLearningTensors,
  FooterReflect
} from './components';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--bg-primary)] transition-colors duration-300">
        <Navbar />
        <Hero />
        <DeepLearningTensors />
        <AITermsExplorer />
        <MyBookSlider />
        <SocialBentoGrid />
        <FooterReflect />
      </div>
    </ThemeProvider>
  );
}
