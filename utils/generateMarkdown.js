// function to generate markdown for README
function generateMarkdown(data) {
  var readme = `
  
  # ${data.title}

  ![Languages](https://img.shields.io/github/languages/count/${data.authorGithub}/${data.repoName})
  ![Top Language](https://img.shields.io/github/languages/top/${data.authorGithub}/${data.repoName})
  ![Code Size](https://img.shields.io/github/languages/code-size/${data.authorGithub}/${data.repoName})
  ![Repo Size](https://img.shields.io/github/repo-size/${data.authorGithub}/${data.repoName})
  ![Total Lines](https://img.shields.io/tokei/lines/github/${data.authorGithub}/${data.repoName})
  ![Inquirer V](https://img.shields.io/github/package-json/dependency-version/${data.authorGithub}/${data.repoName}/inquirer)
  ![Last Commit](https://img.shields.io/github/last-commit/${data.authorGithub}/${data.repoName})
  ![Followers](https://img.shields.io/github/followers/${data.authorGithub}?style=social)


  ## Description 
  
  ${data.description}
  
  ## Table of Contents
    
  * [Installation](#installation)
  * [Screenshots](#screenshots)
  * [Credits](#credits)
  * [License](#license)
  
  
  ## Installation
  
  ${data.installation}
  
  ${screenshot(data.screenshot)}
  
  ## Credits
  
  ### Author

  - ${data.authorName}
  - Github: [${data.authorGithub}](https://www.github.com/${data.authorGithub})
  - LinkedIn [${data.authorLinkedIn}](https://www.linkedin.com/in/${data.authorLinkedIn}/)

  ## License
  
  ![License](https://img.shields.io/github/license/${data.authorGithub}/${data.repoName})

  
`;

  return readme;
}

function screenshot(screenshot) {
  if (screenshot) {
    return `

  ## Screenshot

  ![Site](assets/images/${screenshot})

    `;
  } else {
    return ``;
  }
}

module.exports = generateMarkdown;
