import { Link } from "react-router";
import { LANGUAGE_TO_FLAG } from "../constants";

const FriendCard = ({ friend }) => {
  return (
    <div className="bg-white dark:bg-base-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700">
      {/* Card Body */}
      <div className="p-5">
        {/* USER INFO */}
        <div className="flex items-center gap-4 mb-4">
          <div className="avatar">
            <div className="w-14 h-14 rounded-full ring-2 ring-purple-400 overflow-hidden">
              <img src={friend.profilePic} alt={friend.fullName} />
            </div>
          </div>
          <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100 truncate">
            {friend.fullName}
          </h3>
        </div>

        {/* Language Badges */}
        <div className="flex flex-wrap gap-2 mb-5">
          <span className="flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-700">
            {getLanguageFlag(friend.nativeLanguage)}
            Native: {friend.nativeLanguage}
          </span>
          <span className="flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200">
            {getLanguageFlag(friend.learningLanguage)}
            Learning: {friend.learningLanguage}
          </span>
        </div>

        {/* Message Button */}
        <Link
          to={`/chat/${friend._id}`}
          className="w-full py-2 px-4 rounded-xl text-center font-medium bg-purple-600 text-white hover:bg-purple-700 transition-colors duration-300"
        >
          Message
        </Link>
      </div>
    </div>
  );
};

export default FriendCard;

export function getLanguageFlag(language) {
  if (!language) return null;

  const langLower = language.toLowerCase();
  const countryCode = LANGUAGE_TO_FLAG[langLower];

  if (countryCode) {
    return (
      <img
        src={`https://flagcdn.com/24x18/${countryCode}.png`}
        alt={`${langLower} flag`}
        className="h-3 inline-block"
      />
    );
  }
  return null;
}
