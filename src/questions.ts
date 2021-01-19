import * as questions from '../assets/Questions.json';
import * as path from 'path';

import writeToFile from './writeToFile';

export default function cleanQuestions() {
  const cleanedQuestions = questions.map(question => {
    let annotations = [];
    question['Question number']
    for (const [key, value] of Object.entries(question)) {
      if (key !== 'Question number' && value) {
        annotations.push(value);
      }
    }
    return {
      _id: question['Question number'],
      annotations: annotations,
    }
  })

  const fileName = 'CleanedQuestions.json';
  writeToFile(fileName, JSON.stringify(cleanedQuestions, null, 2), 'Questions');
}

