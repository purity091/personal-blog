import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import {
  Navbar,
  Hero,
  AITermsExplorer,
  MyBookSlider,
  SocialBentoGrid,
  DeepLearningTensors,
  LLMEcosystem,
  NewsletterReflect,
  FooterReflect
} from './components';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen selection:bg-purple-500 selection:text-white bg-[var(--bg-primary)] transition-colors duration-300">
        <Navbar />
        <Hero />
        <AITermsExplorer />
        <MyBookSlider />
        <SocialBentoGrid />
        <DeepLearningTensors />
        <LLMEcosystem />
        <NewsletterReflect />
        <FooterReflect />
      </div>
    </ThemeProvider>
  );
}
