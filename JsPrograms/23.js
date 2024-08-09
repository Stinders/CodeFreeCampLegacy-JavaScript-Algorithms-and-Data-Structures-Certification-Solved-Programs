// Setup
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Only change code below this line
    for (let i = 0; i < contacts.length; i++) {
      // Check if the current contact's firstName matches the given name
      if (contacts[i].firstName === name) {
        // Check if the contact has the specified property
        if (contacts[i].hasOwnProperty(prop)) {
          // Return the value of the specified property
          return contacts[i][prop];
        } else {
          // Return "No such property" if the property is not found
          return "No such property";
        }
      }
    }
    // Return "No such contact" if no contact matches the given name
    return "No such contact";
    // Only change code above this line
  }
  
