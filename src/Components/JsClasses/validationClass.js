export class ValidationClass {
  static isNotEmpty(value) {
    return value.trim() !== '';
  }
  static isUsername(value) {
    return this.isNotEmpty(value) && value.length >= 4;
  }

  static isEmail(value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return this.isNotEmpty(value) && emailRegex.test(value);
  }

  static isPhoneNumber(value) {
    const phoneRegex = /^(01)(0|1|2|5)\d{8}$/;
    return this.isNotEmpty(value) && phoneRegex.test(value);
  }

  static isPassword(value) {
    return this.isNotEmpty(value) && value.length >= 6;
  }

  static confirmPassword(password, confirmPassword) {
    return password === confirmPassword && this.isNotEmpty(confirmPassword);
  }
  static ifFileIsGood(fileInput) {
    if (fileInput.files.length > 0) {
      var fileSize = fileInput.files[0].size; // Size in bytes
      var maxSize = 5 * 1024 * 1024; // 5 MB in bytes
      if (fileSize > maxSize) {
        return false;
      }
    }
    return true;

  }
}
// ==========  Validation ===============
export default function validate(input) {
  switch (input.name) {
    case 'FirstName'||"LastName"||"EmailOrPhone":
      return ValidationClass.isUsername(input.value);
    case 'Email' || "email":
      return ValidationClass.isEmail(input.value);
    case 'Password':
      return ValidationClass.isPassword(input.value);
    case 'ConfirmPassword':
      let passwordInput = document.querySelector('.PasswordValidation');
      if (passwordInput) {
        let passwordValue = passwordInput.value;
        return ValidationClass.confirmPassword(passwordValue, input.value);
      }
      // Handle case where actual password input is not found.
      return false;
    case "PhoneNumber"||'phoneNumber':
      return ValidationClass.isPhoneNumber(input.value);
    default:
      return ValidationClass.isNotEmpty(input.value);

  }
}