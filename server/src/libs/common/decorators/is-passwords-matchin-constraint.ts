import { RegisterDto } from "@/auth/dto/register.dto";
import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";

@ValidatorConstraint({name: 'IsPasswordsMatchin', async: false})
export class IsPasswordsMatchinConstraint implements ValidatorConstraintInterface {
    validate(passwordRepeat: string, args: ValidationArguments) {
        const obj = args.object as RegisterDto
        return obj.password === passwordRepeat
    }

    defaultMessage(validationArguments?: ValidationArguments): string {
        return 'Пароли не совпадают'
    }
}