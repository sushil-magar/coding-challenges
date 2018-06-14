module.exports = class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, fn) {
    if (this.events[eventName]) {
      this.events[eventName].push(fn);
    } else {
      this.events[eventName] = new Array(fn);
    }

    return this;
  }

  emit(eventName, ...params) {
    const events = this.events[eventName];

    if (events) {
      events.forEach((fn) => fn(...params));
    }

    return Boolean(events);    
  }
}