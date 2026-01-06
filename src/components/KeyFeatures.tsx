import { Home, FileText, MessageSquare, CreditCard, Shield, TrendingUp, Users, Award } from 'lucide-react';

export function KeyFeatures() {
  const features = [
    {
      icon: Home,
      title: 'Property Listings',
      description: 'Comprehensive buy, sell, and rental listings',
      color: 'blue'
    },
    {
      icon: FileText,
      title: 'Documentation',
      description: 'Real estate docs & legalization',
      color: 'green'
    },
    {
      icon: MessageSquare,
      title: 'Communications',
      description: 'Client & stakeholder messaging',
      color: 'purple'
    },
    {
      icon: CreditCard,
      title: 'Transaction Mgmt',
      description: 'Secure payment & processing',
      color: 'orange'
    },
    {
      icon: Shield,
      title: 'Verification',
      description: 'Certified agents & properties',
      color: 'red'
    },
    {
      icon: TrendingUp,
      title: 'Investment',
      description: 'Investment opportunities tracking',
      color: 'indigo'
    },
    {
      icon: Users,
      title: 'Social Network',
      description: 'Realtor empowerment community',
      color: 'pink'
    },
    {
      icon: Award,
      title: 'Loan Solutions',
      description: 'Property financing options',
      color: 'teal'
    }
  ];

  const colorMap: Record<string, string> = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
    orange: 'from-orange-500 to-orange-600',
    red: 'from-red-500 to-red-600',
    indigo: 'from-indigo-500 to-indigo-600',
    pink: 'from-pink-500 to-pink-600',
    teal: 'from-teal-500 to-teal-600'
  };

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-50 to-purple-50 p-12 flex flex-col">
      {/* Header */}
      <div className="mb-8 flex-shrink-0">
        <h2 className="text-4xl font-bold text-slate-800 mb-3">Key Features & Capabilities</h2>
        <div className="h-1 w-24 bg-purple-600 rounded"></div>
        <p className="text-slate-600 mt-3">Comprehensive platform features designed for complete real estate ecosystem</p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 flex-shrink-0">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${colorMap[feature.color]} rounded-lg flex items-center justify-center mb-3`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-slate-800 mb-1 text-sm">{feature.title}</h3>
              <p className="text-slate-600 text-xs leading-relaxed">{feature.description}</p>
            </div>
          );
        })}
      </div>

      {/* Stats Section */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 flex-shrink-0">
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-4 text-white text-center">
          <div className="text-3xl font-bold mb-1">7+</div>
          <div className="text-sm text-blue-100">User Types</div>
        </div>
        <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-4 text-white text-center">
          <div className="text-3xl font-bold mb-1">15+</div>
          <div className="text-sm text-green-100">Core Features</div>
        </div>
        <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl p-4 text-white text-center">
          <div className="text-3xl font-bold mb-1">3</div>
          <div className="text-sm text-purple-100">Platforms</div>
        </div>
        <div className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-xl p-4 text-white text-center">
          <div className="text-3xl font-bold mb-1">100%</div>
          <div className="text-sm text-orange-100">Scalable</div>
        </div>
      </div>

      {/* Footer Logo */}
      <div className="flex-shrink-0 text-right text-slate-400 text-sm mt-auto pt-6">
        CodeStorm Hub © 2026
      </div>
    </div>
  );
}