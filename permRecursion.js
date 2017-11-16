//uses recursion to print out all permutations of a string

function permutation(str, prefix) {
	if (str.length === 0) { //base case
			console.log(prefix);
	} else {
		for (var i = 0; i < str.length; i++) { //looks at each letter in string and recursively generates permuations
				var rem = getRestOfString(str, i);
				permutation(rem, prefix + str.charAt(i));
		}
	}
}

//gets the letters that are not currently selected by index param
// for example 'cat', if index is 0, 'c' is currently selected, need to get 'at'
// if index is 1, 'a' is the start letter, and restofString will be 'ct'

function getRestOfString(string, index) {
	return string.substring(0, index) + string.substring(index + 1);
}

permutation('cat', "");
// prints out cat, cta, act, atc, tca, tac
//
//

// Run through of example
// the first for loop will run three calls to perm that branch out and keep accumulating to the prefix param
// by removing chars from str which will hit base case when str is empty,
// and then stop and print prefix when str is empty


//    perm('at', 'c')               perm('ct', 'a')        perm('ca', 't')
//     /            \                          same process for these two perm calls
// perm('t', 'ca') perm('a', 'ct')
//       |               |
// perm('', 'cat') perm('', 'cta')
//       |               |
//     'cat'            'cta'
