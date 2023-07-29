# Miscellaneous

`bytesToSize(bytes: number): string` - Convert bytes to a human-readable file size with units (e.g., KB, MB, GB).

`isValidEmail(email: string): boolean` - Check if a value is a valid email address.

`isStrongPassword(password: string, minLength?: number): { valid: boolean, message: string, suggestions: string[] }` - Check if a password is strong enough. Returns an object with a `valid` property indicating if the password is strong enough, a `message` property with a message indicating why the password is not strong enough, and a `suggestions` property with an array of suggestions to improve the password.

`isVaildUrl(url: string): boolean` - Check if a value is a valid URL.

`parseQueryString(queryString: string): object` - Parses query string parameters into an object.

`validateAgainstSchema(obj: object, schema: object): object` - Validate an object against a schema.

`hexToRGB(hex: string): string` - Convert a hex color to RGB format.