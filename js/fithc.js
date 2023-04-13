const emoji_url = 'https://emoji.ymatuhin.workers.dev/'

async function fetchData(url) {
	let res = await fetch(url)
	return res.json()
}
const data = await	fetchData(emoji_url);


let newData = []
function anyFilter(arr){
	for(let i = 0; i < arr.length; i++) {
		newData.push({title: arr[i]['title'],
		symbol: arr[i]['symbol'],
		keywords: [...new Set(arr[i]["keywords"].split(' '))].join(' ')})
	}
}

anyFilter(data);





let container = document.querySelector(".container");




function emojicard(obj) {
  let card2 = document.createElement("div");
  let a = document.createElement("p");
  let b = document.createElement("p");
  let c = document.createElement("p");

  card2.prepend(a, b, c);
  a.textContent = obj.symbol;
  b.textContent = obj.title;
  c.textContent = obj.keywords;

  card2.setAttribute("class", "emoji_card");
  a.setAttribute("class", "emoji");
  b.setAttribute("class", "emoji_name");
  c.setAttribute("class", "emoji_keyworsds");

  container.append(card2);
}

newData.forEach(emojicard);





let input = document.querySelector('input');

input.addEventListener('input', search)

function search(e) {
	let value = e.target.value.toLowerCase().trim();
	let filterEmoji =  newData.filter((e) => e.title.includes(input.value) || e.keywords.includes(input.value))
	container.innerHTML = '';
	filterEmoji.forEach(emojicard)
}