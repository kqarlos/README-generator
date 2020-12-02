// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ## Description 
  
  ${data.description}
  
  
  ## Table of Contents (Optional)
  
  If your README is very long, add a table of contents to make it easy for users to find what they need.
  
  * [Installation](#installation)
  * [Usage](#usage)
      * [Screenshots](#screenshots)
      * [Snippets](#snippets)
  * [Credits](#credits)
  * [License](#license)
  
  
  ## Installation
  
  ${data.installation}
  
  ## Usage 
  
  ### Screenshots


  ### Snippets
  
  
  ## Credits
  
  ### Author

  - ${data.authorName}
  - Github: [${data.authorGithub}](https://www.github.com/${data.authorGithub})
  - LinkedIn [${data.authorLinkedIn}](https://www.linkedin.com/in/${authorLinkedIn}/)

  ### Built With



  ## License
  




  
`;
}

module.exports = generateMarkdown;
