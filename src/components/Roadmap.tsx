import { Calendar, CheckCircle2, Circle, Clock } from 'lucide-react';

export function Roadmap() {
  const phases = [
    {
      phase: 'Phase 1: Foundation',
      duration: '8 Weeks',
      status: 'planning',
      color: 'blue',
      milestones: [
        'Requirements gathering & analysis',
        'UI/UX design and prototyping',
        'Database schema design',
        'Technical architecture finalization'
      ]
    },
    {
      phase: 'Phase 2: Core Development',
      duration: '12 Weeks',
      status: 'upcoming',
      color: 'purple',
      milestones: [
        'User authentication & authorization',
        'Property listing management',
        'Agent verification system',
        'Basic search & filtering'
      ]
    },
    {
      phase: 'Phase 3: Advanced Features',
      duration: '10 Weeks',
      status: 'upcoming',
      color: 'green',
      milestones: [
        'Transaction management system',
        'Document management & verification',
        'Communication & messaging',
        'Investment tracking module'
      ]
    },
    {
      phase: 'Phase 4: Integration',
      duration: '6 Weeks',
      status: 'upcoming',
      color: 'orange',
      milestones: [
        'Payment gateway integration',
        'Third-party API integrations',
        'Mobile app development',
        'Real-time notifications'
      ]
    },
    {
      phase: 'Phase 5: Testing & Launch',
      duration: '6 Weeks',
      status: 'upcoming',
      color: 'red',
      milestones: [
        'Comprehensive testing (QA)',
        'Security audits & penetration testing',
        'Performance optimization',
        'Production deployment & launch'
      ]
    }
  ];

  const colorMap: Record<string, { bg: string; text: string; border: string }> = {
    blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-500' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-500' },
    green: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-500' },
    orange: { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-500' },
    red: { bg: 'bg-red-100', text: 'text-red-600', border: 'border-red-500' }
  };

  const statusIcons: Record<string, any> = {
    planning: Clock,
    upcoming: Circle
  };

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-50 to-orange-50 p-10 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="mb-6 flex-shrink-0">
        <h2 className="text-4xl font-bold text-slate-800 mb-3">Development Roadmap</h2>
        <div className="h-1 w-24 bg-orange-600 rounded"></div>
        <p className="text-slate-600 mt-2">42-week comprehensive development plan</p>
      </div>

      {/* Timeline Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6 flex-shrink-0">
        <div className="bg-white rounded-lg p-4 shadow-md text-center border-l-4 border-blue-600">
          <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-slate-800">42 Weeks</div>
          <div className="text-sm text-slate-600">Total Duration</div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-md text-center border-l-4 border-green-600">
          <CheckCircle2 className="w-8 h-8 text-green-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-slate-800">5 Phases</div>
          <div className="text-sm text-slate-600">Development Stages</div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-md text-center border-l-4 border-purple-600">
          <Clock className="w-8 h-8 text-purple-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-slate-800">20+</div>
          <div className="text-sm text-slate-600">Key Milestones</div>
        </div>
      </div>

      {/* Phases Timeline - Scrollable */}
      <div className="flex-1 overflow-y-auto pr-2 space-y-4">
        {phases.map((phase, idx) => {
          const colors = colorMap[phase.color];
          const StatusIcon = statusIcons[phase.status];
          
          return (
            <div key={idx} className="relative">
              {/* Connector Line */}
              {idx < phases.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-20 bg-slate-300"></div>
              )}

              <div className={`bg-white rounded-lg shadow-md border-l-4 ${colors.border} p-4 relative`}>
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`${colors.bg} p-3 rounded-full mt-1`}>
                    <StatusIcon className={`w-6 h-6 ${colors.text}`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-slate-800 text-lg">{phase.phase}</h3>
                      <div className={`${colors.bg} ${colors.text} px-3 py-1 rounded-full text-sm font-semibold`}>
                        {phase.duration}
                      </div>
                    </div>

                    {/* Milestones */}
                    <div className="grid grid-cols-2 gap-2">
                      {phase.milestones.map((milestone, mIdx) => (
                        <div key={mIdx} className="flex items-start gap-2">
                          <div className={`${colors.text} mt-1`}>✓</div>
                          <span className="text-sm text-slate-700">{milestone}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Logo */}
      <div className="flex-shrink-0 text-center text-slate-400 text-sm mt-4">
        CodeStorm Hub © 2026
      </div>
    </div>
  );
}