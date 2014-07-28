module.exports = function( dataLength ) {

	var curIndices = [],
		idxLookUp = {},
		lookUpKey = null;

	return function( vertexOut, indexOut, newVertexData ) {

		var combined = null,
			hasData = true,
			aKey = null;

		// initialize the vertexout data arrays
		for( var i in newVertexData ) {

			if( vertexOut[ i ] === undefined ) {

				vertexOut[ i ] = [];
			}
		}

		// this will be used to save the index
		aKey = i;

		while( hasData ) {

			combined = {};

			// kind of unfortunate but we'll need to run a for in loop twice
			for( var i in newVertexData ) {

				combined[ i ] = newVertexData[ i ].splice( 0, 1 );
			}

			hasData = newVertexData[ aKey ].length > 0;
			lookUpKey = JSON.stringify( combined );

			if( idxLookUp[ lookUpKey ] === undefined ) {

				idxLookUp[ lookUpKey ] = vertexOut[ aKey ].length;

				for( var i in combined ) {

					vertexOut[ i ].push( combined[ i ] );
				}	
			}

			curIndices.push( idxLookUp[ lookUpKey ] );
			
			if( curIndices.length == dataLength ) {

				indexOut.push( curIndices );
				curIndices = [];
			}
		}
	};
};