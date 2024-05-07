const helper = require('../helper');
class Edge {
   constructor(source, destination, weight) {
      this.source = source;
      this.destination = destination;
      this.weight = weight;
   }
}

class Graph {
   constructor() {
      this.adjacencyList = new Map();
   }

   addEdge(source, destination, weight) {
      // console.log({ source: source._id.toString(), destination: destination._id.toString(), weight });
      if (!this.adjacencyList.has(source._id.toString())) {
         this.adjacencyList.set(source._id.toString(), []);
      }
      this.adjacencyList.get(source._id.toString()).push(new Edge(source, destination, weight));
   }

   getRootShortPath(rootVertexName) {
      if (this.adjacencyList.size < 0) {
         return null;
      }
      let minEdgeFromRoot = null;

      this.adjacencyList.forEach((v) => {
         v.forEach((vx) => {
            if (vx.source._id.toString() === rootVertexName) {
               if (!minEdgeFromRoot) minEdgeFromRoot = vx;
               if (vx.weight < minEdgeFromRoot.weight) minEdgeFromRoot = vx;
            }
         });
      });

      return minEdgeFromRoot;
   }

   getNeighbors(vertex) {
      return this.adjacencyList.get(vertex.destination?._id.toString()) || [];
   }

   findShortestPathThroughAllLocation(root) {
      const visited = [root];
      let currentVertex = root;
      while (visited.length < this.adjacencyList.size - 1) {
         const neighbors = this.getNeighbors(currentVertex);
         const minNer = this.findMinShortPathFromNeighbors(neighbors, visited, root);
         if (minNer) {
            visited.push(minNer);
            currentVertex = minNer;
         }
      }
      return visited;
   }

   findMinShortPathFromNeighbors(neighbors, visited, root) {
      let minEdge = Infinity;
      neighbors.forEach((ne) => {
         if (!this.checkExistVisited(ne, visited) && ne.destination._id !== root.source._id) {
            minEdge = ne;
         }
      });

      neighbors.forEach((ne) => {
         if (
            ne.weight < minEdge.weight &&
            !this.checkExistVisited(ne, visited) &&
            ne.destination._id !== root.source._id
         ) {
            minEdge = ne;
         }
      });

      if (this.checkExistVisited(minEdge, visited)) {
         return null;
      }
      return minEdge;
   }
   checkExistVisited(vertex, visited) {
      return !!visited.find(
         (v) =>
            (v.source === vertex.source?._id.toString() &&
               v.destination?._id.toString() === vertex.destination?._id.toString()) ||
            (v.source === vertex.destination?._id.toString() &&
               v.destination?._id.toString() === vertex.source?._id.toString()),
      );
   }

   async initGraph(location, locations) {
      const roots = { ...location, _id: '-1' };
      //   add path from root
      for (let i = 0; i < locations.length; i++) {
         const location = locations[i];
         const weight = helper.getDistanceFromArr(location, {
            latitude: location.coordinates.coordinates[1],
            longitude: location.coordinates.coordinates[0],
         });
         this.addEdge(roots, location, weight.distanceInKilometers);
         this.addEdge(location, roots, weight.distanceInKilometers);

         for (let j = 0; j < locations.length; j++) {
            const subLocation = locations[j];
            if (subLocation._id.toString() !== location._id.toString()) {
               const subWeight = helper.getDistanceFromArr(
                  subLocation.coordinates.coordinates,
                  location.coordinates.coordinates,
               );
               this.addEdge(location, subLocation, subWeight.distanceInKilometers);
            }
         }
      }

      //
   }

   async findShortSchedule(location, foods) {
      await this.initGraph(location, foods);
      const root = this.getRootShortPath('-1');
      return await this.findShortestPathThroughAllLocation(root);
   }
}

module.exports = Graph;

// const graph = new Graph();

// // current Root
// graph.addEdge('Root', 'a', 9);
// graph.addEdge('Root', 'b', 1);
// graph.addEdge('Root', 'c', 2);
// graph.addEdge('Root', 'd', 4);
// graph.addEdge('a', 'b', 6);
// graph.addEdge('a', 'c', 1);
// graph.addEdge('a', 'd', 12);
// graph.addEdge('a', 'Root', 9);
// graph.addEdge('b', 'a', 6);
// graph.addEdge('b', 'c', 7);
// graph.addEdge('b', 'd', 11);
// graph.addEdge('b', 'Root', 1);
// graph.addEdge('c', 'a', 1);
// graph.addEdge('c', 'b', 7);
// graph.addEdge('c', 'd', 4);
// graph.addEdge('c', 'Root', 2);
// graph.addEdge('d', 'a', 12);
// graph.addEdge('d', 'b', 11);
// graph.addEdge('d', 'c', 4);
// graph.addEdge('d', 'Root', 4);

// var root = graph.getRootShortPath('Root');
// // Find the shortest path using Dijkstra's algorithm
// const result = graph.findShortestPathThroughAllLocation(root);

// console.log(result);
