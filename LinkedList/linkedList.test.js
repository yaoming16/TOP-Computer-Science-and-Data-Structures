import LinkedList from "./linkedList";

let linkedList = new LinkedList();
for (let i = 0; i <= 10; i++) {
    linkedList.append(i);
}

//Test toString function and append function
test("Test toString display of the linked list", () => {
    let expectedString = "( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> ( 5 ) -> ( 6 ) -> ( 7 ) -> ( 8 ) -> ( 9 ) -> ( 10 ) -> NULL";  
    expect(linkedList.toString()).toBe(expectedString);
})

// Test append size changes (isolated list)
test("append: size increases with each append", () => {
    let list = new LinkedList();
    expect(list.size()).toBe(0);
    list.append(1);
    expect(list.size()).toBe(1);
    list.append(2);
    expect(list.size()).toBe(2);
    list.append(3);
    expect(list.size()).toBe(3);
})

// Test prepend function
test("'asd' and 55 ", () => {
    linkedList.prepend(55);
    linkedList.prepend("asd");
    let expectedString = "( asd ) -> ( 55 ) -> ( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> ( 5 ) -> ( 6 ) -> ( 7 ) -> ( 8 ) -> ( 9 ) -> ( 10 ) -> NULL";
    expect(linkedList.toString()).toBe(expectedString);
})

// Test prepend size changes (isolated list)
test("prepend: size increases with each prepend", () => {
    let list = new LinkedList();
    expect(list.size()).toBe(0);
    list.prepend("a");
    expect(list.size()).toBe(1);
    list.prepend("b");
    expect(list.size()).toBe(2);
    list.prepend("c");
    expect(list.size()).toBe(3);
})

// Mixed operations: append, prepend, pop update size and content
test("mixed ops: append + prepend + pop adjust size and content", () => {
    let list = new LinkedList();
    expect(list.size()).toBe(0);

    list.append(1);
    expect(list.size()).toBe(1);
    expect(list.toString()).toBe("( 1 ) -> NULL");

    list.append(2);
    expect(list.size()).toBe(2);
    expect(list.toString()).toBe("( 1 ) -> ( 2 ) -> NULL");

    list.prepend(0);
    expect(list.size()).toBe(3);
    expect(list.toString()).toBe("( 0 ) -> ( 1 ) -> ( 2 ) -> NULL");
    expect(list.head().value).toBe(0);
    expect(list.tail().value).toBe(2);

    list.prepend("a");
    expect(list.size()).toBe(4);
    expect(list.toString()).toBe("( a ) -> ( 0 ) -> ( 1 ) -> ( 2 ) -> NULL");

    const removed = list.pop();
    expect(removed.value).toBe("a");
    expect(list.size()).toBe(3);
    expect(list.toString()).toBe("( 0 ) -> ( 1 ) -> ( 2 ) -> NULL");
    expect(list.head().value).toBe(0);
    expect(list.tail().value).toBe(2);
})

// Test size
test("Size of the list is 13", () => {  
    expect(linkedList.size()).toBe(13);
})

// Test head
test("head: First element of the list is 'asd'", () => {  
    expect(linkedList.head().value).toBe("asd");
})

test("head: List is empty returns undefined", () => {
    let list = new LinkedList();
    expect(list.head()).toBe(undefined);
})

// Test Tail
test("tail: Last element of the list is 10", () => {  
    expect(linkedList.tail().value).toBe(10);
})

test("tail: List is empty, returns undefined", () => {
    let list = new LinkedList();
    expect(list.tail()).toBe(undefined);
})

//Test at
test("at: If index is invalid returns undefined (< 0)", () => {
    expect(linkedList.at(-1)).toBe(undefined);
    expect(linkedList.at(-5)).toBe(undefined);
})

test("at: Index bigger than list return undefined (index = 13, 15)", () => {
    expect(linkedList.at(13)).toBe(undefined);
    expect(linkedList.at(15)).toBe(undefined);
})

test("at: Index 0 is 'asd'", () => {
    expect(linkedList.at(0).value).toBe("asd");
})

test("at: Index 12 is 10", () => {
    expect(linkedList.at(12).value).toBe(10);
})

test("at: Index 4 is 2", () => {
    expect(linkedList.at(4).value).toBe(2);
})

// Test pop
test("Remove head node of the list correctly and returned the removed element", () => {  
    let expectedString = "( 55 ) -> ( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> ( 5 ) -> ( 6 ) -> ( 7 ) -> ( 8 ) -> ( 9 ) -> ( 10 ) -> NULL";
    expect(linkedList.pop().value).toBe("asd");
    expect(linkedList.toString()).toBe(expectedString);
    expect(linkedList.size()).toBe(12);
})

test("List is empty, pop returns undefined", () => {
    let list = new LinkedList();
    expect(list.pop()).toBe(undefined);
})

//Test contains
test("List is empty, contains return false for any value", () => {
    let list = new LinkedList();
    expect(list.contains("asd")).toBe(false);
    expect(list.contains(55)).toBe(false);
    expect(list.contains(undefined)).toBe(false);
    expect(list.contains(null)).toBe(false);
})

test("Contains return true for a value of 3, 55 and 10", () => {
    expect(linkedList.contains(3)).toBe(true);
    expect(linkedList.contains(55)).toBe(true);
    expect(linkedList.contains(10)).toBe(true);
})

//Find Index
test("findIndex return index if value in the list (values: 55, 10, 8 - return index: 1, 12, 10)", () => {
    expect(linkedList.findIndex(55)).toBe(0);
    expect(linkedList.findIndex(10)).toBe(11);
    expect(linkedList.findIndex(8)).toBe(9);
})

test("findIndex return -1 if value not in the list (values: 555, undefined, null, '12hj')", () => {
    expect(linkedList.findIndex(555)).toBe(-1);
    expect(linkedList.findIndex(undefined)).toBe(-1);
    expect(linkedList.findIndex(null)).toBe(-1);
    expect(linkedList.findIndex("12hj")).toBe(-1);
})

test("findIndex: If the value is more than one time in the list, return the first one", () => {
    let list = new LinkedList();
    list.append(55);
    list.append(84567);
    list.append(55);
    list.append(1234);
    list.append(88);
    list.append(88);
    list.append(1234);
    console.log(list.toString());
    expect(list.findIndex(55)).toBe(0);
    expect(list.findIndex(1234)).toBe(3);
    expect(list.findIndex(88)).toBe(4);
})

//InsertAt

test("insertAt: insert 16 value at index 1", () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);

    list.insertAt(1, 16);

    expect(list.findIndex(1)).toBe(0);
    expect(list.findIndex(16)).toBe(1);
    expect(list.findIndex(2)).toBe(2);
    expect(list.findIndex(3)).toBe(3);

    expect(list.at(1).value).toBe(16);
    expect(list.size()).toBe(4);
})

test("insertAt: insert 16, 17, 18, 19, 15 values at index 2", () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);

    list.insertAt(2, 16, 17, 18, 19, 15);

    expect(list.findIndex(1)).toBe(0);
    expect(list.findIndex(2)).toBe(1);
    expect(list.findIndex(16)).toBe(2);
    expect(list.findIndex(17)).toBe(3);
    expect(list.findIndex(18)).toBe(4);
    expect(list.findIndex(19)).toBe(5);
    expect(list.findIndex(15)).toBe(6);
    expect(list.findIndex(3)).toBe(7);

    expect(list.at(2).value).toBe(16);
    expect(list.at(3).value).toBe(17);
    expect(list.at(4).value).toBe(18);
    expect(list.at(5).value).toBe(19);
    expect(list.at(6).value).toBe(15);
    expect(list.size()).toBe(8);
})

test("insertAt: insert index is our of range (above size of list or below 0)", () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    expect(() => list.insertAt(-1, 16, 15)).toThrow(RangeError);
    expect(() => list.insertAt(3, 16, 15)).toThrow(RangeError);
})

test("insertAt: insert 16 value at the start", () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);

    list.insertAt(0, 16);

    expect(list.findIndex(16)).toBe(0);
    expect(list.findIndex(1)).toBe(1);
    expect(list.findIndex(2)).toBe(2);
    expect(list.findIndex(3)).toBe(3);

    expect(list.at(0).value).toBe(16);
    expect(list.size()).toBe(4);
})

test("insertAt: insert 16 value at the end", () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);

    list.insertAt(2, 16);

    expect(list.findIndex(1)).toBe(0);
    expect(list.findIndex(2)).toBe(1);
    expect(list.findIndex(16)).toBe(2);
    expect(list.findIndex(3)).toBe(3);

    expect(list.at(2).value).toBe(16);
    expect(list.size()).toBe(4);
})

//RemoveAt
test("removeAt: remove first element", () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);

    list.removeAt(0);

    expect(list.findIndex(2)).toBe(0);
    expect(list.findIndex(3)).toBe(1);
    expect(list.findIndex(1)).toBe(-1);

    expect(list.size()).toBe(2);
})


test("removeAt: remove last element", () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);

    list.removeAt(2);

    expect(list.findIndex(1)).toBe(0);
    expect(list.findIndex(2)).toBe(1);
    expect(list.findIndex(3)).toBe(-1);

    expect(list.size()).toBe(2);
})

test("removeAt: remove middle element", () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);

    list.removeAt(1);

    expect(list.findIndex(1)).toBe(0);
    expect(list.findIndex(2)).toBe(-1);
    expect(list.findIndex(3)).toBe(1);

    expect(list.size()).toBe(2);
})

test("removeAt: insert index is our of range (above size of list or below 0)", () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    expect(() => list.removeAt(-1)).toThrow(RangeError);
    expect(() => list.removeAt(3)).toThrow(RangeError);
})

test("removeAt: try to remove from ampty list", () => {
    let list = new LinkedList();
    expect(() => list.removeAt(0)).toThrow(RangeError);
    expect(() => list.removeAt(1)).toThrow(RangeError);
    expect(() => list.removeAt(2)).toThrow(RangeError);
})

test("removeAt: remove from a one node list", () => {
    let list = new LinkedList();
    list.append(5);
    list.removeAt(0);
    expect(list.head()).toBe(undefined);
    expect(list.tail()).toBe(undefined);
    expect(list.size()).toBe(0);
})

test("removeAt: toString works correctly after removing", () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);

    list.removeAt(1);
    let expectedString = "( 1 ) -> ( 3 ) -> NULL";

    expect(list.toString(1)).toBe(expectedString);
})