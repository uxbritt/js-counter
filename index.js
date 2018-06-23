

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
    this.addTwoBtn = document.querySelector('.inc2');
    this.minusBtn = document.querySelector('.sub1');
    this.minusTwoBtn = document.querySelector('.sub2');
    this.display = document.querySelector('.display');
  },
  bindEventListeners(){
    this.addBtn.addEventListener('click', this.addToCount.bind(this));
    this.minusBtn.addEventListener('click', this.subFromCount.bind(this));
    this.addTwoBtn.addEventListener('click', this.addTwoToCount.bind(this));
    this.minusTwoBtn.addEventListener('click', this.subTwoFromCount.bind(this));
  },
  addToCount(){
    this.count += 1;
    this.render();
  },
  subFromCount(){
    this.count -= 1;
    this.render();
  },
  addTwoToCount(){
    this.count += 2;
    this.render();
  },
  subTwoFromCount(){
    this.count -= 2;
    this.render();
  },
  render(){
    this.display.textContent = this.count;
  }
}

App.init();
window.App = App;

