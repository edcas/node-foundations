# node-foundations


```sh
# Install repo
git clone https://github.com/edcas/node-foundations.git
cd node-foundations

#Install dependencies.
npm install

#List all courses.
node evaluations/first/index.js

#List the options of the command to enroll a student to a course.
node evaluations/first/index.js enroll

#Enroll a student in a course.
node evaluations/first/index.js enroll --course=1020 --name="John Doe" --document=1044928364

#The file with the enrolled users is called enrolled.txt.
cat evaluations/first/enroll.txt # linux or git bash

#Show validation when a user tries to register in a course that does not exist
node evaluations/first/index.js enroll --course=1024 --name="John Doe" --document=1044928364
```