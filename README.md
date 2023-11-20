# Movie of the Night API 

#### Practicing api calls using async/await and api call with header

#### By Grant Abel & Kim Robinson & Brianca Knight

## Technologies Used

* JavaScript
* CSS
* Bootstrap
* Babel
* JSON
* webpack
* ESLint

## Description

## Setup/Installation Requirements

* _Clone this repository to your desktop.
* _Navigate to the top level directory of the project.
* _Install all packages with $ npm install.
* _Build the project using webpack with $ npm run build
* _Start a development server with $ npm run start
* _Lint JS files in the src folder with $ npm run lint
* _Run tests with Jest using $ npm run test

## Known Bugs

* WIP-api call successful but bug if movie does not have a streaming option or price
* bug if poor input, gets 200OK and fails at response.title[0] because it's an empty array. unsure how to get it to error correctly.
* want to print list of top 5 results-challenge getting labelling of array to append as list items
* (Error successful for bad api. and url typo) Error fail for 404

## License

MIT License

Copyright (c) 2023 gtayyy

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE