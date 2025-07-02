const StatusPage = ({ holeStatuses }) => {
  const colorMap = {
    red: "bg-red-500",
    blue: "bg-blue-500",
    green: "bg-green-500",
    orange: "bg-orange-500",
    yellow: "bg-yellow-400",
  };

  return (
    <div className="min-h-screen bg-gray-200 py-6 px-4">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-center text-xl font-semibold mb-4">สถานะหลุมกอล์ฟ</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {holeStatuses.map(({ hole, color, label }) => (
            <div key={hole} className="text-center p-2 border border-gray-300 rounded-lg bg-gray-50">
              <div className={`text-white font-semibold py-1 rounded ${colorMap[color]}`}>หลุมที่ {hole}</div>
              <div className="mt-2">
                <div className={`w-10 h-10 rounded-full mx-auto ${colorMap[color]}`}></div>
                <p className="mt-1 text-sm">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatusPage;
