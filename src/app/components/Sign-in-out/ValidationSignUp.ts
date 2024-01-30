interface formDataint {
  email: string;
  username: string; // Add username field
  password: string;
  ConfirmPassword: string;
}
let validationErrors: string = "";

const ValidationSignUp = (formData: formDataint): string => {
  if (!formData.email) {
    validationErrors = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    validationErrors = "Invalid email format";
  }

  if (!formData.username) {
    validationErrors = "Username is required";
  } else if (formData.username.length < 3 || formData.username.length > 30) {
    validationErrors = "Username must be between 3 and 30 characters";
  }

  if (!formData.ConfirmPassword) {
    validationErrors = "Confirm Password is required";
  } else if (formData.password !== formData.ConfirmPassword) {
    validationErrors = "Passwords do not match";
  }

  if (!formData.password) {
    validationErrors = "Password is required";
  } else if (formData.password.length < 8 || formData.password.length > 255) {
    validationErrors = "Password must be at least 8 characters long";
  }
  return validationErrors;
};

export default ValidationSignUp;
