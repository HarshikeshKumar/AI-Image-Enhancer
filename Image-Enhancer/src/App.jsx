import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8 px-4">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-2">
          AI Image Enhancer
        </h1>
        <p className="text-lg text-gray-500">
          Upload your Image and let AI enhance to in seconds!
        </p>
      </div>

      <Home />

      {/* Footer */}
      <div className="text-sm text-gray-500 mt-6">Powerd by @GauravAI</div>
    </div>
  );
}

export default App;
