export class Menu {
    constructor() { }
    public state = 'hidden';
    public toggleState() {
        console.log('toggle state');
        console.log(this.state);
        console.log(this.state === 'hidden');
      this.state = this.state === 'hidden' ? 'show' : 'hidden';
    }
  };