const ImagePreview = () => {
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {/* Original image */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <h2 className="text-xl font-semibold text-center bg-gray-800 text-white py-2">Original Image</h2>
        <img src="" alt="" className="w-full h-full object-cover"/>
        <div className="flex items-center justify-center h-80 bg-gray-200">No image Selected</div>
      </div>
{/* Enhanced image */}
       <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <h2 className="text-xl font-semibold text-center bg-blue-800 text-white py-2">Enhanced Image</h2>
        <img src="" alt="" className="w-full h-full object-cover"/>
                <div className="flex items-center justify-center h-80 bg-gray-200">No Enhanced Image</div>

      </div>
    </div>
  );
};

export default ImagePreview;
