const words = ["auto-totem", "farm-macro", "killaura"];
let i = 0;
let timer;

function typingEffect() {
    
	let word = words[i].split("");
	var loopTyping = function() {
		
		if (word.length > 0) {
			document.getElementById('word').innerHTML += word.shift();
		} else {
			deletingEffect();
			return false;
		};
		timer = setTimeout(loopTyping, 200);
	};
	loopTyping();
};

function deletingEffect() {

	let word = words[i].split("");
	var loopDeleting = function() {
		if (word.length > 0) {
			word.pop();
			document.getElementById('word').innerHTML = word.join("");
		} else {
			if (words.length > (i + 1)) {
				i++;
			} else {
				i = 0;
			};
			typingEffect();
			return false;
		};
		timer = setTimeout(loopDeleting, 150);
	};
	loopDeleting();
};

typingEffect();
const words2 = ["if targeting_entity :player input attack", `on tick {
	say "spam";
}`, `on tick {
	if holding #obsidian { 
		input right;
		if hotbar_has #crystal {
			switch #crystal;
			input right;
			input left;
		}
	}
}`];
let j = 0;
let timer2;

function typingEffect2() {
    let word = words2[j].split("");
    var loopTyping2 = function() {
        if (word.length > 0) {
            document.getElementById('word2').innerHTML += word.shift();
        } else {
            deletingEffect2();
            return false;
        }
        timer2 = setTimeout(loopTyping2, 80);
    };
    loopTyping2();
}

function deletingEffect2() {
    let word = words2[j].split("");
    var loopDeleting2 = function() {
        if (word.length > 0) {
            word.pop();
            document.getElementById('word2').innerHTML = word.join("");
        } else {
            if (words2.length > (j + 1)) {
                j++;
            } else {
                j = 0;
            }
            typingEffect2();
            return false;
        }
        timer2 = setTimeout(loopDeleting2, 50);
    };
    loopDeleting2();
}

typingEffect2();