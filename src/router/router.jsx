import StartP from "../pages/startP";
import LessonP from "../pages/lessonP";
import WordsLessonP from "../pages/wordsLessonP";
import EndOfLessonP from "../pages/endOfLessonP";

export const router = [
    {path: '/', element: <StartP/>, exact: true, name: 'home'},
    {path: '/lesson', element: <LessonP/>, name: 'lesson'},
    {path: '/words', element: <WordsLessonP/>, name: 'words'},
    {path: '/lesson-end', element: <EndOfLessonP/>, name: 'lesson-end'},
]