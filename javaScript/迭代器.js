class LinkedList {
  constructor(data) {
    this.data = data
  }

  firstItem() {
    return this.data.find(i => i.head)
  }

  findById(id) {
    return this.data.find(i => i.id = id)
  }

  [Symbol.iterator]() {
    let item = { next: this.firstItem().id }
    return {
      next: () => {
        item = this.findById(item.next)
        if (item) {
          return { value: item.value, done: false }
        }
        return { value: undefined, done: true }
      }
    }
  }
}

export default LinkedList