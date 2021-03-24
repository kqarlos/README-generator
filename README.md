
  
  # Readme Generator

  </br>
  <p align="center">
    <img src="https://img.shields.io/github/languages/count/kqarlos/readme-generator?style=for-the-badge" alt="Languages" />
    <img src="https://img.shields.io/github/languages/top/kqarlos/readme-generator?style=for-the-badge" alt="Top Language" />
    <img src="https://img.shields.io/github/languages/code-size/kqarlos/readme-generator?style=for-the-badge" alt="Code Size" />
    <img src="https://img.shields.io/github/repo-size/kqarlos/readme-generator?style=for-the-badge" alt="Repo Size" />   
    <img src="https://img.shields.io/tokei/lines/github/kqarlos/readme-generator?style=for-the-badge" alt="Total Lines" />
    <img src="https://img.shields.io/github/package-json/dependency-version/kqarlos/readme-generator/inquirer?style=for-the-badge" alt="Inquirer Version" />
    <img src="https://img.shields.io/github/last-commit/kqarlos/readme-generator?style=for-the-badge" alt="Last Commit" />  
    <img src="https://img.shields.io/github/issues/kqarlos/readme-generator?style=for-the-badge" alt="Issues" />  
    <img src="https://img.shields.io/github/followers/kqarlos?style=social" alt="Followers" />  
  </p>

  ## Description 
  
  This is a command line application that gathers project information from the user and generates a readme markdown file.
  
  ## Table of Contents
    
  * [Installation](#installation)
  * [Screenshots](#screenshots)
  * [Credits](#credits)
  * [License](#license)
  
  
  ## Installation
  
  Follow these commands to run the command line application:

    npm i
    node index.js
  

  ## Screenshot

  ![Site](assets/images/live.gif)

  ## Snippets

  Inquirer question to select a license.

  ```javascript

      {
        type: 'list',
        message: 'Please select type of License ',
        name: 'license',
        choices: [
            {
                name: 'None',
                value: 0
            },
            {
                name: 'GNU General Public',
                value: 1
            },
            {
                name: 'MIT',
                value: 2
            },
            {
                name: 'BSD 2-Clause "Simplified" License',
                value: 3
            },
            {
                name: 'Boost Software License 1.0',
                value: 4
            },
            {
                name: 'Creative Commons Zero v1.0 Universal',
                value: 5
            },
            {
                name: 'Eclipse Public License',
                value: 6
            },
            {
                name: 'Mozilla Public License',
                value: 7
            },
            {
                name: 'The Unlicense',
                value: 8
            },
            {
                name: 'Other',
                value: 9
            }
        ],
        when: (data) => (data.sections.indexOf("license") >= 0)

    }
  ```

    
  ## Credits
  
  ### Author

  - Carlos Toledo
  - :octocat: Github: [kqarlos](https://www.github.com/kqarlos)
  - LinkedIn [carlos-toledo415](https://www.linkedin.com/in/carlos-toledo415/)


  
  ### Built With
  </br>
  <p align="center">
  <img src="https://img.shields.io/badge/-HTML-blue?style=for-the-badge"  alt="HTML" />
      <img src="https://img.shields.io/badge/- CSS-orange?style=for-the-badge"  alt=" CSS" />
      <img src="https://img.shields.io/badge/- JAVASCRIPT-yellow?style=for-the-badge"  alt=" JAVASCRIPT" />
      <img src="https://img.shields.io/badge/- NODE-green?style=for-the-badge"  alt=" NODE" />
      <img src="https://img.shields.io/badge/- INQUIRER-orange?style=for-the-badge"  alt=" INQUIRER" />
      
  </p>
  

  ## License

  </br>
  <p align="center">
      <img align="center" src="https://img.shields.io/github/license/kqarlos/readme-generator?style=for-the-badge" alt="MIT license" />
  </p>
  
