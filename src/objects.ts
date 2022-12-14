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
        const tempValue = randomInteger(dice);
        const tempOther = randomInteger(dice);

        // Isso garante que value sempre terá o valor relevante para o tipo de jogada.
        if (type === 'normal') {
            this.value = tempValue;
            this.other = null;

        } else if (type === 'vantagem') {
            this.value = tempValue >= tempOther ? tempValue : tempOther;
            this.other = tempValue >= tempOther ? tempOther : tempValue;

        } else if (type === 'desvantagem') {
            this.value = tempValue <= tempOther ? tempValue : tempOther;
            this.other = tempValue <= tempOther ? tempOther : tempValue;

        } else {
            throw new RingoError('O tipo é inválido.')
        };
    };
};

export const diceModelKeys: (keyof DiceModel)[] = [
    'date', 'dice', 'amount', 'modToSum', 'minValue', 'maxValue', 'text', 'type'
];

/** Modificar as propriedades de `DiceModel` EXIGE que o validador em `DiceCollection.vue` também seja modificado. */
export class DiceModel {
    /** Hora atual. */
    readonly date = Date.now();
    /** Quantidade de lados que o dado possui. */
    readonly dice: number;
    /** Quantidade de dados. */
    readonly amount: number;
    /** Modificador que será somado ao resultado. */
    readonly modToSum: number;
    /** Valor mínimo possível para a jogada. */
    readonly minValue: number;
    /** Valor máximo possível para a jogada. */
    readonly maxValue: number;
    /** Descrição textual da jogada (sem o resultado). */
    readonly text: string;
    /** Tipo de jogada: normal, com vantagem ou com desvantagem. */
    readonly type: DiceRollType;

    constructor(dice: number, amount: number, modToSum: number, type: DiceRollType) {
        this.dice = dice;
        this.amount = amount;
        this.modToSum = modToSum;
        this.minValue = amount + modToSum;
        this.maxValue = (dice * amount) + modToSum;
        this.text = generateDiceRollText(dice, amount, modToSum);
        this.type = dice === 20 ? type : 'normal';
    };
};

export class DiceRoll extends DiceModel {
    /** Valor total da jogada. */
    readonly finalResult: number;
    
    /** Detalhes sobre a rolagem. */
    readonly rolls: EachDiceRoll[] = [];

    constructor(dice: number, amount: number, modToSum: number, type: DiceRollType) {
        super(dice, amount, modToSum, type);

        let counter = 0;
        while (counter < amount) {
            counter++;
            const thisRoll = new EachDiceRoll(dice, this.type);
            this.rolls.push(thisRoll);
        };

        if (this.rolls.length === 0) throw new RingoError('Nenhum dado foi rolado.');
        this.finalResult = this.rolls.reduce((accumulator, diceRoll) => {
            return accumulator + diceRoll.value;
        }, this.modToSum);
    };
};