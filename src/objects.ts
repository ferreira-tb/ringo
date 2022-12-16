import { RingoError } from "@/error.js";
import { generateDiceRollText, randomInteger } from "@/helpers.js";

/** Representa uma combinação que foi rolada. */
export class EachDiceRoll {
    /** Tipo da rolagem. */
    readonly type: DiceRollType
    /** Valor da rolagem. */
    readonly value: number
    /** Outro valor para a rolagem. Apenas usado caso o tipo da rolagem não seja normal. */
    readonly other: number | null

    constructor(dice: number, type: DiceRollType) {
        this.type = type;
        this.value = randomInteger(dice);
        this.other = type === 'normal' ? null : randomInteger(dice);
    };
};

export class DiceModel {
    /** Hora atual. */
    readonly date = Date.now();
    /** Tipo de dado. */
    readonly dice: number;
    /** Quantidade de dados. */
    readonly amount: number;
    /** Modificador que será somado ao resultado. */
    readonly modToSum: number;
    /** Descrição textual da jogada (sem o resultado). */
    readonly text: string;

    constructor(dice: number, amount: number, modToSum: number) {
        this.dice = dice;
        this.amount = amount;
        this.modToSum = modToSum;
        this.text = generateDiceRollText(dice, amount, modToSum);
    };
};

export class DiceRoll extends DiceModel {
    /** Valor total da jogada. */
    readonly finalResult: number;
    /** Tipo de jogada: normal, com vantagem ou com desvantagem. */
    readonly type: DiceRollType;
    /** Detalhes sobre a rolagem. */
    readonly rolls: EachDiceRoll[] = [];

    constructor(dice: number, amount: number, modToSum: number, type: DiceRollType) {
        super(dice, amount, modToSum);
        this.type = dice === 20 ? type : 'normal';

        let counter = 0;
        while (counter < amount) {
            counter++;
            const thisRoll = new EachDiceRoll(dice, this.type);
            this.rolls.push(thisRoll);
        };

        if (this.rolls.length === 0) throw new RingoError('Nenhum dado foi rolado.');
       this.finalResult = this.rolls.reduce((accumulator, diceRoll) => {
            const valueToUse = () => {
                switch(this.type) {
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