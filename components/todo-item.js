
const { BaseComponent } = require('modulor');
import hyperHTML from 'hyperhtml/esm';


class TodoController extends BaseComponent {
  //constructor(){
    //super();
  //}
  connectedCallback(){
    console.log('connected');

    const render = hyperHTML(this);

    const data = { foo: 'foo' };

    render`
      <todo-item test="${data}"></todo-item>
    `;

  }
}

customElements.define('todo-controller', TodoController);


const template = (render, scope) => render`
  <span>${scope.foo} !</span>
`;


class TodoItem extends BaseComponent {
  constructor(){
    super();
    console.log('constructor');
  }

  connectedCallback(){
    console.log('connected3');

  }

  get renderer(){
    return this._renderer || (this._renderer = hyperHTML(this));
  }

  render(value){
    return template(this.renderer, value);
  }

  set test(value){
    this.render(value);
  }
}

customElements.define('todo-item', TodoItem);
