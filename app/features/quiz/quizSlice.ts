import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ActiveQuestionProps, Quiz, QuizDetail, QuizSummary } from './quiz.interface';

interface InitialState {
    selectedRole: null | string;
    quiz: Quiz[] | null;
    oneQuiz: Quiz | null;
    quizHistroy: QuizDetail[];
    quizSummary: QuizSummary | null;
    activeQuestion: ActiveQuestionProps | null;
    attemptId: string | null
    totalScore: number | null
}

const initialState: InitialState = {
    selectedRole: null,
    quiz: null,
    oneQuiz: null,
    quizHistroy: [],
    quizSummary: null,
    activeQuestion: null,
    attemptId: null,
    totalScore: null
};

export const quizSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setSelectedRole: (state, action: PayloadAction<string | null>) => {
            state.selectedRole = action.payload;
        },
        getAllQuiz: (state, action: PayloadAction<Quiz[] | null>) => {
            state.quiz = action.payload;
        },
        getOneQuiz: (state, action: PayloadAction<Quiz | null>) => {
            state.oneQuiz = action.payload;
        },
        getQuizSummary: (state, action: PayloadAction<QuizSummary | null>) => {
            state.quizSummary = action.payload;
        },
        getQuizHistory: (state, action: PayloadAction<QuizDetail[]>) => {
            state.quizHistroy = action.payload;
        },
        getActiveQuestion: (state, action: PayloadAction<ActiveQuestionProps>) => {
            state.activeQuestion = action.payload;
        },
        setAttemptId: (state, action: PayloadAction<string | null>) => {
            state.attemptId = action.payload;
        },
        setTotalScore: (state, action: PayloadAction<number | null>) => {
            state.totalScore = action.payload;
        },
    }
});

export const { setSelectedRole, getAllQuiz, setAttemptId, getActiveQuestion, getOneQuiz, getQuizSummary, getQuizHistory, setTotalScore } = quizSlice.actions;
export default quizSlice.reducer;
