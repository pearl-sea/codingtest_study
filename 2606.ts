import * as fs from "fs";
const input: number[][] = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number))
  .slice(2);

interface GraphList {
  [key: number]: number[];
}

class Graph {
  list: GraphList;

  constructor() {
    this.list = {};
  }

  addVertex(vertex: number): void {
    this.list[vertex] = [];
  }

  addEdge(start: number, end: number): void {
    this.list[start].push(end);
    this.list[end].push(start);
  }

  dfs(start: string): number {
    if (!Object.keys(this.list).includes(start)) {
      return 0;
    }

    const visited: Record<string, boolean> = {};
    let result: number = 0;

    const dfsTraversal = (start: string) => {
      visited[start] = true;

      const currentEdge: number[] = this.list[start];

      for (let i: number = 0; i < currentEdge.length; i++) {
        if (!visited[currentEdge[i]]) {
          result++;
          dfsTraversal(currentEdge[i].toString());
        }
      }
    };

    dfsTraversal(start);
    return result;
  }
}
const graph = new Graph();

for (let i: number = 0; i < input.length; i++) {
  const [start, end]: number[] = input[i];

  if (!graph.list[start]) {
    graph.addVertex(start);
  }
  if (!graph.list[end]) {
    graph.addVertex(end);
  }
  graph.addEdge(start, end);
}

console.log(graph.dfs("1"));
