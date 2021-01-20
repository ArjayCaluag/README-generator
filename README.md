# **README Generator **

This project consists of utilizing node and the inquirer package to dynamically create a personalized readme file through a series of prompts and built in methods. Throughout this project I also utilized template literals and the asynchronous function.

<br><br>

![image](https://user-images.githubusercontent.com/52800632/105132715-38414180-5aa0-11eb-9435-02e9facef1e5.png)

# **Installation**
Install inquirer node package
```html
npm install inquirer
```

Track changes and push onto your own Github Repository.

```html
git add .
```
```bash
git commit -m "message"
```
```bash
git push origin main
```

# **Built With**

<ul>
    <li> Node.js - Open-source back-end javascript runetime environment that executes Javascript code out a web broswer</li>
    <li> Inquirer.js - A collection of common interactive command line user interfaces </li>
   
</ul>

# **Code Snippet**
Inquirer prompt syntax
```js 
  function promptUser(){
   return inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'What is your Github username?'
        }, {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        }, {
            type: 'input',
            name: 'projectName',
            message: 'What is your project name?'
        }, {
            type: 'input',
            name: 'description',
            message: 'Please write a short description of your project'
        }, {
            type: 'list',
            name: 'license',
            message: 'What kind of license should your project have?(Use arrow keys)',
            choices: ['MIT', 'Apache-2.0', 'GPL3.0', 'BSD 3']
```
Use of Template literals to grab response from inquirer prompts and generate md file
```js
 
           function generateMarkdown(response){
        return `# ${response.projectName}

![Github license](https://img.shields.io/badge/license-${response.license}-blue.svg)

## Description
${response.description}

## Table of Contents
        
[Installation](#installation)<br>
[Usage](#usage)<br>
[License](#license)<br>
[Contributing](#test)<br>
[Tests](#tests)<br>
[Questions](#questions)<br>

## Installation

To install necessary dependencies run the following command: 
        
    ${response.command} 
        
       
## Usage
${response.using}
}
```
# **Demo Video Link**

https://drive.google.com/file/d/1ix8aTa-DMGRewK87r1vsi19vqqLa95Q4/view

# **Author**

Ron-Arjay Caluag

[Linkedin](https://www.linkedin.com/in/ron-arjay-caluag-00b29b182/)
<br>
[Github](https://github.com/ArjayCaluag)

# **License**

The MIT License (MIT)

Copyright (c) 2011-2020 Twitter, Inc.

Copyright (c) 2011-2020 The Bootstrap Authors

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
