import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { acceptFriendRequest, getFriendRequests } from "../lib/api";
import {
  BellIcon,
  ClockIcon,
  MessageSquareIcon,
  UserCheckIcon,
} from "lucide-react";
import NoNotificationsFound from "../components/NoNotificationsFound";

const NotificationsPage = () => {
  const queryClient = useQueryClient();

  const { data: friendRequests, isLoading } = useQuery({
    queryKey: ["friendRequests"],
    queryFn: getFriendRequests,
  });

  const { mutate: acceptRequestMutation, isPending } = useMutation({
    mutationFn: acceptFriendRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["friendRequests"] });
      queryClient.invalidateQueries({ queryKey: ["friends"] });
    },
  });

  const incomingRequests = friendRequests?.incomingReqs || [];
  const acceptedRequests = friendRequests?.acceptedReqs || [];

  return (
    <div className="p-6 lg:p-10">
      <div className="max-w-3xl mx-auto space-y-10">
        {/* PAGE TITLE */}
        {/* <h1 className="text-3xl font-bold tracking-tight">Notifications</h1> */}

        {isLoading ? (
          <div className="flex justify-center py-16">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <>
            {/* FRIEND REQUESTS */}
            {incomingRequests.length > 0 && (
              <section className="space-y-5">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <UserCheckIcon className="w-5 h-5 text-primary" />
                  Friend Requests
                  <span className="ml-2 px-2 py-0.5 text-sm rounded-full bg-primary text-white">
                    {incomingRequests.length}
                  </span>
                </h2>

                <div className="space-y-4">
                  {incomingRequests.map((request) => (
                    <div
                      key={request._id}
                      className="bg-white shadow-sm hover:shadow-md transition rounded-2xl p-4 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={request.sender.profilePic}
                          alt={request.sender.fullName}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {request.sender.fullName}
                          </h3>
                          <div className="flex flex-wrap gap-2 mt-1 text-sm">
                            <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
                              Native: {request.sender.nativeLanguage}
                            </span>
                            <span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                              Learning: {request.sender.learningLanguage}
                            </span>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => acceptRequestMutation(request._id)}
                        disabled={isPending}
                        className="px-4 py-1.5 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition disabled:opacity-50"
                      >
                        Accept
                      </button>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* NEW CONNECTIONS */}
            {acceptedRequests.length > 0 && (
              <section className="space-y-5">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <BellIcon className="w-5 h-5 text-green-600" />
                  New Connections
                </h2>

                <div className="space-y-4">
                  {acceptedRequests.map((notification) => (
                    <div
                      key={notification._id}
                      className="bg-white shadow-sm rounded-2xl p-4 flex items-start gap-4"
                    >
                      <img
                        src={notification.recipient.profilePic}
                        alt={notification.recipient.fullName}
                        className="w-10 h-10 rounded-full object-cover mt-1"
                      />

                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">
                          {notification.recipient.fullName}
                        </h3>
                        <p className="text-sm text-gray-700 mt-1">
                          {notification.recipient.fullName} accepted your friend
                          request
                        </p>
                        <p className="text-xs flex items-center text-gray-500 mt-1">
                          <ClockIcon className="w-3 h-3 mr-1" />
                          Recently
                        </p>
                      </div>

                      <span className="flex items-center gap-1 text-sm font-medium text-green-700 bg-green-100 px-2 py-1 rounded-full">
                        <MessageSquareIcon className="w-3 h-3" />
                        New Friend
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* EMPTY STATE */}
            {incomingRequests.length === 0 &&
              acceptedRequests.length === 0 && <NoNotificationsFound />}
          </>
        )}
      </div>
    </div>
  );
};

export default NotificationsPage;
