const TailwindTest = () => (
    <div className="p-4 m-4 border border-gray-300 rounded">
      <h2 className="text-2xl font-helvetica font-bold text-oda-blue mb-4">
        Tailwind CSS Test
      </h2>
      <div className="bg-oda-indigo text-white p-3 rounded mb-2">
        Custom oda-indigo background
      </div>
      <div className="bg-auburn text-white p-3 rounded mb-2">
        Custom auburn background
      </div>
      <div className="bg-airforce-blue text-white p-3 rounded mb-2">
        Custom airforce-blue background
      </div>
      <div className="hidden md:block bg-seasalt p-3 rounded">
        This is only visible on medium screens and up (responsive test)
      </div>
    </div>
  );

  export default TailwindTest;