export function ERDiagram() {
  const entities = [
    {
      name: 'Users',
      fields: ['id', 'email', 'role', 'verified', 'created_at'],
      relationships: ['Properties (1:N)', 'Agents (1:1)', 'Messages (1:N)']
    },
    {
      name: 'Properties',
      fields: ['id', 'title', 'type', 'price', 'status', 'owner_id'],
      relationships: ['Transactions (1:N)', 'Documents (1:N)', 'Investments (1:N)', 'Valuations (1:N)']
    },
    {
      name: 'Agents',
      fields: ['id', 'user_id', 'ura_cert', 'rating', 'verified'],
      relationships: []
    },
    {
      name: 'Transactions',
      fields: ['id', 'property_id', 'buyer_id', 'amount', 'status'],
      relationships: []
    },
    {
      name: 'Documents',
      fields: ['id', 'property_id', 'type', 'url', 'verified'],
      relationships: []
    },
    {
      name: 'Messages',
      fields: ['id', 'sender_id', 'receiver_id', 'content', 'sent_at'],
      relationships: []
    },
    {
      name: 'Investments',
      fields: ['id', 'investor_id', 'property_id', 'amount', 'roi'],
      relationships: []
    },
    {
      name: 'Valuations',
      fields: ['id', 'property_id', 'value', 'date', 'appraiser_id'],
      relationships: []
    }
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-50 to-green-50 p-10 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="mb-6 flex-shrink-0">
        <h2 className="text-4xl font-bold text-slate-800 mb-3">Entity Relationship Diagram</h2>
        <div className="h-1 w-24 bg-green-600 rounded"></div>
        <p className="text-slate-600 mt-2">Database schema and relationships</p>
      </div>

      {/* Scrollable ERD Content */}
      <div className="flex-1 overflow-y-auto pr-2">
        <div className="bg-white rounded-xl shadow-lg p-6">
          {/* Core Entities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
            {entities.map((entity, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-blue-600 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                {/* Entity Header */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-2 rounded-t-md">
                  <h3 className="font-bold text-sm text-center">{entity.name}</h3>
                </div>

                {/* Entity Fields */}
                <div className="p-3 space-y-1.5">
                  {entity.fields.map((field, fieldIdx) => (
                    <div key={fieldIdx} className="flex items-center gap-2 text-xs">
                      <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${fieldIdx === 0 ? 'bg-yellow-400' : 'bg-slate-300'}`}></div>
                      <span className="text-slate-700 font-mono truncate">{field}</span>
                      {fieldIdx === 0 && <span className="text-yellow-600 font-bold text-xs ml-auto">PK</span>}
                      {field.endsWith('_id') && <span className="text-blue-600 font-bold text-xs ml-auto">FK</span>}
                    </div>
                  ))}
                </div>

                {/* Relationships */}
                {entity.relationships.length > 0 && (
                  <div className="px-3 pb-3 pt-2 border-t border-slate-200">
                    <div className="text-xs font-semibold text-slate-600 mb-1">Related To:</div>
                    {entity.relationships.map((rel, relIdx) => (
                      <div key={relIdx} className="text-xs text-slate-500 flex items-center gap-1">
                        <span className="text-green-600">→</span>
                        <span>{rel}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Database Relationships Summary */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
            <h4 className="font-bold text-slate-800 mb-3 text-sm">Key Relationships</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">→</span>
                <span className="text-slate-700"><strong>Users</strong> have many <strong>Properties</strong> (owner relationship)</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">→</span>
                <span className="text-slate-700"><strong>Properties</strong> have many <strong>Transactions</strong></span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">→</span>
                <span className="text-slate-700"><strong>Properties</strong> have many <strong>Documents</strong></span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">→</span>
                <span className="text-slate-700"><strong>Users</strong> can be <strong>Agents</strong> (one-to-one)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-4 bg-white rounded-lg p-3 shadow-md flex flex-wrap items-center justify-center gap-6 flex-shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
          <span className="text-xs text-slate-700">Primary Key</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
          <span className="text-xs text-slate-700">Attribute</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-blue-600 font-bold">FK</span>
          <span className="text-xs text-slate-700">Foreign Key</span>
        </div>
      </div>

      {/* Footer Logo */}
      <div className="flex-shrink-0 text-right text-slate-400 text-sm mt-4">
        CodeStorm Hub © 2026
      </div>
    </div>
  );
}