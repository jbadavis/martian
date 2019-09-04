const validateInput = require('./validateInput');

describe('validateInput', () => {
    describe('for valid input', () => {
        it('should return true', () => {
            expect(
                validateInput(
                    [1, 1],
                    [
                        {positions: [1, 1, 'N'], instructions: ['N', 'N']},
                        {positions: [2, 1, 'S'], instructions: ['N', 'F']},
                    ],
                ),
            ).toBeTruthy();
        });
    });
    describe('if the x axis is greater than 50', () => {
        it('should return false', () => {
            expect(
                validateInput(
                    [51, 1],
                    [
                        {positions: [1, 1, 'N'], instructions: ['N', 'N']},
                        {positions: [2, 1, 'S'], instructions: ['N', 'F']},
                    ],
                ),
            ).toBeFalsy();
        });
    });

    describe('if the y axis is greater than 50', () => {
        it('should return false', () => {
            expect(
                validateInput(
                    [1, 51],
                    [
                        {positions: [1, 1, 'N'], instructions: ['N', 'N']},
                        {positions: [2, 1, 'S'], instructions: ['N', 'F']},
                    ],
                ),
            ).toBeFalsy();
        });
    });

    describe('if any instruction length is greater than 100', () => {
        it('should return false', () => {
            expect(
                validateInput(
                    [1, 1],
                    [
                        {positions: [1, 1, 'N'], instructions: ['N', 'N']},
                        {
                            positions: [2, 1, 'S'],
                            instructions: new Array(100),
                        },
                    ],
                ),
            ).toBeFalsy();
        });
    });
});
