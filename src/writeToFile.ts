import * as fs from 'fs';
import * as path from 'path';

const folderPath = path.join(__dirname, '../assets/cleanedData');

export default function writeToFile(fileName: string, data: string, heading: string) {
  try {
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
    }
    fs.writeFile(`${folderPath}/${fileName}`, data, (err) => {
      if(err) throw err;
    })
    console.log(`${heading} data saved`);
  } catch (err) {
    console.error(err);
  }
}
