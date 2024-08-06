import requestNew from "@/app/utils/requestNew";
import { AddQuizProps, GetLeaderboardProps, GetNextQuestionRez, GetOneQuiz, GetQuizRes, Question, QuestionAttempt, QuestionAttemptReq, QuizAttemptReq, QuizHistoryReq, QuizResponse, SubmitQuizReq } from "./quiz.interface";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAppDispatch } from "@/app/redux/store";
import { getActiveQuestion, getAllQuiz, getOneQuiz, getQuizHistory, getQuizSummary, setAttemptId, setTotalScore } from "./quizSlice";

export const addQuiz = (data: AddQuizProps) => {
    const response = requestNew<QuizResponse>({
        url: '/quiz/create',
        method: 'POST',
        data
    });
    return response;
};

export const publishQuiz = (id: string) => {
    const response = requestNew<QuizResponse>({
        url: `/quiz/${id}/publish`,
        method: 'PATCH',
    });
    return response;
};

export const attemptQuiz = (id: string) => {
    const response = requestNew<QuizAttemptReq>({
        url: `/attempt/${id}/quiz`,
        method: 'POST',
    });
    return response;
};

export const submitQuiz = (id: string) => {
    const response = requestNew<SubmitQuizReq>({
        url: `/attempt/${id}/submit`,
        method: 'POST',
    });
    return response;
};

export const nextQuestion = (id: string) => {
    const response = requestNew<GetNextQuestionRez>({
        url: `/attempt/question/${id}/next`,
        method: 'POST',
    });
    return response;
};

export const prevQuestion = (id: string) => {
    const response = requestNew<GetNextQuestionRez>({
        url: `/attempt/question/${id}/prev`,
        method: 'POST',
    });
    return response;
};

export const attemptQuestion = (data: QuestionAttempt) => {
    const { selectedOptions, id } = data;
    const response = requestNew<QuestionAttemptReq>({
        url: `/attempt/${id}/question`,
        method: 'POST',
        data: { selectedOptions }
    });
    return response;
};


export const editQuiz = (data: AddQuizProps) => {
    const { id, title, description, passMark } = data;
    const response = requestNew<QuizResponse>({
        url: `/quiz/${id}/edit`,
        method: 'PATCH',
        data: { title, description, passMark }
    });
    return response;
};

export const addQuestion = (data: Question) => {
    const formData = new FormData();
    formData.append('questionText', data.questionText);
    formData.append('quizId', data.quizId);
    formData.append('isMultipleSelect', data.isMultipleSelect.toString());
    formData.append('marksAwarded', data.marksAwarded.toString());
    formData.append('allotedTime', data.allotedTime.toString());
    formData.append('allotedMetric', data.allotedMetric);
    data.options.forEach((option, index) => {
        formData.append(`options[${index}][text]`, option.text);
        formData.append(`options[${index}][isCorrect]`, option.isCorrect.toString());
    });

    if (data.file) {
        formData.append('file', data.file);
    }

    const response = requestNew<QuizResponse>({
        url: '/question/create',
        method: 'POST',
        data: formData
    });
    return response;
};

export const useGetAllQuiz = () => {
    const dispatch = useAppDispatch();
    return useQuery<GetQuizRes>({
        queryKey: ['get-all', {}],
        enabled: true,
        queryFn: async () => {
            const data = await requestNew<GetQuizRes>({
                url: '/quiz',
                method: 'GET',
            });
            if (data) {
                dispatch(getAllQuiz(data?.data));
            }
            return data;
        }
    });
};

export const useGetOneQuiz = (id: string) => {
    const dispatch = useAppDispatch();
    return useQuery<GetOneQuiz>({
        queryKey: ['get-one', {}],
        enabled: true,
        queryFn: async () => {
            const data = await requestNew<GetOneQuiz>({
                url: `/quiz/${id}`,
                method: 'GET',
            });
            if (data) {
                dispatch(getOneQuiz(data?.data));
            }
            return data;
        }
    });
};

export const useGetLeaderboard = (id: string) => {
    const dispatch = useAppDispatch();
    return useQuery<GetLeaderboardProps>({
        queryKey: ['get-one', { id }],
        enabled: !!id,
        queryFn: async () => {
            const data = await requestNew<GetLeaderboardProps>({
                url: `/leaderboard/${id}/top`,
                method: 'GET',
            });
            return data;
        }
    });
};


export const useGetQuizHistory = () => {
    const dispatch = useAppDispatch();
    return useQuery<QuizHistoryReq>({
        queryKey: ['get-history', {}],
        enabled: true,
        queryFn: async () => {
            const data = await requestNew<QuizHistoryReq>({
                url: `/attempt/history`,
                method: 'GET',
            });
            if (data) {
                dispatch(getQuizHistory(data?.data?.details));
                dispatch(getQuizSummary(data?.data?.summary));
            }
            return data;
        }
    });
};

export const useAddQuizMutation = () => {
    const queryClient = useQueryClient();
    return useMutation<QuizResponse, Error, AddQuizProps>({
        mutationFn: addQuiz,
        onSuccess() {
            queryClient.invalidateQueries({ queryKey: ["get-all"] });
        }
    });
};

export const useGetPrevMutation = () => {
    const dispatch = useAppDispatch();
    const queryClient = useQueryClient();
    return useMutation<GetNextQuestionRez, Error, string>({
        mutationFn: prevQuestion,
        onSuccess(data) {
            dispatch(getActiveQuestion(data?.data));

            queryClient.invalidateQueries({ queryKey: ["get-all"] });
        }
    });
};

export const useGetNextMutation = () => {
    const dispatch = useAppDispatch();
    const queryClient = useQueryClient();
    return useMutation<GetNextQuestionRez, Error, string>({
        mutationFn: nextQuestion,
        onSuccess(data) {
            dispatch(getActiveQuestion(data?.data));
            queryClient.invalidateQueries({ queryKey: ["get-all"] });
        }
    });
};

export const useEditQuizMutation = () => {
    const queryClient = useQueryClient();
    return useMutation<QuizResponse, Error, AddQuizProps>({
        mutationFn: editQuiz,
        onSuccess() {
            queryClient.invalidateQueries({ queryKey: ["get-all"] });
        }
    });
};

export const usePublishMutation = () => {
    return useMutation<QuizResponse, Error, string>({
        mutationFn: publishQuiz,
        onSuccess() {
        }
    });
};

export const useAttemptQuizMutation = () => {
    const dispatch = useAppDispatch();
    return useMutation<QuizAttemptReq, Error, string>({
        mutationFn: attemptQuiz,
        onSuccess(data) {
            dispatch(setAttemptId(data.data.attempt._id));
            dispatch(getActiveQuestion(data?.data.firstQuestion));
        }
    });
};
export const useAttemptQuestionMutation = () => {
    return useMutation<QuestionAttemptReq, Error, QuestionAttempt>({
        mutationFn: attemptQuestion,
    });
};

export const useSubmitQuizMutation = () => {
    const dispatch = useAppDispatch();
    return useMutation<SubmitQuizReq, Error, string>({
        mutationFn: submitQuiz,
        onSuccess(data) {
            dispatch(setTotalScore(data?.data.totalScore));
        }
    });
};

export const useAddQuestionMutation = () => {
    const queryClient = useQueryClient();
    return useMutation<QuizResponse, Error, Question>({
        mutationFn: addQuestion,
        onSuccess() {
            queryClient.invalidateQueries({ queryKey: ["get-one"] });
        }
    });
};