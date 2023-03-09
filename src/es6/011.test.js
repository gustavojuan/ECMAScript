export function* getId() {
    let catID = 1
    while (true) {
      yield catID++
    }
  }

const id = getId();
console.log(id.next().value);
