import { RingoError } from "@/error.js";
import { generateDiceRollText } from "@/helpers.js";

/** Representa uma combinação que foi rolada. */
export class EachDiceRoll {
    /** Tipo da rolagem. */
    readonly type: DiceRollType
    /** Valor da rolagem. */
    readonly value: number
    /** Outro valor para a rolagem. Apenas usado caso o tipo da rolagem não seja normal. */
    readonly other: number | null

    randomNumber(dice: number) {
        return Math.floor(Math.random() * dice + 1);
    };

    constructor(dice: number, type: DiceRollType) {
        this.type = type;
        this.value = this.randomNumber(dice);
        this.other = type === 'normal' ? null : this.randomNumber(dice);
    };
};

export class DiceRoll {
    /** Hora atual. */
    readonly date = Date.now();
    /** Tipo de dado. */
    readonly dice: number;
    /** Quantidade de dados. */
    readonly amount: number;
    /** Modificador que será somado ao resultado. */
    readonly modToSum: number;
    /** Valor total da jogada. */
    readonly finalResult: number;
    /** Descrição textual da jogada (sem o resultado). */
    readonly text: string;
    /** Tipo de jogada: normal, com vantagem ou com desvantagem. */
    readonly type: DiceRollType;
    /** Detalhes sobre a rolagem. */
    readonly rolls: EachDiceRoll[] = [];

    constructor(dice: number, amount: number, modToSum: number, type: DiceRollType) {
        this.dice = dice;
        this.amount = amount;
        this.modToSum = modToSum;
        this.text = generateDiceRollText(dice, amount, modToSum);
        this.type = type;

        let counter = 0;
        while (counter < amount) {
            counter++;
            const thisRoll = new EachDiceRoll(dice, type);
            this.rolls.push(thisRoll);
        };

        if (this.rolls.length === 0) throw new RingoError('Nenhum dado foi rolado.');
       this.finalResult = this.rolls.reduce((accumulator, diceRoll) => {
            const valueToUse = () => {
                switch(type) {
                    case 'normal':
                        return diceRoll.value;
                    case 'vantagem':
                        return diceRoll.value >= (diceRoll.other as number) ? diceRoll.value : diceRoll.other;
                    case 'desvantagem':
                        return diceRoll.value <= (diceRoll.other as number) ? diceRoll.value : diceRoll.other;
                };
            };

            return accumulator + (valueToUse() as number);
        }, this.modToSum);
    };
};