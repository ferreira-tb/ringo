export class RingoError extends Error {
    readonly name = 'RingoError';

    constructor(message: string) {
        super(message);
    };
};