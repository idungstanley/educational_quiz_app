import program from '@/public/programing.png';
import choose from '@/public/choose.png';
import score from '@/public/score.png';
import leaderboard from '@/public/leaderboard.png';
import { MdAssignmentAdd, MdLeaderboard, MdMobileFriendly, MdOutlineConnectWithoutContact, MdWorkHistory } from 'react-icons/md';
import { TbBrandSpeedtest } from 'react-icons/tb';
import { RiHome7Fill } from 'react-icons/ri';
import { RowItem } from '../types';
import { Question } from '../features/quiz/quiz.interface';

export const navItems = [
    { name: 'Home', route: '/dashboard', image: RiHome7Fill },
    { name: 'Quiz', route: '/quiz', image: TbBrandSpeedtest },
    { name: 'Leaderboard', route: '/leaderboard', image: MdLeaderboard },
    { name: 'Score history', route: '/score-history', image: MdWorkHistory },
];

export const featuresCard = [
    { title: 'Browse and Take Quizzes', image: choose },
    { title: 'Points System', image: score },
    { title: 'Leaderboard', image: leaderboard },
    { title: 'Create and Manage Quizzes', image: program },
];

export const quizItem = [
    { title: 'Javascript', image: "/choose.png", number_of_questions: 30 },
    { title: 'Physics', image: "/score.png", number_of_questions: 20 },
    { title: 'Mathematics', image: "/leaderboard.png", number_of_questions: 50 },
    { title: 'French', image: "/programing.png", number_of_questions: 30 },
];


export const stepsData = [
    { title: 'Sign in or Create an account', image: "one", desc: "hi i am telling you to go for what you want if you are ready to move things", Icon: MdMobileFriendly },
    { title: 'Select a quiz/test', image: "two", desc: "hi i am telling you to go for what you want if you are ready to move things", Icon: MdAssignmentAdd },
    { title: 'Connect with your teacher', image: "three", desc: 'hi i am telling you to go for what you want if you are ready to move things', Icon: MdOutlineConnectWithoutContact },
];

export const alphabet = ["A", "B", "C", "D"];
export const allotedMetricsData = [{ value: "hours", name: "Hours" }, { name: "Minutes", value: 'minutes' }, { name: "Seconds", value: "seconds" }];

export const benefitsOfTeacher = ["Enhanced Student Engagement", "Efficient Assessment Tools", "Fostering Healthy Competition", "Improved Classroom Management", "Flexible Quiz Creation"];


export const rowItems: RowItem[] = [
    {
        score: "95",
        time: "12:34",
        average_time: "10:30",
        full_name: "John Doe"
    },
    {
        score: "88",
        time: "14:20",
        average_time: "11:15",
        full_name: "Jane Smith"
    },
    {
        score: "92",
        time: "13:10",
        average_time: "12:00",
        full_name: "Emily Johnson"
    },
    {
        score: "75",
        time: "15:45",
        average_time: "14:00",
        full_name: "Michael Brown"
    },
    {
        score: "85",
        time: "11:50",
        average_time: "10:45",
        full_name: "Sarah Davis"
    },
    {
        score: "98",
        time: "10:20",
        average_time: "09:55",
        full_name: "David Wilson"
    },
    {
        score: "79",
        time: "16:10",
        average_time: "14:30",
        full_name: "Laura Martinez"
    },
    {
        score: "91",
        time: "12:40",
        average_time: "11:00",
        full_name: "James Anderson"
    },
    {
        score: "87",
        time: "13:30",
        average_time: "12:10",
        full_name: "Emma Thompson"
    },
    {
        score: "82",
        time: "14:15",
        average_time: "13:00",
        full_name: "Olivia White"
    },
    {
        score: "93",
        time: "11:25",
        average_time: "10:20",
        full_name: "William Harris"
    },
    {
        score: "89",
        time: "12:50",
        average_time: "11:30",
        full_name: "Sophia Lewis"
    },
    {
        score: "76",
        time: "15:30",
        average_time: "14:20",
        full_name: "Lucas Clark"
    },
    {
        score: "81",
        time: "13:05",
        average_time: "11:45",
        full_name: "Isabella Robinson"
    },
    {
        score: "94",
        time: "10:50",
        average_time: "09:40",
        full_name: "Mason Walker"
    },
    {
        score: "84",
        time: "14:35",
        average_time: "12:50",
        full_name: "Charlotte Hall"
    },
    {
        score: "97",
        time: "11:15",
        average_time: "10:05",
        full_name: "Benjamin Allen"
    },
    {
        score: "78",
        time: "15:55",
        average_time: "14:45",
        full_name: "Ava Young"
    },
    {
        score: "86",
        time: "13:45",
        average_time: "12:20",
        full_name: "Henry King"
    },
    {
        score: "90",
        time: "12:25",
        average_time: "11:05",
        full_name: "Mia Scott"
    }
];

export const initialQuestion:Question = {
    questionText: '',
    quizId: '',
    isMultipleSelect: false,
    marksAwarded: 0,
    allotedTime: 0,
    file: null,
    allotedMetric: '',
    options: [
        {
            text: '',
            isCorrect: false,
        },
        {
            text: '',
            isCorrect: false,
        },
        {
            text: '',
            isCorrect: false,
        },
        {
            text: '',
            isCorrect: false,
        },
    ],
};

export const quizQuestions = [
    {
        questionText: 'I want to go home?',
        quizId: '',
        isMultipleSelect: false,
        marksAwarded: 5,
        allotedTime: 5,
        file: null,
        allotedMetric: '',
        options: [
            {
                text: 'Yes i want to ',
                isCorrect: false,
            },
            {
                text: 'yes i want to',
                isCorrect: false,
            },
            {
                text: 'yes i want to',
                isCorrect: false,
            },
            {
                text: 'yes i want to ',
                isCorrect: false,
            },
        ],
    },
    {
        questionText: 'I want to go home?',
        quizId: '',
        isMultipleSelect: false,
        marksAwarded: 5,
        allotedTime: 5,
        file: null,
        allotedMetric: '',
        options: [
            {
                text: 'Yes i want to',
                isCorrect: false,
            },
            {
                text: 'Yes i want to',
                isCorrect: false,
            },
            {
                text: 'Yes i want to',
                isCorrect: false,
            },
            {
                text: 'Yes i want to',
                isCorrect: false,
            },
        ],
    },
    {
        questionText: 'I want to go home?',
        quizId: '',
        isMultipleSelect: false,
        marksAwarded: 5,
        allotedTime: 5,
        file: null,
        allotedMetric: '',
        options: [
            {
                text: 'Yes i want to',
                isCorrect: false,
            },
            {
                text: 'Yes i want to',
                isCorrect: false,
            },
            {
                text: 'Yes i want to',
                isCorrect: false,
            },
            {
                text: 'Yes i want to',
                isCorrect: false,
            },
        ],
    },
    {
        questionText: 'I want to go home?',
        quizId: '',
        isMultipleSelect: false,
        marksAwarded: 5,
        allotedTime: 5,
        file: null,
        allotedMetric: '',
        options: [
            {
                text: 'Yes i want to',
                isCorrect: false,
            },
            {
                text: 'Yes i want to',
                isCorrect: false,
            },
            {
                text: 'Yes i want to',
                isCorrect: false,
            },
            {
                text: 'Yes i want to',
                isCorrect: false,
            },
        ],
    },
    {
        questionText: 'I want to go home?',
        quizId: '',
        isMultipleSelect: false,
        marksAwarded: 5,
        allotedTime: 5,
        file: null,
        allotedMetric: '',
        options: [
            {
                text: 'Yes i want to',
                isCorrect: false,
            },
            {
                text: 'Yes i want to',
                isCorrect: false,
            },
            {
                text: 'Yes i want to',
                isCorrect: false,
            },
            {
                text: 'Yes i want to',
                isCorrect: false,
            },
        ],
    },
    {
        questionText: 'I want to go home?',
        quizId: '',
        isMultipleSelect: false,
        marksAwarded: 5,
        allotedTime: 5,
        file: null,
        allotedMetric: '',
        options: [
            {
                text: 'Yes i want to',
                isCorrect: false,
            },
            {
                text: 'Yes i want to',
                isCorrect: false,
            },
            {
                text: 'Yes i want to',
                isCorrect: false,
            },
            {
                text: 'Yes i want to',
                isCorrect: false,
            },
        ],
    },
];