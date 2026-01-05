export function ERDiagram() {
  const entities = [
    {
      name: 'Users',
      x: 50,
      y: 30,
      fields: ['id', 'email', 'role', 'verified', 'created_at']
    },
    {
      name: 'Properties',
      x: 350,
      y: 30,
      fields: ['id', 'title', 'type', 'price', 'status', 'owner_id']
    },
    {
      name: 'Agents',
      x: 50,
      y: 200,
      fields: ['id', 'user_id', 'ura_cert', 'rating', 'verified']
    },
    {
      name: 'Transactions',
      x: 350,
      y: 200,
      fields: ['id', 'property_id', 'buyer_id', 'amount', 'status']
    },
    {
      name: 'Documents',
      x: 650,
      y: 30,
      fields: ['id', 'property_id', 'type', 'url', 'verified']
    },
    {
      name: 'Messages',
      x: 650,
      y: 200,
      fields: ['id', 'sender_id', 'receiver_id', 'content', 'sent_at']
    },
    {
      name: 'Investments',
      x: 200,
      y: 370,
      fields: ['id', 'investor_id', 'property_id', 'amount', 'roi']
    },
    {
      name: 'Valuations',
      x: 500,
      y: 370,
      fields: ['id', 'property_id', 'value', 'date', 'appraiser_id']
    }
  ];

  const relationships = [
    { from: 0, to: 1, label: '1:N' }, // Users to Properties
    { from: 0, to: 2, label: '1:1' }, // Users to Agents
    { from: 1, to: 3, label: '1:N' }, // Properties to Transactions
    { from: 1, to: 4, label: '1:N' }, // Properties to Documents
    { from: 0, to: 5, label: '1:N' }, // Users to Messages
    { from: 1, to: 6, label: '1:N' }, // Properties to Investments
    { from: 1, to: 7, label: '1:N' }  // Properties to Valuations
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-slate-50 to-green-50 p-10 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="mb-6 flex-shrink-0">
        <h2 className="text-4xl font-bold text-slate-800 mb-3">Entity Relationship Diagram</h2>
        <div className="h-1 w-24 bg-green-600 rounded"></div>
        <p className="text-slate-600 mt-2">Database schema and relationships</p>
      </div>

      {/* Scrollable ERD Canvas */}
      <div className="flex-1 overflow-auto">
        <div className="bg-white rounded-xl shadow-lg p-6 relative min-h-[550px]">
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
            {/* Draw Relationships */}
            {relationships.map((rel, idx) => {
              const fromEntity = entities[rel.from];
              const toEntity = entities[rel.to];
              const x1 = fromEntity.x + 120;
              const y1 = fromEntity.y + 60;
              const x2 = toEntity.x + 120;
              const y2 = toEntity.y + 60;
              
              return (
                <g key={idx}>
                  <line
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="#94a3b8"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                  />
                  <text
                    x={(x1 + x2) / 2}
                    y={(y1 + y2) / 2}
                    fill="#64748b"
                    fontSize="10"
                    fontWeight="bold"
                    textAnchor="middle"
                  >
                    {rel.label}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Draw Entities */}
          {entities.map((entity, idx) => (
            <div
              key={idx}
              className="absolute bg-white border-2 border-blue-600 rounded-lg shadow-md"
              style={{
                left: `${entity.x}px`,
                top: `${entity.y}px`,
                width: '240px',
                zIndex: 2
              }}
            >
              {/* Entity Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-3 py-2 rounded-t-md">
                <h3 className="font-bold text-sm text-center">{entity.name}</h3>
              </div>

              {/* Entity Fields */}
              <div className="p-2 space-y-1">
                {entity.fields.map((field, fieldIdx) => (
                  <div key={fieldIdx} className="flex items-center gap-2 text-xs">
                    <div className={`w-3 h-3 rounded-full ${fieldIdx === 0 ? 'bg-yellow-400' : 'bg-slate-300'}`}></div>
                    <span className="text-slate-700 font-mono">{field}</span>
                    {fieldIdx === 0 && <span className="text-yellow-600 font-bold text-xs">PK</span>}
                    {field.endsWith('_id') && <span className="text-blue-600 font-bold text-xs">FK</span>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-4 bg-white rounded-lg p-3 shadow-md flex items-center justify-center gap-8 flex-shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
          <span className="text-xs text-slate-700">Primary Key</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-slate-300"></div>
          <span className="text-xs text-slate-700">Attribute</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-0.5 bg-slate-400" style={{ borderTop: '2px dashed #94a3b8' }}></div>
          <span className="text-xs text-slate-700">Relationship</span>
        </div>
      </div>

      {/* Footer Logo */}
      <div className="flex-shrink-0 text-right text-slate-400 text-sm mt-4">
        CodeStorm Hub © 2026
      </div>
    </div>
  );
}