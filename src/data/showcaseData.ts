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
    liveLink: 'https://garyeung.github.io/Frontend-Mentor-Challenges/interactive-comments-section-main',
    codeLink: "https://github.com/garyeung/Frontend-Mentor-Challenges/tree/master/interactive-comments-section-main"
  },
  {
    title: "Age Calculator",
    description: "You know what it is.",
    thumbnail: agecalculator.src,
    liveLink: "https://garyeung.github.io/Frontend-Mentor-Challenges/age-calculator-app-main/",
    codeLink: "https://github.com/garyeung/Frontend-Mentor-Challenges/tree/master/age-calculator-app-main"
  }
]; 