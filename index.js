

const App = {
  pics: ['pic1', 'pic2', 'pic3'],
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
    this.picThumb.addEventListener('click', this.changeFullPic.bind(this));
  },
 for ( function(pics){

  });
  render(){
    this.display.style.backgroundColor = this.bgColor;
  }
}

App.init();
window.App = App;


  
