export class Task { 
    constructor(
        public content: string,
        public completed: boolean,
        public hidden: boolean
    ) { }
}