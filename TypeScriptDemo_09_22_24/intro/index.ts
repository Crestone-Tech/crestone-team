/**
 * to define the type of a variable with TypeScript, start the same way you would
 * in JavaScript. But after the variable name, we append a colon with the name of
 * the data type
 *
 * Primitive types for TypeScript:
 * - number
 * - string
 * - void
 * - boolean
 */
let a: number = 10;

let b: number | "Invalid value, please provide proper inputs";

b = 25;
// this string is ok
b = "Invalid value, please provide proper inputs";

/**
 * Let's say that we have a value that should always one of several values, like
 * the role of a user within an auth system
 */
// let userRole: "ADMIN" | "MODERATOR" | "USER";

/**
 * But to avoid having to redefine the type multiple times throughout a larger
 * application, we can actually define the type itself
 */
type UserRole = "ADMIN" | "MODERATOR" | "USER";

let role: UserRole;

type IUser = {
  username: string;
  email: string;
  passwordHash: string;
  role: UserRole;
};

let user: IUser = {
  username: "bologna",
  email: "something@something.com",
  passwordHash: "23",
  role: "USER",
};

/**
 * Defining functions
 *
 * We declare the parameters of the function the same way we declare variables
 * Then, after the closing parentheses and before the curly brackets, we use that colon
 * again to define the type of data returned by the function itself
 */

/**
 *
 * @param num - a number to be converted
 * @returns - a string of that number
 */
function convertNumberToString(num: number): string {
  return num.toString();
}

let numAsString: string = convertNumberToString(500);

/**
 * Defining arrow functions
 */
interface StringToNumFunction {
  (str: string): number;
}

const countNumberOfCharacters: StringToNumFunction = (foo: string) => {
  let i = 0;
  for (i; i < foo.length; i++) {}
  return i;
};
