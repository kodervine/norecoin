const Loader = () => {
  return (
    <div className="flex items-center justify-center gap-3 h-screen bg-white text-center">
      <div className="flex items-center justify-center gap-4">
        <div className="relative">
          <div className="h-12 w-12 rounded-full border-t-8 border-b-8 border-gray-200"></div>
          <div className="absolute top-0 left-0 h-12 w-12 rounded-full border-t-8 border-b-8 border-rose-500 animate-spin"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
