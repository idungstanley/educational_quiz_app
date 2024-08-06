# Student Quiz App

The Educative Quiz App aims to provide an interactive and engaging platform for learning through quizzes. By allowing teachers to create detailed quizzes and students to take them with the added challenge of a timer, the app promotes effective learning and healthy competition among students. The integration of features like automatic submission, score tracking, and leaderboards further enhances the user experience and encourages continuous improvement.

## Features

### User Authentication

- **Teacher and Student Accounts**: Users can sign up as either teachers or students.
- **Login**: Both teachers and students can log in to their accounts using their credentials.
- **Authentication**: Secure login and registration process.

### Teacher Functionalities

- **Create Quiz**:
  - **Set Topics**: Teachers can create quizzes on different topics.
  - **Set Time**: Teachers can set a time limit for each quiz.
  - **Add Images**: Teachers can include images in the quiz questions.
  - **Multiple-Choice Questions**: Teachers can set multiple-choice questions with one correct answer and other options.
- **Edit/Delete Quiz**: Teachers can edit or delete quizzes they have created.
- **View Submissions**: Teachers can view the list of student submissions, their scores, and time taken.

### Student Functionalities

- **Browse Quizzes**:
  - **List of Quizzes**: Students can see a list of available quizzes.
  - **Quiz Details**: Students can view details of each quiz, including the topic and time limit.
- **Take Quiz**:
  - **Start Quiz**: Students can select a quiz and start it.
  - **Timer**: Each quiz has a countdown timer based on the time set by the teacher.
  - **Automatic Submission**: The quiz automatically submits when the timer runs out.
  - **Submit Quiz**: Students can manually submit the quiz before the timer runs out.
- **View Results**:
  - **Score**: Students can see their scores immediately after submitting the quiz.
  - **Time Taken**: Students can see their time to complete the quiz.
  - **Average Best Time**: Students can see the best time other users took to complete the quiz.
  - **Best Score**: Students can see the highest score achieved by other users.
- **Leaderboard**:
  - **User Scores**: Students can view a leaderboard with the scores and completion times of other users.
  - **Retake Quiz**: Students can choose to retake the quiz to improve their score or completion time.

### User Interface

- **Dashboard**: Different dashboards for teachers and students.
- **Quiz Creation Form**: A form for teachers to create and edit quizzes.
- **Quiz List**: A list view for students to browse and select quizzes.
- **Quiz Interface**: An interactive interface for students to take quizzes, with a timer and submit button.
- **Results Page**: A results page showing the student's score, time taken, average best time, and best score.
- **Leaderboard**: A leaderboard showing the scores and times of all quiz users.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/student-quiz-app.git
   ```

2. Navigate to the project directory:
   ```
   cd student-quiz-app
   ```
3. Install dependencies:
   ```
   npm install
   ```
