import Home from "./components/Home"

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-100 py-8 px-4">
      <div text-center mb-8>
        <h1> </h1>
        <p></p>
      </div>
    <Home />
    <div className="text-lg text-gray-500">
      <p>React AI Powered App</p>
      <p>Upload your image and let AI enahnce it</p>
      
    </div>
    </div>
    
  )
}

export default App