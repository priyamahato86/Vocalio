const NoFriendsFound = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-base-200 rounded-2xl shadow-md p-8 text-center">
      {/* Illustration / Icon */}
      <div className="bg-primary/10 text-primary rounded-full p-6 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M18 18.72a9.094 9.094 0 003.741-.479A9.042 9.042 0 0121 12.75V12a9 9 0 10-9 9c1.5 0 2.915-.38 4.147-1.05M15 9h6m-3-3v6"
          />
        </svg>
      </div>

      {/* Text */}
      <h3 className="font-bold text-xl mb-2">No Friends Yet</h3>
      <p className="text-base-content opacity-70 max-w-sm mb-4">
        You haven’t connected with any language partners yet. Start exploring and find someone to practice with!
      </p>

      {/* Call to Action */}
      <button className="btn btn-primary btn-wide">
        Find Language Partners
      </button>
    </div>
  );
};

export default NoFriendsFound;
