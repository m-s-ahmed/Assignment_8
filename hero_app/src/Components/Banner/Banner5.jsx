const Banner5 = ({ showAll, setShowAll }) => {
  if (showAll) return null;

  return (
    <>
      <div className="flex justify-center mt-10 mb-10">
        <button
          onClick={() => setShowAll(true)}
          className="px-6 py-2 rounded-md bg-violet-600 text-white text-sm font-medium hover:bg-violet-700 transition"
        >
          Show All
        </button>
      </div>
    </>
  );
};

export default Banner5;
