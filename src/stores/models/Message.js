import { observable } from "mobx";

export default class Message { @observable type
   @observable content 

  constructor(message) {
    this.type = message.type || 'Error';
    this.content = message.content;
  }
}
