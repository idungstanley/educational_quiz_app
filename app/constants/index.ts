import program from '@/public/programing.png';
import choose from '@/public/choose.png';
import score from '@/public/score.png';
import leaderboard from '@/public/leaderboard.png';
import { MdAssignmentAdd, MdMobileFriendly, MdOutlineConnectWithoutContact } from 'react-icons/md';

export const navItems = [
    { name: 'Quiz', route: '/quiz' },
    { name: 'Leaderboard', route: '/leader-board' },
    { name: 'Score history', route: '/score-history' },
];

export const featuresCard = [
    { title: 'Browse and Take Quizzes', image: choose },
    { title: 'Points System', image: score },
    { title: 'Leaderboard', image: leaderboard },
    { title: 'Create and Manage Quizzes', image: program },
];

export const stepsData = [
    { title: 'Sign in or Create an account', image: "one", desc: "hi i am telling you to go for what you want if you are ready to move things", Icon: MdMobileFriendly },
    { title: 'Select a quiz/test', image: "two", desc: "hi i am telling you to go for what you want if you are ready to move things", Icon: MdAssignmentAdd },
    { title: 'Connect with your teacher', image: "three", desc: 'hi i am telling you to go for what you want if you are ready to move things', Icon: MdOutlineConnectWithoutContact },
];

export const benefitsOfTeacher = ["Enhanced Student Engagement", "Efficient Assessment Tools", "Fostering Healthy Competition", "Improved Classroom Management", "Flexible Quiz Creation"];