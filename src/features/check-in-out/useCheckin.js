/* eslint-disable no-unused-vars */
import { useMutation, useQueryClient } from "react-query";
import { updateBooking } from "../../services/apiBookings";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

export default function useCheckin() {
  //   const { bookingId } = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: ({ bookingId, breakfast }) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
        ...breakfast,
      }),

    onSuccess: (data) => {
      toast.success(`Booking #${data.id} Successfully checked in`);
      queryClient.invalidateQueries();

      navigate("/");
    },
    onError: () => {
      toast.error(` There was an error while checkin`);
    },
  });
  return { checkin, isCheckingIn };
}
