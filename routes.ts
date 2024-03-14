/**
 * routes accessible by the public
 * These routes do not require authentication
 * @type {string[]}
 */

export const publicRoutes = [
    "/",
    "/aboutus",
    "/headofstaff",
    "/executivedirector",
    "/corevalues",
    "/admissions",
    "/whychoosevms",
    "/admissionprocess",
    "/extranceexamination",
    "/applicationform",
    "/news",
    "/events",
    "/curriculum",
    "/creche",
    "/preschool",
    "/basic",
    "/college",
    "/sports",
    "/studentportal",
    "/summerschool",

];

/**
 * routes that requires authentication
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 */

export const authRoutes = [
    "/auth1/login",
    "/auth1/register",
];

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for 
 * API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";


/**
 * The default redirect path after logging in
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT = "/redirect";