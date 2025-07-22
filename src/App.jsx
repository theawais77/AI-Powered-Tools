import Home from "./components/Home";
import Loading from "./components/Loading";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-100 py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-2">AI Image Enhancer </h1>
        <p className="text-lg text-gray-500">
          Upload your image and let AI enahnce it
        </p>
      </div>
      <Home />
<Loading />
      <div className="text-lg text-gray-500 mt-6">
        <p>React AI Powered App</p>
      </div>
    </div>
  );
}

export default App;
