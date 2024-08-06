import requestNew from "@/app/utils/requestNew";
import { RegisterReq, SelfReq, SignupProps } from "./auth.interface";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useAppDispatch } from "@/app/redux/store";
import { getSelf } from "./authSlice";

export const register = (data: SignupProps) => {
    const response = requestNew<RegisterReq>({
        url: '/auth/register',
        method: 'POST',
        data
    });
    return response;
};

export const useRegisterMutation = () => {
    return useMutation<RegisterReq, Error, SignupProps>({
        mutationFn: register,
        onSuccess(data) {
            localStorage.setItem('token', JSON.stringify(data?.token.token));
        }
    });
};

export const useGetSelf = () => {
    const dispatch = useAppDispatch();
    return useQuery<SelfReq>({
        queryKey: ['get-self', {}],
        enabled: true,
        queryFn: async () => {
            const data = await requestNew<SelfReq>({
                url: '/auth/self',
                method: 'GET',
            });
            if (data) {
                dispatch(getSelf(data));
            }
            return data;
        }
    });
};