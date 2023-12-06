import { useMutation } from "react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function useLogin() {
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      navigate("/dashboard");
      console.log(user);
    },
    onError: (err) => {
      console.log(err);
      toast.error("Provided email and password does not match");
    },
  });
  return { login, isLoading };
}
