export class Module {

  constructor (factory) {
    this.factory = factory;
    this._definitions = [];
  }

  define (name, definitionObject) {
    var definition = this._definitions[name] = this.factory(definitionObject);
    return definition;
  }

  get (name) {
    return this._definitions[name];
  }
}
