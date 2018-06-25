

const App = {
  amount: 1,
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
    this.numbInput = document.querySelector('#numb');
  },
  bindEventListeners(){
    this.numbInput.addEventListener('input', this.changeAmount.bind(this));
    this.addBtn.addEventListener('click', this.addToCount.bind(this));
    this.minusBtn.addEventListener('click', this.subFromCount.bind(this));
  },
  changeAmount(){
    console.log(this.numbInput.value);
    this.amount = parseInt(this.numbInput.value);
    console.log(this.amount);
  },
  addToCount(){
    this.count += this.amount;
    this.render();
  },
  subFromCount(){
    this.count -= this.amount;
    this.render();
  },
  render(){
    this.display.textContent = this.count;
    this.numbInput.value = this.amount;
    // console.log(this);
  }
}

App.init();
window.App = App;

