export interface AddQuizProps {
    title: string;
    description: string;
    passMark: string;
    id?: string;
}

export interface QuizData {
    title: string;
    user: string;
    totalTimeAllowed: number;
    totalQuestions: number;
    isPublished: boolean;
    _id: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    id: string;
}

export interface QuizResponse {
    message: string;
    data: QuizData;
}

export interface QuizAttemptReq {
    message: string;
    data: {
        attempt: {
            user: string;
            quiz: string;
            startTime: string;
            totalCorrectMarks: number;
            completed: boolean;
            _id: string;
            createdAt: string;
            updatedAt: string;
            __v: number;
        };
        firstQuestion: ActiveQuestionProps;
    };
}
export interface QuestionAttemptReq {
    message: string;
    data: {
        isCorrect: boolean;
    };
}
export interface SubmitQuizReq {
    message: string;
    data: {
        totalScore: number;
    };
}

export interface QuestionAttempt {
    id: string;
    selectedOptions: string[];
}



export interface GetQuizRes {
    message: string;
    data: Quiz[];
}

interface Option {
    text: string;
    isCorrect: boolean;
    _id?: string;
}

export interface Question {
    marksAwarded: number;
    questionText: string;
    quiz?: string;
    quizId: string;
    user?: string;
    file?: string | null;
    options: Option[];
    image?: string | null;
    isMultipleSelect: boolean;
    durationUsed?: number;
    startTime?: string | null;
    endTime?: string | null;
    allotedTime: number;
    allotedMetric: string;
    id?: string;
}

export interface Quiz {
    passMark: number;
    _id: string;
    title: string;
    user: string;
    totalTimeAllowed: number;
    totalQuestions: number;
    isPublished: boolean;
    createdAt: string;
    updatedAt: string;
    __v: number;
    questions?: Question[];
    id: string;
}

export interface GetOneQuiz {
    message: string;
    data: Quiz;
}

export interface LeaderboardProps {
    name: string;
    duration: string;
    score: number;
    passMark: number;
    title: string;
    totalQuestions: number;
    totalTimeAllowed: string;
}

export interface GetLeaderboardProps {
    message: string;
    data: LeaderboardProps[];
}

export interface ActiveQuestionProps {
    _id: string;
    questionText: string;
    options: string[];
    image: null | string,
    isMultipleSelect: boolean,
    allotedTime: number,
    allotedMetric: string,
    durationUsed: number,
    remainingTime: number,
    hasPrevQuestion: boolean,
    hasNextQuestion: true;
}

export interface GetNextQuestionRez {
    message: string;
    data: ActiveQuestionProps;
}


export interface QuizSummary {
    totalAttempts: number;
    passedCount: number;
    failedCount: number;
    completeCount: number;
    incompleteCount: number;
}

export interface QuizDetail {
    name: string;
    duration: string;
    score: number;
    passMark: number;
    title: string;
    totalQuestions: number;
    totalTimeAllowed: string;
    isPassed: boolean;
    isComplete: boolean;
}

export interface QuizHistoryReq {
    message: string;
    data: {
        summary: QuizSummary;
        details: QuizDetail[];
    };
}

