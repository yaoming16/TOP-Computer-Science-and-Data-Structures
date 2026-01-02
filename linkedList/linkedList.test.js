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

// Test prepend function
test("'asd' and 55 ", () => {
    linkedList.prepend(55);
    linkedList.prepend("asd");
    let expectedString = "( asd ) -> ( 55 ) -> ( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> ( 5 ) -> ( 6 ) -> ( 7 ) -> ( 8 ) -> ( 9 ) -> ( 10 ) -> NULL";
    expect(linkedList.toString()).toBe(expectedString);
})

// Test size
test("Test toString display of the linked list", () => {
    linkedList.prepend(55);
    linkedList.prepend("asd");
    let expectedString = "( asd ) -> ( 55 ) -> ( 0 ) -> ( 1 ) -> ( 2 ) -> ( 3 ) -> ( 4 ) -> ( 5 ) -> ( 6 ) -> ( 7 ) -> ( 8 ) -> ( 9 ) -> ( 10 ) -> NULL";
    expect(linkedList.toString()).toBe(expectedString);
})