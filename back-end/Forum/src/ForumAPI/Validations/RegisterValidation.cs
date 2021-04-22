using FluentValidation;
using ForumAPI.Entities.Mapped;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace ForumAPI.Validations
{
    public class RegisterValidation : AbstractValidator<RegisterModel>
    {
        public RegisterValidation()
        {
            RuleFor(a => a.UserName).Matches("^[a-zA-Z0-9]*$").MaximumLength(30).NotEmpty().WithMessage("Nazwa użytkownika nie spełnia wymogów");
            RuleFor(a => a.Email).EmailAddress().NotEmpty().WithMessage("Wyrażenie nie jest adresem E-mail");
            RuleFor(a => a.Password).Must(passwordValidation).NotEmpty().WithMessage("Hasło nie spełnia określonych wymogów");
            RuleFor(a => a.ConfirmPassword).Equal(a => a.Password);
        }

        private bool passwordValidation (string password)
        {

            var hasNumber = new Regex(@"[0-9]+");
            var hasUpperChar = new Regex(@"[A-Z]+");
            var hasMinimum8Chars = new Regex(@".{8,}");

            var isValidated = hasNumber.IsMatch(password) && hasUpperChar.IsMatch(password) && hasMinimum8Chars.IsMatch(password);

            if (isValidated)
                return true;
            else
                return false;
        }
    }
}
