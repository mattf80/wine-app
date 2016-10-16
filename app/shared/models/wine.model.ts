export class Wine {


    constructor(    
    public id: number,
    public name: string,
    public country: string,
    public colour: string,
    public vintage: number,
    public image: string){        
    }

    get slug(){
        return slugify(this.name);
    }
}

function slugify(text: string)
{
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}