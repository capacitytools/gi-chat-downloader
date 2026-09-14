export const metadata = { title: 'Admin — G1-Chat' };

export default function AdminPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
      <div className="card text-sm text-gray-500">
        Analytics, ad placements and blog editor will be added here in a later phase.
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="card">
          <p className="text-xs text-gray-500">Visitors today</p>
          <p className="text-2xl font-bold text-brand-600">—</p>
        </div>
        <div className="card">
          <p className="text-xs text-gray-500">Total downloads</p>
          <p className="text-2xl font-bold text-brand-600">—</p>
        </div>
      </div>
    </div>
  );
}