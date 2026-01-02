import Node from "./node.js";

export default class LinkedList {
    constructor () {
        this.listHead = null;
    }

    //adds a new node containing value to the end of the list
    append(value) {
        let newNode = new Node(value, null);

        if (!this.listHead) {
            this.listHead = newNode;
            return;
        }

        let currentNode = this.listHead;
        while (currentNode.nextNode) {
            currentNode = currentNode.nextNode;
        }
        currentNode.nextNode = newNode;
        return;
    }

    //adds a new node containing value to the start of the list
    prepend(value) {
        let newNode = new Node(value);
        newNode.nextNode = this.listHead;
        this.listHead = newNode;

    }

    //returns the total number of nodes in the list.
    size() {
        let currentNode = this.listHead;
        let count = 0;
        while (currentNode) {
            count++;
            currentNode = currentNode.nextNode;
        }
        return count;
    }

    //should return the value of the first node in the list. If the list is empty, it should return undefined
    head() {
        if (!this.listHead) {
            return undefined;
        }
        return this.listHead;
    }

    //should return the value of the final node in the list. If the list is empty, it should return undefined.
    tail() {
        if (!this.listHead) {
            return undefined;
        }
        let currentNode = this.listHead;
        while(currentNode.nextNode) {
            currentNode = currentNode.nextNode;
        } 
        return currentNode;
    }

    //should return the value of the node at the given index. If there’s no node at the given index, it should return undefined.
    at(index) {
        let currentNode = this.listHead;
        let nodeIndex = 1;
        while (currentNode && nodeIndex < index) {
            currentNode = currentNode.nextNode;
            nodeIndex++;
        }
        if (nodeIndex === index) {
            return currentNode;
        } else {
            return undefined;
        }
    }

    //should remove the head node from the list and return its value. If it’s used on an empty list, it should just return undefined.
    pop() {
        if (!this.listHead) {
            return undefined;
        }
        let nodeToReturn = this.listHead;
        this.listHead = this.listHead.nextNode;
        nodeToReturn.nextNode = null;

        return nodeToReturn;
    }

    //returns true if the passed in value is in the list and otherwise returns false.
    contains(value) {
        let currentNode = this.listHead;
        while (currentNode && currentNode.value !== value) {
            currentNode = currentNode.nextNode;
        }
        return currentNode !== null;
    }

    // returns the index of the node containing the given value. 
    // If the value can’t be found in the list, it should return -1. 
    // If more than one node has a value matching the given value, it should return the index of the first node with the matching value.
    findIndex(value) {
        let currentNode = this.listHead;
        let index = 1;
        while(currentNode && currentNode.value !== value) {
            currentNode = currentNode.nextNode;
            index++;
        }
        if (currentNode) {
            return index;
        } else {
            return -1;
        }
    }

    //represents your LinkedList objects as strings, so you can print them out and preview them in the console. 
    // If the list is empty, it should return an empty string. 
    // The format should be: ( value ) -> ( value ) -> ( value ) -> null.
    toString() {
        let currentNode = this.listHead;
        
        if (!currentNode) {
            return "";
        }
        
        let string = "";
        while (currentNode) {
            string += `( ${currentNode.value} ) -> `;
            currentNode = currentNode.nextNode;
        }
        string += "NULL"
        return string;
    }

    
}