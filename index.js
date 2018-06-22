

const App = {
  count: 0,
  init(){
    this.cacheDom();
    this.bindEventListeners();
    this.render();
  },
  cacheDom(){
    this.root = document.querySelector('#app');
    this.addBtn = document.querySelector('.inc');
    this.minusBtn = document.querySelector('.sub');
    this.display = document.querySelector('.display');
  },
  bindEventListeners(){
    this.addBtn.addEventListener('click', this.addToCount.bind(this));
    this.minusBtn.addEventListener('click', this.subFromCount.bind(this));
  },
  addToCount(){
    this.count += 1;
    this.render();
  },
  subFromCount(){
    this.count -= 1;
    this.render();
  },
  render(){
    this.display.textContent = this.count;
    // console.log(this);
  }
}

App.init();
window.App = App;

