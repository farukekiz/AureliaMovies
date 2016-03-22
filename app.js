export class App {
    
  constructor() {
    this.message = "";
  }
  
  activate(){
      this.message = "Hello from Aurelia movie!";
  }
  
  changeMessage(){
      this.message = "Goodbye!!!!!";
  }
}