const firebaseConfig = {
  apiKey: "AIzaSyDwhQl-DxK8cZjIYeljHpz7PgVyvHPfkrk",
  authDomain: "resumepc-17f78.firebaseapp.com",
  databaseURL: "https://resumepc-17f78-default-rtdb.firebaseio.com",
  projectId: "resumepc-17f78",
  storageBucket: "resumepc-17f78.appspot.com",
  messagingSenderId: "795549618003",
  appId: "1:795549618003:web:e0c9805a03ca8ab0ed5ba6"
};
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();

database.ref('user').set({
    name: 'YOUR NAME',
    surname: 'SURNAME',
    email: 'Email Id',
    linkedin: 'LinkedIn Id',
    education: {
      programInstitution: 'SSN College of Engineering, Chennai',
      cgpa: 'CGPA',
      yearOfCompletion: 'Year of Completion',
      seniorSecondaryEducation: {
        collegeName: 'xxxx'
      },
      secondaryEducation: {
        schoolName: 'xxxx'
      }
    },
    internships: {
      internship1: {
        projectTitle: 'Privacy in Mobile Networks',
        organization: 'IISC',
        location: 'Bangalore',
        designation: 'Summer Intern/Winter Intern/Research Intern (May - July 2023)',
        description: 'Description in 2 to 3 lines',
        mentor: 'Name of the Mentor'
      },
      internship2: {
        projectTitle: 'Privacy in Mobile Networks',
        organization: 'IISC',
        location: 'Bangalore',
        designation: 'Summer Intern/Winter Intern/Research Intern (May - July 2023)',
        description: 'Description in 2 to 3 lines',
        mentor: 'Name of the Mentor'
      }
    },
    publications: {
      publication1: {
        publicationName: 'Publication Name',
        authors: 'Authors',
        journal: 'Journal/Conference Name',
        date: 'Month, Year'
      }
    },
    projects: {
      project1: {
        mentors: 'Mentors',
        duration: 'Duration',
        description: 'Description in one line'
      },
      project2: {
        mentors: 'Mentors',
        duration: 'Duration',
        description: 'Description in one line'
      }
    },
    skills: {
      programmingLanguages: {
        language1: {
          name: 'XYZ',
          proficiency: 'Intermediate'
        }
      },
      softwareOperated: {
        software1: 'eg1',
        software2: 'eg2',
      },
      softSkills: {
        communication: 'Laudable communicative and oration skills'
      }
    },
    courseWork: {
      keyCourses: {
        course1: 'eg1',
        course2: 'eg2',
      },
      labs: {
        lab1: 'lang1',
        lab2: 'lang2'
      }
    },
    positionsOfResponsibility: {
      coordinator: 'Student Placement Coordinator for the CDC during 2022-23',
      coreTeamMember: 'Core Team Member of INSTINCTS\'23',
      headSponsorship: 'Head -Sponsorship Committee of INVENTE 22'
    },
    achievements: {
      achievement1: 'Achievement 1',
      achievement2: 'Achievement 2'
    },
    languages: {
      language1: 'Language 1',
      language2: 'Language 2'
    },
    interests: {
      interest1: 'Interest 1',
      interest2: 'Interest 2',
    }
});


/*
If you're hosting your site on Github, you can still keep your Firebase configuration details secure by using environment variables.

Here's how you can set up environment variables for your Firebase configuration on Github:

1. Go to your Github repository and navigate to the "Settings" tab.
2. Scroll down to the "Secrets" section and click on the "New repository secret" button.
3. In the "Name" field, enter "FIREBASE_CONFIG".
4. In the "Value" field, enter your Firebase configuration object as a JSON string. For example:

```
{
  "apiKey": "your_api_key",
  "authDomain": "your_auth_domain",
  "databaseURL": "your_database_url",
  "projectId": "your_project_id",
  "storageBucket": "your_storage_bucket",
  "messagingSenderId": "your_messaging_sender_id",
  "appId": "your_app_id"
}
```

5. Click on the "Add secret" button to save your Firebase configuration as an environment variable.

Now you can access your Firebase configuration in your Github Actions workflow by using the `process.env.FIREBASE_CONFIG` variable. For example:

```
const firebase = require('firebase');

firebase.initializeApp(JSON.parse(process.env.FIREBASE_CONFIG));

// Your Firebase code here
```

This way, your Firebase configuration details will be kept secure and won't be visible in your code or on Github.

*/