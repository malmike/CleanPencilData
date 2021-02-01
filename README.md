# Clean Pencil Application Data

Utilised [http://beautifytools.com/csv-to-json-converter.php](http://beautifytools.com/csv-to-json-converter.php) to convert the csv data to json data.

## Run application
- Install application dependencies using `yarn install`
- Run `yarn start` to format and clean Questions.json and Topics.json in the assets folder. This will generate the files CleanedQuestion.json and CleanedTopics.json, that are ready to be imported into mongodb

## Setting ancestors as index
db.topics.createIndex({ancestors: 1})

#### NB: This application is structured based on the data in those specific files and must be modified incase of format changes.

