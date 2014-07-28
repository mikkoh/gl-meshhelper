var helperPoint = require( '../index' )( 1 );

var vertexOut = {},
	indexOut = [];

helperPoint( vertexOut, indexOut, {

	position: [ [ 0, 1 ], [ 2, 3 ], [ 0, 1 ] ],
	colour: [ [ 1, 0, 0 ], [ 0, 1, 0 ], [  1, 0, 0 ] ]
});

console.log( '-----------' );
console.log( JSON.stringify( vertexOut, undefined, 2 ) );
console.log( '-----------' );
console.log( indexOut );
console.log( '-----------' );