export class Task { 
    constructor(
        public content: string,
        public completed: boolean,
        public toDelete: boolean
    ) { }
}