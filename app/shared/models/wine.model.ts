export class Wine {
    constructor(    
    public id: number,
    public name: string,
    public country: string,
    public region: string,
    public colour: string,
    public vintage: number,
    public image: string,
    public shortDesc: string,
    public TastingNotes: TastingNote[]
    ){        
    }

    get slug(){
        return slugify(this.name);
    }
}

export class TastingNote {
    constructor(
        public id: number,
        public wineId: number,
        public notes: string,
        public score: number,
        public dateAdded: string
    ) {}
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