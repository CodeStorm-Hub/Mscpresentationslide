import { Smartphone, Globe, Server, Database, Cloud, Shield, Zap } from 'lucide-react';

export function SystemArchitecture() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-50 to-blue-50 p-10 flex flex-col">
      {/* Header */}
      <div className="mb-6 flex-shrink-0">
        <h2 className="text-4xl font-bold text-slate-800 mb-3">System Architecture</h2>
        <div className="h-1 w-24 bg-blue-600 rounded"></div>
        <p className="text-slate-600 mt-2">Modern, scalable microservices architecture</p>
      </div>

      {/* Architecture Diagram */}
      <div className="bg-white rounded-xl p-6 shadow-lg flex-1 flex flex-col justify-between">
        {/* Client Layer */}
        <div className="mb-6">
          <h3 className="text-sm font-bold text-slate-700 mb-3 text-center">Client Layer</h3>
          <div className="flex justify-center gap-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-4 w-40 text-white text-center shadow-md">
              <Globe className="w-8 h-8 mx-auto mb-2" />
              <div className="font-bold text-sm">Web App</div>
              <div className="text-xs text-blue-100">React + TypeScript</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-4 w-40 text-white text-center shadow-md">
              <Smartphone className="w-8 h-8 mx-auto mb-2" />
              <div className="font-bold text-sm">Mobile App</div>
              <div className="text-xs text-green-100">React Native</div>
            </div>
          </div>
        </div>

        {/* Arrow Down */}
        <div className="flex justify-center mb-6">
          <div className="w-1 h-8 bg-gradient-to-b from-slate-300 to-slate-400"></div>
        </div>

        {/* API Gateway */}
        <div className="mb-6">
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-4 max-w-md mx-auto text-white text-center shadow-md">
            <Zap className="w-8 h-8 mx-auto mb-2" />
            <div className="font-bold text-sm">API Gateway</div>
            <div className="text-xs text-purple-100">Load Balancing • Authentication • Rate Limiting</div>
          </div>
        </div>

        {/* Arrow Down */}
        <div className="flex justify-center mb-6">
          <div className="w-1 h-8 bg-gradient-to-b from-slate-300 to-slate-400"></div>
        </div>

        {/* Backend Services */}
        <div className="mb-6">
          <h3 className="text-sm font-bold text-slate-700 mb-3 text-center">Backend Services (Microservices)</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              { name: 'User Service', color: 'from-orange-500 to-orange-600' },
              { name: 'Property Service', color: 'from-red-500 to-red-600' },
              { name: 'Transaction Service', color: 'from-indigo-500 to-indigo-600' },
              { name: 'Communication Service', color: 'from-pink-500 to-pink-600' }
            ].map((service, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${service.color} rounded-lg p-3 text-white text-center shadow-md`}>
                <Server className="w-6 h-6 mx-auto mb-1" />
                <div className="text-xs font-bold">{service.name}</div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-3">
            {[
              { name: 'Document Service', color: 'from-teal-500 to-teal-600' },
              { name: 'Verification Service', color: 'from-cyan-500 to-cyan-600' },
              { name: 'Payment Service', color: 'from-yellow-500 to-yellow-600' },
              { name: 'Analytics Service', color: 'from-violet-500 to-violet-600' }
            ].map((service, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${service.color} rounded-lg p-3 text-white text-center shadow-md`}>
                <Server className="w-6 h-6 mx-auto mb-1" />
                <div className="text-xs font-bold">{service.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrow Down */}
        <div className="flex justify-center mb-6">
          <div className="w-1 h-8 bg-gradient-to-b from-slate-300 to-slate-400"></div>
        </div>

        {/* Data Layer */}
        <div>
          <h3 className="text-sm font-bold text-slate-700 mb-3 text-center">Data & Infrastructure Layer</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg p-3 w-full sm:w-36 text-white text-center shadow-md">
              <Database className="w-6 h-6 mx-auto mb-1" />
              <div className="text-xs font-bold">PostgreSQL</div>
              <div className="text-xs text-slate-300">Primary DB</div>
            </div>
            <div className="bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg p-3 w-full sm:w-36 text-white text-center shadow-md">
              <Database className="w-6 h-6 mx-auto mb-1" />
              <div className="text-xs font-bold">MongoDB</div>
              <div className="text-xs text-slate-300">Documents</div>
            </div>
            <div className="bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg p-3 w-full sm:w-36 text-white text-center shadow-md">
              <Cloud className="w-6 h-6 mx-auto mb-1" />
              <div className="text-xs font-bold">AWS S3</div>
              <div className="text-xs text-slate-300">File Storage</div>
            </div>
            <div className="bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg p-3 w-full sm:w-36 text-white text-center shadow-md">
              <Shield className="w-6 h-6 mx-auto mb-1" />
              <div className="text-xs font-bold">Redis Cache</div>
              <div className="text-xs text-slate-300">Performance</div>
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