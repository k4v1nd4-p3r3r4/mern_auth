// Status Codes
const STATUS_CODES = {
  SUCCESS: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  SERVER_ERROR: 500,
};

// Success Messages
const SUCCESS_MESSAGES = {
  USER_CREATED: "User created successfully",
  LOGIN_SUCCESS: "Login successful",
  PASSWORD_UPDATED: "Password updated successfully",
  USER_UPDATED: "User updated successfully",
  USER_DELETED: "User deleted successfully",
  LOGOUT_SUCCESS: "Logout successful",
  
};

// Error Messages
const ERROR_MESSAGES = {
  INVALID_CREDENTIALS: "Invalid email or password",
  USER_EXISTS: "User already exists with this email",
  USER_NOT_FOUND: "User not found",
  INVALID_EMAIL: "Please provide a valid email",
  PASSWORD_WEAK: "Password must be at least 6 characters",
  UNAUTHORIZED: "Unauthorized access",
  SERVER_ERROR: "Something went wrong on the server",
  TOKEN_EXPIRED: "Token has expired",
  INVALID_TOKEN: "Invalid token",
  MISSING_FIELDS: "Please provide all required fields",
};

export default {
  STATUS_CODES,
  SUCCESS_MESSAGES,
  ERROR_MESSAGES,
};
