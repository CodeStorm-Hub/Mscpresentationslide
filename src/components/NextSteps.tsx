import { CheckCircle2, Calendar, Handshake, Rocket, Mail, Phone } from 'lucide-react';

export function NextSteps() {
  const steps = [
    {
      icon: Handshake,
      title: 'Agreement & Contract',
      description: 'Finalize project scope, timeline, and commercial terms',
      timeline: 'Week 1'
    },
    {
      icon: Calendar,
      title: 'Project Kickoff',
      description: 'Team assembly, requirements workshop, and planning session',
      timeline: 'Week 2'
    },
    {
      icon: CheckCircle2,
      title: 'Design Phase',
      description: 'UI/UX design, prototyping, and stakeholder approvals',
      timeline: 'Weeks 3-6'
    },
    {
      icon: Rocket,
      title: 'Development Start',
      description: 'Sprint planning and core development commencement',
      timeline: 'Week 7+'
    }
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 p-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-pink-300 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold text-white mb-4">Next Steps</h2>
          <p className="text-xl text-blue-100">Let's bring MSC Home to life together</p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-4 gap-6 mb-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">
                  {step.timeline}
                </div>
                <h3 className="font-bold text-white mb-2 text-lg text-center">{step.title}</h3>
                <p className="text-blue-100 text-sm text-center">{step.description}</p>
              </div>
            );
          })}
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Ready to Get Started?</h3>
            <p className="text-slate-600">Contact CodeStorm Hub to discuss your project</p>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
              <Mail className="w-10 h-10 text-blue-600 mx-auto mb-3" />
              <h4 className="font-bold text-slate-800 mb-2">Email Us</h4>
              <p className="text-blue-600 font-semibold">contact@codestormhub.com</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
              <Phone className="w-10 h-10 text-purple-600 mx-auto mb-3" />
              <h4 className="font-bold text-slate-800 mb-2">Call Us</h4>
              <p className="text-purple-600 font-semibold">+1 (555) 123-4567</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold px-8 py-4 rounded-full hover:shadow-xl transition-all hover:scale-105">
              Schedule a Consultation
            </button>
          </div>
        </div>

        {/* Thank You */}
        <div className="text-center mt-8 text-white">
          <p className="text-2xl font-bold mb-2">Thank You!</p>
          <p className="text-blue-100">We look forward to partnering with MSC on this exciting project</p>
          <p className="text-sm text-blue-200 mt-4">CodeStorm Hub - Innovating Real Estate Technology</p>
        </div>
      </div>
    </div>
  );
}
