
        const tryRequire = (path) => {
        	try {
        	const image = require(`${path}`);
        	return image
        	} catch (err) {
        	return false
        	}
        };

        export default {
        
	questionMark: require('./questionMark.png'),
	Frame14859_paperboardyellowtexture3: tryRequire('./Frame14859_paperboardyellowtexture3.png') || require('./questionMark.png'),
	Frame14859_Star1: tryRequire('./Frame14859_Star1.png') || require('./questionMark.png'),
	Frame14859_pngwing1: tryRequire('./Frame14859_pngwing1.png') || require('./questionMark.png'),
	Frame14859_Vector: tryRequire('./Frame14859_Vector.png') || require('./questionMark.png'),
	Frame14859_Vector_1: tryRequire('./Frame14859_Vector_1.png') || require('./questionMark.png'),
	Frame14859_Vector_2: tryRequire('./Frame14859_Vector_2.png') || require('./questionMark.png'),
	Frame14859_Vector_3: tryRequire('./Frame14859_Vector_3.png') || require('./questionMark.png'),
	Frame14859_image145: tryRequire('./Frame14859_image145.png') || require('./questionMark.png'),
	Frame14859_Vector_4: tryRequire('./Frame14859_Vector_4.png') || require('./questionMark.png'),
	Frame14859_Vector_5: tryRequire('./Frame14859_Vector_5.png') || require('./questionMark.png'),
	Frame14859_Vector_6: tryRequire('./Frame14859_Vector_6.png') || require('./questionMark.png'),
	Frame14859_Vector_7: tryRequire('./Frame14859_Vector_7.png') || require('./questionMark.png'),
	Frame14859_image146: tryRequire('./Frame14859_image146.png') || require('./questionMark.png'),
	Frame14859_Vector_8: tryRequire('./Frame14859_Vector_8.png') || require('./questionMark.png'),
	Frame14859_Vector_9: tryRequire('./Frame14859_Vector_9.png') || require('./questionMark.png'),
	Frame14859_Vector_10: tryRequire('./Frame14859_Vector_10.png') || require('./questionMark.png'),
	Frame14859_Vector_11: tryRequire('./Frame14859_Vector_11.png') || require('./questionMark.png'),
	}