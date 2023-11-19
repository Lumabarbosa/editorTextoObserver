import { Editor } from "./Editor"

export class TextEditor extends Editor {
    constructor(){
        super();
    }
    
    insertLine(lineNumber: number, text: string): void {
        if (this.edit && (text === "EOF")) {
            this.save();
            return;
        } else {
            this.text[(lineNumber - 1)] = text;
            return;
        }
        throw new Error("Algo deu errado");
    }
    removeLine(lineNumber: number): void {
        if (this.edit) {
            this.text.splice(lineNumber, 1);
            return;
        }
        throw new Error("Algo deu errado");
    }

    save(): void {
        for (let i=0; i <= this.text.length; i++) {
            if (this.text[i] == undefined) {
                this.text[i] == null;
            }
            console.log(`${i+1} -> ${this.text[i]}`)
        }
        this.closed();
    }
}