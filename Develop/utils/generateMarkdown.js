// function to generate markdown for README
function generateMarkdown(data) {
  // Create badge for license
  let license;
  
    if (data.license === 'MIT License') {
      license = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)' + ' ' + data.license;
    } else if (data.license === 'Apache License 2.0') {
      license = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)' + ' ' + data.license;
    } else if (data.license === 'Mozilla Public License 2.0') {
      license = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)' + ' ' + data.license;
    } else if (data.license === 'GNU AGPLv3') {
      license = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)' + ' ' + data.license;
    } else if (data.license === 'Unlicensed') {
      license = 'Unlicensed';
    }
  
  // Create markdown
  return `# ${data.title}

## Description
${data.description}

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:
---
${data.installation}
---

## Usage
${data.usage}

## License

${license}

## Contributing
${data.contribution}

## Tests
To run tests, run the following command:
---
${data.test}
---

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${data.email}. 
You can find more of my work at [${data.username}](https://github.com/${data.username}/).


`;
}

module.exports = generateMarkdown;