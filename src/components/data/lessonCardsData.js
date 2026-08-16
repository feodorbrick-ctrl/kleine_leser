export const getLessonCardsData = (language) => ({
    sentenceLessonCard: {
        lessonName: language.sentenceLessonCard.lessonName,
        lessonCardImg: 'https://picsum.photos/id/28/1900/1000',
        lessonDescription: language.sentenceLessonCard.lessonDescription,
        getLessonType: () => 'make-sentence-lesson',
    },
    wordLessonCard: {
        lessonName: language.wordLessonCard.lessonName,
        lessonCardImg: 'https://picsum.photos/id/29/1900/1000',
        lessonDescription: language.wordLessonCard.lessonDescription,
        getLessonType: () => 'make-word-lesson',
    },
    wordFromLettersCard: {
        lessonName: language.wordFromLettersCard.lessonName,
        lessonCardImg: 'https://picsum.photos/id/30/1900/1000',
        lessonDescription: language.wordFromLettersCard.lessonDescription,
        getLessonType: () => 'make-word-from-letters-lesson',
    },
});