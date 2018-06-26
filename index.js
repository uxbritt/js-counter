

const App = {
  bgColor: "red",
  init(){
    this.cacheDom();
    this.bindEventListeners();
    this.render();
  },
  cacheDom(){
    this.root = document.querySelector('#app');
    this.leftBtn = document.querySelector('.left');
    this.rightBtn = document.querySelector('.right');
    this.display = document.querySelector('.display');
  },
  bindEventListeners(){
    this.leftBtn.addEventListener('click', this.changeLeftBgColor.bind(this));
    this.rightBtn.addEventListener('click', this.changeRightBgColor.bind(this));
  },
  changeLeftBgColor(){
    console.log(this.bgColor);
    if (this.bgColor === "red"){
      this.bgColor = "blue";
      this.render();
    } else if (this.bgColor === "blue"){
      this.bgColor = "green";
      this.render()
    } else if (this.bgColor === "green"){
      this.bgColor = "red";
      this.render()
    } else {
      console.log('not a color');
    }
  },
  changeRightBgColor(){
    console.log(this.bgColor);
    if (this.bgColor === "red"){
      this.bgColor = "green";
      this.render();
    } else if (this.bgColor === "green"){
      this.bgColor = "blue";
      this.render()
    } else if (this.bgColor === "blue"){
      this.bgColor = "red";
      this.render()
    } else {
      console.log('not a color');
    }
  },
  render(){
    this.display.style.backgroundColor = this.bgColor;
  }
}

App.init();
window.App = App;