import promptSync from 'prompt-sync';
export const prompt = promptSync();
prompt(require('prompt-sync'))

export abstract class Editor {
    text: String[];
    edit: boolean = false;

    constructor(){
        this.text = [];
    }
    open(): void {
        this.edit = true;
    }
    closed(): void {
        this.edit = false;
    }
}



