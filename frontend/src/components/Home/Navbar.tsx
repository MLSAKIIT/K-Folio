export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 bg-[#050b1f]/80 backdrop-blur-md border-b border-blue-900">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        <div className="text-xl font-bold">K-Folio</div>

        <input
          placeholder="Search for something here..."
          className="bg-[#0b1430] px-4 py-2 rounded-full w-96 outline-none border border-blue-800"
        />

        <div className="flex items-center gap-4">
          <button>✈</button>
          <button>🔔</button>
          <div className="w-8 h-8 rounded-full bg-blue-600"></div>
        </div>
      </div>
    </div>
  );
}
