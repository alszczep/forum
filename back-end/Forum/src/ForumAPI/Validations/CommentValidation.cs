using FluentValidation;
using ForumAPI.Entities.Basic;
using ForumAPI.Entities.Mapped;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ForumAPI.Validations
{
    public class CommentValidation : AbstractValidator<CommentInPost>
    {
        public CommentValidation()
        {
            RuleFor(a => a.Content).MaximumLength(5).NotEmpty();
            RuleFor(a => a.Date).NotEmpty();
        }
    }
}
