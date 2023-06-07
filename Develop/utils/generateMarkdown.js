// TODO: Create a function that returns a license badge and link based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "MIT") {
    return `![GitHub license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)`;
  }

  if(license === "Boost 1.0") {
    return `![GitHub license](https://img.shields.io/badge/License-Boost_1.0-orange.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
  }
  
  if(license === "Eclipse 1.0") {
    return `![GitHub license](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
  }
  
  if(license === "Mozilla 2.0") {
    return `![GitHub license](https://img.shields.io/badge/License-MPL_2.0-blue.svg)](https://opensource.org/licenses/MPL-2.0)`;
  }
  
  else {
    return "";
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseBadge = renderLicenseBadge(license);
  let licenseText = '';

  if (license === 'none') {
    licenseText = 'N/A';
  } else {
    licenseText = `Licensed under the ${license} license. Click the license button for more information.`;
  }

  return `## License<br>${licenseBadge}<br>${licenseText}`;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseSection(data.license)}

  ## Table of Contents
  + [License](#license)
  + [Description](#description)
  + [Installation](#installation)
  + [Usage](#usage)
  + [Contributing](#contributing)
  + [Tests](#tests)
  + [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions about this project, use the contact methods below.
  GitHub: https://github.com/${data.username}
  Email: ${data.email}

  ## Credits
  ${data.name}
`;
}


module.exports = generateMarkdown;
