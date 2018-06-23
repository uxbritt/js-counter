

const App = {
  count: 0,
  init(){
    this.cacheDom();
    this.bindEventListeners();
    this.render();
  },
  cacheDom(){
    this.root = document.querySelector('#app');
    this.addBtn = document.querySelector('.inc1');
    this.minusBtn = document.querySelector('.sub1');
    this.display = document.querySelector('.display');
    this.numb = document.querySelector(parseInt(numb.value));
  },
  bindEventListeners(){
    this.addBtn.addEventListener('click', this.addToCount.bind(this));
    this.minusBtn.addEventListener('click', this.subFromCount.bind(this));
  },
  addToCount(){
    this.count += numb.value;
    this.render();
  },
  subFromCount(){
    this.count -= numb.value;
    this.render();
  },
  render(){
    this.display.textContent = this.count;
  }
}

App.init();
window.App = App;

