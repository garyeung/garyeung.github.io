export interface Showcase {
  title: string;
  description?: string;
  liveLink: string;
  codeLink: string;
  thumbnail: string;
}

import todoApp from  '../assets/images/showcase/Todo App Screenshot.png';
import comment from '../assets/images/showcase/Interactive Comments Section.png';
import agecalculator from '../assets/images/showcase/Frontend Mentor Age calculator app desktop&error.png';
import workoutTracker from '../assets/images/showcase/workout-tracker-api.png'

export const showcases: Showcase[] = [
  {
    title: "Todo App",
    description: "A cool web app I built.",
    liveLink: "https://frontend-mentortodo-app.vercel.app/",
    codeLink: "https://github.com/garyeung/frontend-mentor_todo-app",
    thumbnail: todoApp.src,
  },
  {
    title: "Interactive comments",
    description: "A cool interactive comments section I built.",
    thumbnail: comment.src,
    liveLink: 'https://frontendmentor-interactive-comments-dusky.vercel.app',
    codeLink: "https://github.com/garyeung/frontendmentor_interactive-comments" 
  },
  {
    title: "Age Calculator",
    description: "You know what it is.",
    thumbnail: agecalculator.src,
    liveLink: "https://frontendmentor-age-calculator-app-2.vercel.app",
    codeLink: "https://github.com/garyeung/frontendmentor_age-calculator-app"
  },
  {
    title: "Workout Tracker API",
    description: "A workout tracker application.",
    liveLink: "",
    codeLink: "https://github.com/garyeung/fitness_workout_tracker_API",
    thumbnail: workoutTracker.src
  }

]; 