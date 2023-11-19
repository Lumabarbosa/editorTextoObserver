import { TextEditor } from './TextEditor';
import { Editor } from './Editor';

export const textEditor = new TextEditor();


console.log('***********************************************************')
console.log('        Seja bem-vindo à ferramenta: Editor de Texto       ')
console.log('***********************************************************')

textEditor.open();

textEditor.insertLine(1, '********Inventário Loja**********');
textEditor.insertLine(2, "Blusa Manga curta");
textEditor.insertLine(3, "Casaco");
textEditor.insertLine(4, "Short");
textEditor.insertLine(5, "Calça");
textEditor.insertLine(6, "Vestido");
console.log(textEditor)

textEditor.removeLine(4);

textEditor.save()

console.log(textEditor)


