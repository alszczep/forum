using FluentValidation;
using ForumAPI.Entities.Mapped;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ForumAPI.Validations
{
    public class PostValidation : AbstractValidator<PostInList>
    {
        public PostValidation()
        {
            RuleFor(a => a.Context).MaximumLength(500).NotEmpty();
            RuleFor(a => a.Title).MaximumLength(150).NotEmpty();
        }
    }
}
