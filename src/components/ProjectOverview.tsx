import { Target, Users, Building, TrendingUp } from 'lucide-react';

export function ProjectOverview() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-50 to-blue-50 p-12 flex flex-col">
      {/* Header */}
      <div className="mb-8 flex-shrink-0">
        <h2 className="text-4xl font-bold text-slate-800 mb-3">Project Overview</h2>
        <div className="h-1 w-24 bg-blue-600 rounded"></div>
      </div>

      {/* Main Description */}
      <div className="bg-white rounded-xl p-6 shadow-lg mb-6 border-l-4 border-blue-600 flex-shrink-0">
        <p className="text-slate-700 text-lg leading-relaxed">
          MSC Home is a comprehensive property rental & real estate platform that connects <span className="font-semibold text-blue-600">URA-certified agents</span>, 
          property developers, management companies, investors, owners, buyers, renters, and freelance realtors in one unified ecosystem.
        </p>
      </div>

      {/* Key Objectives Grid */}
      <div className="grid grid-cols-2 gap-6 flex-1">
        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 mb-2">Platform Purpose</h3>
              <p className="text-slate-600 text-sm">
                Streamline property development, management, documentation, legalization, and listings in a unified platform
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <div className="bg-green-100 p-3 rounded-lg">
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 mb-2">Stakeholder Collaboration</h3>
              <p className="text-slate-600 text-sm">
                Connect agents, developers, investors, owners, buyers, renters, and freelance realtors seamlessly
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Building className="w-8 h-8 text-purple-600" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 mb-2">Service Excellence</h3>
              <p className="text-slate-600 text-sm">
                Property valuation, loan solutions, verification/certification, and transaction management
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <div className="bg-orange-100 p-3 rounded-lg">
              <TrendingUp className="w-8 h-8 text-orange-600" />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 mb-2">Career Empowerment</h3>
              <p className="text-slate-600 text-sm">
                Create significant career opportunities for the next generation in the real estate sector
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Logo */}
      <div className="flex-shrink-0 text-right text-slate-400 text-sm mt-6">
        CodeStorm Hub © 2026
      </div>
    </div>
  );
}