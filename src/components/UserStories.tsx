import { UserCircle, Building2, Briefcase, Users, Home, DollarSign, ShieldCheck } from 'lucide-react';

export function UserStories() {
  const userStories = [
    {
      role: 'URA-Certified Agent',
      icon: ShieldCheck,
      color: 'blue',
      stories: [
        'List and manage properties efficiently',
        'Verify credentials and build trust',
        'Communicate with clients seamlessly'
      ]
    },
    {
      role: 'Property Developer',
      icon: Building2,
      color: 'green',
      stories: [
        'Showcase development projects',
        'Connect with investors and buyers',
        'Track project milestones'
      ]
    },
    {
      role: 'Property Owner',
      icon: Home,
      color: 'purple',
      stories: [
        'List properties for sale or rent',
        'Manage tenant relationships',
        'Get property valuations'
      ]
    },
    {
      role: 'Investor',
      icon: DollarSign,
      color: 'orange',
      stories: [
        'Discover investment opportunities',
        'Track portfolio performance',
        'Access loan solutions'
      ]
    },
    {
      role: 'Buyer/Renter',
      icon: UserCircle,
      color: 'red',
      stories: [
        'Search verified properties',
        'Compare options and prices',
        'Secure transactions safely'
      ]
    },
    {
      role: 'Freelance Realtor',
      icon: Briefcase,
      color: 'indigo',
      stories: [
        'Build professional profile',
        'Access career opportunities',
        'Join realtor community'
      ]
    },
    {
      role: 'Mgmt Company',
      icon: Users,
      color: 'teal',
      stories: [
        'Manage multiple properties',
        'Automate documentation',
        'Handle client communications'
      ]
    }
  ];

  const colorMap: Record<string, { bg: string; text: string; border: string }> = {
    blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
    green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200' },
    purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200' },
    orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200' },
    red: { bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-200' },
    indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-200' },
    teal: { bg: 'bg-teal-50', text: 'text-teal-600', border: 'border-teal-200' }
  };

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-50 to-indigo-50 p-10 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="mb-6 flex-shrink-0">
        <h2 className="text-4xl font-bold text-slate-800 mb-3">User Stories & Personas</h2>
        <div className="h-1 w-24 bg-indigo-600 rounded"></div>
        <p className="text-slate-600 mt-3">Understanding stakeholder needs and user journeys</p>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto pr-2 space-y-6">
        {/* User Stories Grid */}
        <div className="grid grid-cols-3 gap-4">
          {userStories.map((user, index) => {
            const Icon = user.icon;
            const colors = colorMap[user.color];
            
            return (
              <div
                key={index}
                className={`bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all border-2 ${colors.border}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`${colors.bg} p-2 rounded-lg`}>
                    <Icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <h3 className="font-bold text-slate-800 text-sm">{user.role}</h3>
                </div>
                
                <ul className="space-y-2">
                  {user.stories.map((story, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                      <span className={`${colors.text} mt-0.5`}>✓</span>
                      <span>{story}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* User Journey Flow */}
        <div className="bg-white rounded-xl p-5 shadow-md">
          <h3 className="font-bold text-slate-800 mb-4 text-center">Typical User Journey Flow</h3>
          <div className="flex items-center justify-between">
            <div className="flex-1 text-center">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <p className="text-xs text-slate-700">Sign Up & Verify</p>
            </div>
            <div className="w-8 h-0.5 bg-slate-300"></div>
            <div className="flex-1 text-center">
              <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                <span className="text-green-600 font-bold">2</span>
              </div>
              <p className="text-xs text-slate-700">Browse/List Properties</p>
            </div>
            <div className="w-8 h-0.5 bg-slate-300"></div>
            <div className="flex-1 text-center">
              <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                <span className="text-purple-600 font-bold">3</span>
              </div>
              <p className="text-xs text-slate-700">Connect & Communicate</p>
            </div>
            <div className="w-8 h-0.5 bg-slate-300"></div>
            <div className="flex-1 text-center">
              <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                <span className="text-orange-600 font-bold">4</span>
              </div>
              <p className="text-xs text-slate-700">Complete Transaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Logo */}
      <div className="flex-shrink-0 text-right text-slate-400 text-sm mt-4">
        CodeStorm Hub © 2026
      </div>
    </div>
  );
}