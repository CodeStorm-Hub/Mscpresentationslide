import { Building2, Sparkles } from 'lucide-react';

export function CoverSlide() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 flex flex-col items-center justify-center p-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-300 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Company Logo/Name */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <Sparkles className="w-12 h-12 text-yellow-300" />
          <h1 className="text-4xl font-bold text-white">CodeStorm Hub</h1>
        </div>

        {/* Subtitle */}
        <div className="mb-12">
          <p className="text-blue-100 text-xl">Presents Development Plan for</p>
        </div>

        {/* Project Title */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-10 border border-white/20 mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Building2 className="w-16 h-16 text-white" />
            <h2 className="text-5xl font-bold text-white">MSC Home</h2>
          </div>
          <p className="text-2xl text-blue-100 mb-2">Rental & Real Estate Platform</p>
          <p className="text-lg text-blue-200">Complete Web & Mobile App Solution</p>
        </div>

        {/* Footer */}
        <div className="text-white/80 text-sm">
          <p>Professional Development & Architecture Presentation</p>
          <p className="mt-2">{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </div>
    </div>
  );
}
