// function to generate markdown for README
function generateMarkdown(data) {
  var readme = `
  
  # ${data.title}

  </br>
  <p align="center">
    <img src="https://img.shields.io/github/languages/count/${data.authorGithub}/${data.repoName}?style=for-the-badge" alt="Languages" />
    <img src="https://img.shields.io/github/languages/top/${data.authorGithub}/${data.repoName}?style=for-the-badge" alt="Top Language" />
    <img src="https://img.shields.io/github/languages/code-size/${data.authorGithub}/${data.repoName}?style=for-the-badge" alt="Code Size" />
    <img src="https://img.shields.io/github/repo-size/${data.authorGithub}/${data.repoName}?style=for-the-badge" alt="Repo Size" />   
    <img src="https://img.shields.io/tokei/lines/github/${data.authorGithub}/${data.repoName}?style=for-the-badge" alt="Total Lines" />
    <img src="https://img.shields.io/github/package-json/dependency-version/${data.authorGithub}/${data.repoName}/inquirer?style=for-the-badge" alt="Inquirer Version" />
    <img src="https://img.shields.io/github/last-commit/${data.authorGithub}/${data.repoName}?style=for-the-badge" alt="Last Commit" />  
    <img src="https://img.shields.io/github/issues/${data.authorGithub}/${data.repoName}?style=for-the-badge" alt="Issues" />  
    <img src="https://img.shields.io/github/followers/${data.authorGithub}?style=social" alt="Followers" />  
  </p>

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
  - :octocat: Github: [${data.authorGithub}](https://www.github.com/${data.authorGithub})
  - LinkedIn [${data.authorLinkedIn}](https://www.linkedin.com/in/${data.authorLinkedIn}/)


  ${builtWith(data.toolList)}

  ## License

  </br>
  <p align="center">
      <img align="center" src="https://img.shields.io/github/license/${data.authorGithub}/${data.repoName}?style=for-the-badge" alt="MIT license" />
  </p>
  
`;

  return readme;
}

function builtWith(tools) {
  if (tools) {
    tools = tools.split(",");
    let res = `
  ### Built With
  </br>
  <p align="center">
  `;

    tools.forEach(tool => {
      res += `<img src="https://img.shields.io/badge/-${tool}-orange?style=for-the-badge"  alt="${tool}" />
      `;
    });

    res += `
  </p>
  `;

    return res;

  }
  else {
    return ``;
  }
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
