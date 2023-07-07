import * as fs from "fs";
const input: number[] = fs.readFileSync("./input.txt").toString().trim().split(" ").map(Number);

class Tree {
  value: number;
  children: Tree[];

  constructor(value: number) {
    this.value = value;
    this.children = [];
  }

  insertNode(value: number): void {
    const ChildNode = new Tree(value);
    this.children.push(ChildNode);
  }
}

const rootNode = new Tree(0);
let answer: string = "";

function addNode(node: Tree, count: number): void {
  if (count >= input[0]) {
    return;
  }

  node.insertNode(count);
  answer += node.value + " " + node.children[node.children.length - 1].value + "\n";

  if (input[1] === 2) {
    addNode(node.children[node.children.length - 1], count + 1);
  } else {
    if (node.value < 1 || count >= input[1]) {
      addNode(node.children[node.children.length - 1], count + 1);
    } else {
      addNode(node, count + 1);
    }
  }
}

addNode(rootNode, 1);
console.log(answer.slice(0, answer.length - 1));
