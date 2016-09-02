import delay from './delay';
import AuthorApi from './mockAuthorApi'
// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const twitts = [
  {
    id: "react-flux-building-applications",
    text: "Building Applications in React and Flux",
    authorId: "cory-house"
  },
  {
    id: "clean-code",
    text: "Clean Code: Writing Code for Humans",
    authorId: "cory-house"
  },
  {
    id: "architecture",
    text: "Architecting Applications for the Real World",
    authorId: "cory-house"
  },
  {
    id: "career-reboot-for-developer-mind",
    text: "Becoming an Outlier: Reprogramming the Developer Mind",
    authorId: "cory-house"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (twitt) => {
  return replaceAll(twitt.text, ' ', '-');
};

class TwittApi {
  static getAllTwitts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
       // AuthorApi.getAllAuthors().then(authors => {
       //    authors.map(author => {
       //      twitts.map(twitt => {
       //         if(twitt.authorId == author.id){
       //          twitt.author = author;
       //         }
       //      })
       //    })
       //  }).catch(error => {
       //  });
        resolve(Object.assign([], twitts));
      }, delay);
    });
  }

  static saveTwitt(twitt) {
    twitt = Object.assign({}, twitt); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {


        if (twitt.id) {
          const existingTwittIndex = twitts.findIndex(a => a.id == twitt.id);
          twitts.splice(existingTwittIndex, 1, twitt);
        } else {
          //Just simulating creation here.
          //The server would generate ids in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          twitt.id = generateId(twitt);
          twitts.push(twitt);
        }

        resolve(twitt);
      }, delay);
    });
  }
}

export default TwittApi;
