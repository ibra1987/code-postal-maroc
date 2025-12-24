export function StatCard({ 
  icon, 
  label, 
  value, 
  color 
}: { 
  icon: React.ReactNode; 
  label: string; 
  value: number; 
  color: 'red' | 'black' | 'gray';
}) {
  const colors = {
    red: {
      gradient: 'from-red-600 to-red-700',
      pattern: 'bg-red-500/10',
      iconBg: 'bg-white/20'
    },
    black: {
      gradient: 'from-slate-900 to-slate-800',
      pattern: 'bg-slate-700/10',
      iconBg: 'bg-red-600/30'
    },
    gray: {
      gradient: 'from-slate-700 to-slate-800',
      pattern: 'bg-slate-600/10',
      iconBg: 'bg-white/20'
    },
  };

  return (
    <div className={`relative overflow-hidden bg-gradient-to-br ${colors[color].gradient} text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow`}>
      {/* Moroccan pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }} />
      </div>
      
      {/* Content */}
      <div className="relative flex items-center justify-between">
        <div>
          <p className="text-sm opacity-90 mb-1">{label}</p>
          <p className="text-3xl font-bold">{value.toString()}</p>
        </div>
        <div className={`${colors[color].iconBg} backdrop-blur-sm p-3 rounded-lg`}>
          {icon}
        </div>
      </div>
    </div>
  );
}