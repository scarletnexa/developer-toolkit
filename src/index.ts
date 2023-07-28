
/**
 * Format a date to the format: Month Day Year.
 *
 * @param {Date} date - The date to be formatted.
 * @returns {string} The date in format: Month Day Year.
 * @example
 *  fDate(new Date()) // January 1 9999
 */
export function fDate(date: Date): string {
    const months = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return `${months[monthIndex]} ${day} ${year}`;
}

/**
 * Format a time to the format: Hours:Minutes[:Seconds].
 *
 * @param {Date} date - The date to be formatted.
 * @param {boolean} [seconds=false] - If true, the seconds will be included in the time.
 * @returns {string} The time in format: Hours:Minutes[:Seconds].
 * @example
 * fTime(new Date()) // 12:00
 * fTime(new Date(), true) // 12:00:00
 */
export function fTime(date: Date, seconds: boolean = false): string {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const secs = date.getSeconds();

    return `${hours}:${minutes}${seconds ? `:${secs}` : ''}`;
}

/**
 * Calculate the time difference between a given date and today and return a user-friendly string.
 *
 * @param {Date} date - The date to compare with today.
 * @returns {string} A string representing the time difference, e.g., "Today", "Yesterday", or "{X} days ago".
 */
export function dateAmmount(date: Date): string {
    const oneDayMs = 24 * 60 * 60 * 1000;
    const today = new Date();
    const diffDays = Math.round(Math.abs((today.getTime() - date.getTime()) / oneDayMs));
    if (diffDays === 0) {
        return "Today";
    } else if (diffDays === 1) {
        return "Yesterday";
    } else {
        return `${diffDays} days ago`;
    }
}

/**
 * Format a number to include comma separators for thousands.
 *
 * @param {number} number - The number to be formatted.
 * @returns {string} The formatted number with comma separators for thousands.
 */
export function fNumber(number: number): string {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/**
 * Convert a JavaScript object (JSON) to XML format.
 *
 * @param {object} json - The JavaScript object (JSON) to be converted to XML.
 * @param {string} [parent_class='root'] - The XML root element name.
 * @returns {string} The XML representation of the given JSON.
 */
export function JsonToXml(json: any, parent_class: string = 'root') {
    const start = '<?xml version="1.0" encoding="UTF-8"?>\n';
    const convert = (json: any, parent = '') => {
        let xml = '';
        for (const key in json) {
            if (json.hasOwnProperty(key)) {
                const element = json[key];
                const tag = parent ? parent + '.' + key : key;
                if (typeof element === 'object') {
                    xml += convert(element, tag);
                } else {
                    xml += `<${tag}>${element}</${tag}>\n`;
                }
            }
        }
        return xml;
    };
    return start + `<${parent_class}>\n` + convert(json) + `</${parent_class}>`;
};

/**
 * Generate a random alphanumeric string of a given length.
 *
 * @param {number} length - The length of the random string to be generated.
 * @returns {string} A random alphanumeric string of the specified length.
 */
export function generateRandomString(length: number): string {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = length; i > 0; --i) {
        result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
}


/**
 * Convert a string to a kebab-case format (lowercase words separated by dashes).
 *
 * @param {string} input - The string to be converted to kebab-case.
 * @returns {string} The kebab-case formatted string.
 */
export function toKebabCase(input: string): string {
    return input.toLowerCase().replace(/ /g, '-');
}


/**
 * Deep clone a JavaScript object.
 *
 * @param {object} obj - The object to be cloned.
 * @returns {object} A deep clone of the input object.
 */
export function deepClone(obj: object): object {
    return JSON.parse(JSON.stringify(obj));
}


/**
 * Convert bytes to a human-readable file size with units (e.g., KB, MB, GB).
 *
 * @param {number} bytes - The size in bytes to be converted.
 * @returns {string} The human-readable file size string.
 */
export function bytesToSize(bytes: number): string {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) {
        return '0 Byte';
    }
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return `${Math.round(bytes / Math.pow(1024, i))} ${sizes[i]}`;
}


/**
 * Shuffle the elements of an array randomly using the Fisher-Yates (Knuth) algorithm.
 *
 * @param {Array} array - The array to be shuffled.
 * @returns {Array} The shuffled array.
 */
export function shuffleArray(array: any[]): any[] {
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}


/**
 * Check if a value is a valid email address.
 *
 * @param {string} email - The email address to be validated.
 * @returns {boolean} Returns true if the email is valid, otherwise false.
 */
export function isValidEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

/**
 * Check if a password is strong enough.
 *
 * @param {string} password - The password to be validated.
 * @param {number} minLength - The minimum length of the password.
 * @returns {object} Returns an object with the following properties:
 * - valid: boolean - true if the password is valid, otherwise false.
 * - message: string - the validation message.
 * - suggestions: string[] - an array of suggestions to improve the password.
 */
export function isStrongPassword(password: string, minLength: number = 8): { valid: boolean, message: string, suggestions: string[] } {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[^A-Za-z0-9]/.test(password); // Non-alphanumeric characters

    const criteria = [
        { condition: hasUppercase, message: "Include at least one uppercase letter (A-Z)." },
        { condition: hasLowercase, message: "Include at least one lowercase letter (a-z)." },
        { condition: hasDigit, message: "Include at least one digit (0-9)." },
        { condition: hasSpecialChar, message: "Include at least one special character (e.g., !@#$%)."}
    ];

    const suggestions = criteria.filter(criterion => !criterion.condition).map(criterion => criterion.message);

    if (password.length < minLength) {
        return {
            valid: false,
            message: `Password must be at least ${minLength} characters long.`,
            suggestions
        };
    }

    if (suggestions.length > 0) {
        return {
            valid: false,
            message: "Password must meet the following criteria:",
            suggestions
        };
    }

    return {
        valid: true,
        message: "Password is strong.",
        suggestions: []
    };
}


/**
 * Remove any duplicate elements from an array.
 * @param {Array} array - The array to be deduplicated.
 * @returns {Array} The deduplicated array.
 */
export function removeDuplicates(array: any[]): any[] {
    const t = [...array];

    for (let i = 0; i < t.length; i++) {
        for (let j = i + 1; j < t.length; j++) {
            if (t[i] === t[j]) {
                t.splice(j--, 1);
            }
        }
    }

    return t;
}