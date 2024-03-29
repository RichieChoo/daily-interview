/**
 * @date {Tuesday, Nov 5th 2019}}
 * @author {RichieChoo}
 */

async function async1() {
	console.log(1);
	const result = await async2();
	console.log(3);
}

async function async2() {
	console.log(2);
}

Promise.resolve().then(() => {
	console.log(4);
});

setTimeout(() => {
	console.log(5);
});

async1();
console.log(6);
