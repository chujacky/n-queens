/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(num) {
  var solution = []; //fixme
  var board = new Board({n: num})

  var findSolution = function(board, n, row = 0) {
  
     if (row === num + 1){
          return;
        }
    if (!board.hasAnyRooksConflicts()){
      if (n === 0) {
        for (var i = 0; i < board.rows().length;i++){
          solution.push(board.get(i).slice());
          
        }
        return;
      } 
    } else {
     return; 
   } 

    
       
      for (var j = 0; j < board.rows().length; j++) {
        if (board.get(row)[j] === 1) {
          continue;
        }
        board.togglePiece(row,j);
        findSolution(board, n - 1, row+1);
        board.togglePiece(row, j);
        if (solution.length > 0 || row === num + 1){
          return;
        }

  
    } 

  }

  findSolution(board, num);

  console.log('Single solution for ' + num + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(num) {
  var solutionCount = 0; //fixme 
  var board = new Board({n: num})

  var findSolution = function(board, n, row = 0, col = 0) {
 
     if (row === num + 1){
          return;
        }
    if (!board.hasAnyRooksConflicts()){
      if (n === 0) {
        // for (var i = 0; i < board.rows().length;i++){
        //   solution.push(board.get(i).slice());
        // 
        solutionCount++; 
        return;
      } 
    } else {
     return; 
   } 

    
      for (var j = 0; j < board.rows().length; j++) {
        if (board.get(row)[j] === 1) {
          continue;
        }
        board.togglePiece(row,j);
        findSolution(board, n - 1, row+1 , j);
        board.togglePiece(row, j);
         if (row === num + 1){
          return;
        }
         
      } 
     
  }
  

    findSolution(board, num);


  console.log('Number of solutions for ' + num + ' rooks:', solutionCount);
  return solutionCount;
};


// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(num) {
  var solution = []; //fixme
  var board = new Board({n: num})

  var findSolution = function(board, n, row = 0, col = 0) {
  
     if (row === num + 1){
          return;
        }
    if (!board.hasAnyQueensConflicts()){
      if (n === 0) {
        for (var i = 0; i < board.rows().length;i++){
          solution.push(board.get(i).slice());
          
        }
        return;
      } 
    } else {
     return; 
   } 

    
       
      for (var j = 0; j < board.rows().length; j++) {
        if (board.get(row)[j] === 1) {
          continue;
        }
        board.togglePiece(row,j);
        findSolution(board, n - 1, row+1 , j);
        board.togglePiece(row, j);
        if (solution.length > 0 || row === num + 1){
          return;
        }
      
      if (solution.length > 0 || row === num + 1 ){
          return;
        } 
    } 

  }

  findSolution(board, num);


  console.log('Single solution for ' + num + ' queens:', JSON.stringify(solution));
  solution = solution.length === 0 ? new Board({n: num}).rows() : solution;
  return solution;
};
// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(num) {
  var solutionCount = 0; //fixme
  var board = new Board({n: num})

  var findSolution = function(board, n, row = 0, col = 0) {
  
     if (row === num + 1){
          return;
        }
    if (!board.hasAnyQueensConflicts()){
      if (n === 0) {
        
        solutionCount++;
        return;
      } 
    } else {
     return; 
   } 

    
       
      for (var j = 0; j < board.rows().length; j++) {
        if (board.get(row)[j] === 1) {
          continue;
        }
        board.togglePiece(row,j);
        findSolution(board, n - 1, row+1 , j);
        board.togglePiece(row, j);
        if ( row === num + 1){
          return;
        }
      
      if (row === num + 1 ){
          return;
        } 
    } 

  }

  findSolution(board, num);

  console.log('Number of solutions for ' + num + ' queens:', solutionCount);
  return solutionCount;
};
