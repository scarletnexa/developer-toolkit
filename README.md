# Developer Toolkit

A collection of useful utility functions for developers to simplify common tasks. These functions are designed to handle various tasks, such as date and time formatting, number formatting, XML conversion, string manipulation, and more.

## Installation

To use this library in your project, you can install it from NPM:

```bash
npm install developer-toolkit-utils
```

## Usage

Check our [examples file](./tests/index.js) for examples on how to use the functions in this library.

## API Reference

### Date and Time

`fDate(date: Date): string` - Format a date to the format: Month Day Year.

`fTime(date: Date, seconds?: boolean): string` - Format a time to the format: Hours:Minutes[:Seconds].

`dateAmount(date: Date): string` - Calculate the time difference between a given date and today and return a user-friendly string

### Numbers

`fNumber(number: number): string` - Format a number to include comma separators.

### Json Conversion

`JsonToXml(json: any, parent_class?: string): string` - Convert a JavaScript object (JSON) to XML format.

`deepMerge(target: object, source: object): object` - Merge two objects recursively.

`sortByProperty(array: any[], property: string): any[]` - Sort an array of objects by a given property.

`objectToQueryString(obj: object, urlSafe?: boolean | undefined): string` - Convert an object to a query string.

### String Manipulation
`generateRandomString(length: number): string` - Generate a random alphanumeric string of a given length.

`toKebabCase(input: string): string` - Convert a string to a kebab-case format (lowercase words separated by dashes).

`truncateString(str: string, maxLength: number): string` - Truncate a string to a given length and add an ellipsis at the end.

`palindromeChecker(str: string): boolean` - Check if a string is a palindrome.

`capitalize(str: string): string` - Capitalize the first letter of a string.

`toCamelCase(str: string): string` - Convert a string to a camelCase format (lowercase words separated by dashes).

### Array Manipulation
`shuffleArray(array: any[]): any[]` - Shuffle the elements of an array randomly using the Fisher-Yates (Knuth) algorithm.

`removeDuplicates(array: any[]): any[]` - Remove duplicate elements from an array.

`chunkArray(array: any[], chunkSize: number): any[]` - Split an array into chunks of a given size.

`arrayIntersection(array1: any[], array2: any[]): any[]` - Get the intersection between two arrays.

### Miscellaneous
`bytesToSize(bytes: number): string` - Convert bytes to a human-readable file size with units (e.g., KB, MB, GB).

`isValidEmail(email: string): boolean` - Check if a value is a valid email address.

`isStrongPassword(password: string, minLength?: number): { valid: boolean, message: string, suggestions: string[] }` - Check if a password is strong enough. Returns an object with a `valid` property indicating if the password is strong enough, a `message` property with a message indicating why the password is not strong enough, and a `suggestions` property with an array of suggestions to improve the password.

`isVaildUrl(url: string): boolean` - Check if a value is a valid URL.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details


## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests for bug fixes, improvements, or new features.

<p align="center"> Happy coding! 😊 </p>
