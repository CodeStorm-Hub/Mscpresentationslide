import { TrendingUp, Users, Shield, Zap, DollarSign, Globe, Award, Target } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Market Leadership',
      description: 'Comprehensive platform addressing all stakeholder needs in real estate sector',
      color: 'blue',
      stats: '360° Coverage'
    },
    {
      icon: Users,
      title: 'Unified Ecosystem',
      description: 'Single platform connecting developers, agents, investors, and clients',
      color: 'green',
      stats: '7+ User Types'
    },
    {
      icon: Shield,
      title: 'Trust & Verification',
      description: 'URA-certified agents and verified properties ensure credibility',
      color: 'purple',
      stats: '100% Verified'
    },
    {
      icon: Zap,
      title: 'Operational Efficiency',
      description: 'Automate property management, documentation, and transactions',
      color: 'orange',
      stats: '70% Faster'
    },
    {
      icon: DollarSign,
      title: 'Revenue Streams',
      description: 'Multiple monetization through listings, transactions, and premium features',
      color: 'red',
      stats: '5+ Revenue Sources'
    },
    {
      icon: Globe,
      title: 'Scalability',
      description: 'Cloud-native architecture supporting growth and expansion',
      color: 'indigo',
      stats: 'Unlimited Scale'
    },
    {
      icon: Award,
      title: 'Career Opportunities',
      description: 'Empower freelance realtors with professional growth platform',
      color: 'pink',
      stats: '1000+ Opportunities'
    },
    {
      icon: Target,
      title: 'Market Differentiation',
      description: 'Unique features like loan solutions, valuations, and social empowerment',
      color: 'teal',
      stats: 'Industry First'
    }
  ];

  const colorMap: Record<string, { bg: string; text: string; gradient: string }> = {
    blue: { bg: 'bg-blue-50', text: 'text-blue-600', gradient: 'from-blue-500 to-blue-600' },
    green: { bg: 'bg-green-50', text: 'text-green-600', gradient: 'from-green-500 to-green-600' },
    purple: { bg: 'bg-purple-50', text: 'text-purple-600', gradient: 'from-purple-500 to-purple-600' },
    orange: { bg: 'bg-orange-50', text: 'text-orange-600', gradient: 'from-orange-500 to-orange-600' },
    red: { bg: 'bg-red-50', text: 'text-red-600', gradient: 'from-red-500 to-red-600' },
    indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', gradient: 'from-indigo-500 to-indigo-600' },
    pink: { bg: 'bg-pink-50', text: 'text-pink-600', gradient: 'from-pink-500 to-pink-600' },
    teal: { bg: 'bg-teal-50', text: 'text-teal-600', gradient: 'from-teal-500 to-teal-600' }
  };

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-50 to-indigo-50 p-10 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="mb-6 flex-shrink-0">
        <h2 className="text-4xl font-bold text-slate-800 mb-3">Business Benefits & Value Proposition</h2>
        <div className="h-1 w-24 bg-indigo-600 rounded"></div>
        <p className="text-slate-600 mt-2">Strategic advantages and competitive edge</p>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto pr-2 space-y-6">
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            const colors = colorMap[benefit.color];
            
            return (
              <div key={idx} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all p-4">
                <div className={`${colors.bg} w-12 h-12 rounded-lg flex items-center justify-center mb-3`}>
                  <Icon className={`w-6 h-6 ${colors.text}`} />
                </div>
                <h3 className="font-bold text-slate-800 mb-2 text-sm">{benefit.title}</h3>
                <p className="text-xs text-slate-600 mb-3 leading-relaxed">{benefit.description}</p>
                <div className={`bg-gradient-to-r ${colors.gradient} text-white text-xs font-bold px-2 py-1 rounded-full inline-block`}>
                  {benefit.stats}
                </div>
              </div>
            );
          })}
        </div>

        {/* ROI Projection */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="font-bold text-slate-800 mb-4 text-center text-lg">Projected ROI & Impact</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg p-4 mb-2">
                <div className="text-3xl font-bold">150%</div>
              </div>
              <p className="text-sm text-slate-600">ROI Year 1</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg p-4 mb-2">
                <div className="text-3xl font-bold">10K+</div>
              </div>
              <p className="text-sm text-slate-600">Active Users</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg p-4 mb-2">
                <div className="text-3xl font-bold">5K+</div>
              </div>
              <p className="text-sm text-slate-600">Property Listings</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-lg p-4 mb-2">
                <div className="text-3xl font-bold">$2M+</div>
              </div>
              <p className="text-sm text-slate-600">Transaction Volume</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Logo */}
      <div className="flex-shrink-0 text-center text-slate-400 text-sm mt-4">
        CodeStorm Hub © 2026
      </div>
    </div>
  );
}