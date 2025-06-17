const StudioThumbnail = ({ studio, isSelected, onClick }) => {
  return (
    <div
      className={`relative group cursor-pointer transition-all duration-300 ${
        isSelected ? "ring-2 ring-primary" : ""
      }`}
      onClick={onClick}
    >
      <div className="relative h-32 md:h-40 lg:h-48 rounded-lg overflow-hidden bg-gray-800 shadow-lg">
        <img
          src={studio?.image}
          alt={studio?.title}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
        />

        {/* Overlay */}
        <div
          className={`absolute inset-0 transition-all duration-300 ${
            isSelected ? "bg-primary/20" : "bg-black/20 group-hover:bg-black/40"
          }`}
        ></div>

        {/* Selected Indicator */}
        {isSelected && (
          <div className="absolute top-2 right-2 w-3 h-3 bg-primary rounded-full shadow-lg animate-pulse"></div>
        )}

        {/* Hover Play Icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
            <svg
              className="w-4 h-4 text-white ml-0.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudioThumbnail;
