import DivisionResult from "./DivisionResult";
import Change from "./Change";

export default class CashRegister {

    public static change(cash: number): Change|null {

        let change = new Change(0, 0, 0);
        let remainder = cash;

        //amount to low for the used notes
        if(cash < 2){
            return null;
        }

        if(cash >= 10){
            //we must give as many 10€ notes bas possible but must check if we can change the remaining amount with 5€ and 2€ notes (or a combination of both)
            const result = CashRegister.getChange(cash, 10, [5, 2, 7]);
            change.ten = result.result;
            remainder = result.remainder;
        }

        if(remainder >= 5){
            const result = CashRegister.getChange(remainder, 5, [2]);
            change.five = result.result;
            remainder = result.remainder;
        }

        if(remainder >= 2){
            const result = CashRegister.divide(remainder, 2);
            if(result.remainder != 0){
                return null;
            }   
            change.two = result.result;
            remainder = result.remainder;
        }

        return change;
    }

    //get the number of notes (note param) we can use for the current amount
    //also pass lower notes (and note combinations)
    //return the number of notes to give and the remaining amount to change
    private static getChange(amount: number, note: number, notes: Array<number>): DivisionResult{
        const result = CashRegister.divide(amount, note);
        if(!CashRegister.canChange(result.remainder, notes)){
            result.result = result.result-1;
            result.remainder = result.remainder + note;
        }
        return result
    }

    //check if the remaining cash amount can be obtained with given notes 
    private static canChange(remainder: number, notes: Array<number>): boolean{
        //no cash remaining, we're done
        if(remainder == 0){
            return true;
        }
        //not enough cash remaining
        if(remainder < Math.min.apply(null, notes)){
            return false;
        }      
        //check if yen can change the remaining amount with give, notes
        let contains = false;
        notes.forEach(note => {
            if(remainder % note == 0){
                contains = true;
            }
        });
        return contains;
    }

    //euclidean division
    private static divide(amount: number, by: number): DivisionResult{
        const result = Math.floor(amount/by);
        const remainder = amount % by;
        return new DivisionResult(result, remainder);
    }
  }