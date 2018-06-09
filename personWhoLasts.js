function Node(value) {
	this.value = value;
	this.next = null;
}


function LinkedList() {
	this.head = null;
	this.tail = null;
	this.size = 0;
}

LinkedList.prototype.addNode = function(value) {
	const newNode = new Node(value);

	if (this.size === 0) {
		this.head = newNode;
		this.tail = newNode;
		this.head.next = this.tail;
	} else if (this.size === 1) {
		this.tail = newNode;
		this.head.next = this.tail;
		this.tail.next = this.head;
	} else {
		this.tail.next = newNode;
		this.tail = newNode;
		this.tail.next = this.head;
	}

	this.size++;
}

function findLast(numberOfPeople) {
	if (!numberOfPeople) {
		return `Cannot find last man from list of ${numberOfPeople} people.`
	}

	if (numberOfPeople === 1 || numberOfPeople === 2) {
		return new Node(1);
	}

	const linkedList = new LinkedList();

	for(let i = 1; i <= numberOfPeople; i++) {
		linkedList.addNode(i);
	}

	let start = linkedList.head;
	let size = linkedList.size;

	while(size !== 1) {
		const next = start.next.next;

		delete start.next;
		start.next = next;
		start = start.next;

		size--;
	}

	return start;
}


console.log(findLast(100))