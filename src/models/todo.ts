
export class Todo {

  id: String
  title: String
  content: String
  dueDate? : Date

  constructor(title: String, content: String) {
    this.title = title
    this.content = content
    this.dueDate = undefined
  }

}
