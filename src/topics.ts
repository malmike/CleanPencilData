import * as topics from '../assets/Topics.json';
import * as path from 'path';

import writeToFile from './writeToFile';

export default function cleanTopics() {
  let topicMap: Map<string, any> = new Map<string, any>();
  topics.forEach(topic => {
    if (topic['Topic Level 3']) {
      topicMap.set(topic['Topic Level 3'], { _id: topic['Topic Level 3'], ancestors: [topic['Topic Level 1'], topic['Topic Level 2']], parent: topic['Topic Level 2'] });
    }
    if (!topicMap.has(topic['Topic Level 2'])) {
      topicMap.set(topic['Topic Level 2'], { _id: topic['Topic Level 2'], ancestors: [topic['Topic Level 1']], parent: topic['Topic Level 1'] });
    }
    if (!topicMap.has(topic['Topic Level 1'])) {
      topicMap.set(topic['Topic Level 1'], { _id: topic['Topic Level 1'], ancestors: [], parent: null})
    }
  })

  let topicsObject = [];
  topicMap.forEach((value, key) => {
    topicsObject.push(value);
  })

  const fileName = 'CleanedTopics.json';
  writeToFile(fileName, JSON.stringify(topicsObject, null, 2), 'Topics');
}
