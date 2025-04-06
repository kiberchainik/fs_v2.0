import { Prisma } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

type PrismaClientValidationError = Prisma.PrismaClientKnownRequestError;

export const PrismaErrorCodes = {
    P2000: {
        message: "The provided value for the column is too long for the column's type.",
        handler: (error: PrismaClientValidationError) => {
            console.error(`Ошибка: значение слишком длинное для столбца ${error.meta?.target}`);
        },
    },
    P2001: {
        message: "The provided value for the column is invalid.",
        handler: (error: PrismaClientValidationError) => {
            console.error(`Ошибка: некорректное значение для столбца ${error.meta?.target}`);
        },
    },
    P2002: {
        message: "Unique constraint failed on the column(s).",
        handler: (error: PrismaClientValidationError) => {
            console.error(`Ошибка: нарушено уникальное ограничение на поле ${error.meta?.target}`);
        },
    },
    P2003: {
        message: "Foreign key constraint failed on the field(s).",
        handler: (error: PrismaClientValidationError) => {
            console.error(`Ошибка: внешний ключ нарушен на поле ${error.meta?.target}`);
        },
    },
    P2004: {
        message: "The change you requested was rejected because the target was too large.",
        handler: (error: PrismaClientValidationError) => {
            console.error("Ошибка: запрос был отклонен, потому что целевой объект слишком большой.");
        },
    },
    P2005: {
        message: "A foreign key constraint failed during the creation of a record.",
        handler: (error: PrismaClientValidationError) => {
            console.error("Ошибка: не удалось создать запись из-за нарушения внешнего ключа.");
        },
    },
    P2006: {
        message: "The field type you provided is incompatible with the field's type.",
        handler: (error: PrismaClientValidationError) => {
            console.error("Ошибка: тип поля несовместим с типом в базе данных.");
        },
    },
    P2013: {
        message: "The database connection was terminated.",
        handler: (error: PrismaClientValidationError) => {
            console.error("Ошибка: соединение с базой данных было прервано.");
        },
    },
    P2025: {
        message: "An operation failed because the requested record was not found.",
        handler: (error: PrismaClientValidationError) => {
            console.error("Ошибка: запись не найдена.");
        },
    },
    P2034: {
        message: "An unexpected error occurred.",
        handler: (error: PrismaClientValidationError) => {
            console.error("Неизвестная ошибка.");
        },
    },
    // Здесь можно добавить другие ошибки, если нужно
};

export function handlePrismaError(error: PrismaClientValidationError | PrismaClientKnownRequestError) {
    const handler = PrismaErrorCodes[error.code];
    if (handler) {
        handler.handler(error);
    } else {
        console.error("Неизвестная ошибка Prisma:", error.message);
    }
}