class Node {
    constructor(data, next=null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    //Insert First Node
    insertFirst(data){
        this.head = new Node(data, this.head);
        this.size++;
    }
    //Insert Last Node
    insertLast(data){
        let node = new Node(data);
        let current;

        // If Empty then make head
        if(!this.head){
            this.head = node;
        }
        else{
            current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    
    //Insert at Index
    insertAt(data, index){
        //If index out of range
        if(index > 0 && index > this.size){
            return;
        }
        //If first index
        if(index === 0){
            this.insertFirst(data);
        }

        const node = new Node(data);
        let current, previous;

        //Set current to first
        current = this.head;
        let count = 0;

        while(count < index){
            previous = current; // node before index
            count++;
            current = current.next; //node after index
        }

        node.next = current;
        previous.next = node;

        this.size++;
    }

    //Get at index
    getAt(index){
        let current = this.head;
        let count = 0;

        while(current){
            if (count == index){
                console.log(`${current.data} at ${index}`);
            }
            count++;
            current = current.next;
        }
        return null;
    }
    //Remove at Index

    removeAt(index){
        if(index > 0 && index > this.size){
            return;
        }

        let current = this.head;
        let previous;
        let count = 0;

        //remove first
        if(index === 0){
            this.head = current.next;
        }
        else{
            while(count < index){
                count++;
                previous = current;
                current = current.next;
            }
        }

        previous.next = current.next;
    }

    //Clear List
    clearList(){
        this.head = null;
        this.size = 0;    
    }

    //Print List Data
    printListData(){
        let current = this.head;
        while(current) {
            console.log(current.data);
            current=current.next;
        }
    }
}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
ll.insertAt(800, 2);
ll.printListData();

console.log("--------");

ll.getAt(1);

console.log("--------");

ll.removeAt(1);
ll.printListData();
