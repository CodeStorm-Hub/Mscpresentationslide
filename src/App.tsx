import { useState } from 'react';
import { CoverSlide } from './components/CoverSlide';
import { ProjectOverview } from './components/ProjectOverview';
import { UserStories } from './components/UserStories';
import { SystemArchitecture } from './components/SystemArchitecture';
import { TechStack } from './components/TechStack';
import { ERDiagram } from './components/ERDiagram';
import { Roadmap } from './components/Roadmap';
import { KeyFeatures } from './components/KeyFeatures';
import { Benefits } from './components/Benefits';
import { NextSteps } from './components/NextSteps';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    <CoverSlide key="cover" />,
    <ProjectOverview key="overview" />,
    <KeyFeatures key="features" />,
    <UserStories key="stories" />,
    <SystemArchitecture key="architecture" />,
    <TechStack key="tech" />,
    <ERDiagram key="erd" />,
    <Roadmap key="roadmap" />,
    <Benefits key="benefits" />,
    <NextSteps key="next" />
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center p-4">
      {/* Slide Container */}
      <div className="w-full max-w-7xl aspect-[16/9] bg-white rounded-xl shadow-2xl overflow-hidden relative">
        {slides[currentSlide]}
      </div>

      {/* Navigation Controls */}
      <div className="mt-6 flex items-center gap-4">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          <ChevronLeft className="w-6 h-6 text-slate-800" />
        </button>

        {/* Slide Indicators */}
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-blue-500 w-8'
                  : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          <ChevronRight className="w-6 h-6 text-slate-800" />
        </button>
      </div>

      {/* Slide Counter */}
      <div className="mt-4 text-white text-sm">
        Slide {currentSlide + 1} of {slides.length}
      </div>
    </div>
  );
}
