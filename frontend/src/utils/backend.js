import axios from "axios";

export const baseUrl = `https://cors-anywhere.herokuapp.com/https://fintavandy.herokuapp.com/`;
export const urlLogin = `${baseUrl}customer/`;
export const taskUrl =
	"https://cors-anywhere.herokuapp.com/https://17s5u775q5.execute-api.us-east-2.amazonaws.com/default/vandyHacks";

export const updateBalance = async (userName, amount) => {
	const config = {
		method: "put",
		url: `${baseUrl}/customer/${userName}/updateBalance/${amount}`,
		headers: {
			"Content-Type": "application/json",
		},
	};
	console.log(`${userName} is getting ${amount} `);
	console.log(config.url);

	return axios(config)
		.then((data) => {
			let newBalance =
				parseInt(localStorage.getItem("balance")) + parseInt(amount);
			localStorage.setItem("balance", newBalance);
			console.log(data);
			window.location.reload();

			return true;
		})
		.catch((e) => {
			return false;
		});
};

export const postLogin = async (userName, password) => {
	const config = {
		method: "get",
		url: `${urlLogin}${userName}`,
		headers: {
			"Content-Type": "application/json",
		},
	};
	return axios(config)
		.then((data) => {
			if (data.status === 200) {
				const customer = {
					id: data.data.id,
					email: data.data.email,
					firstName: data.data.firstName,
					lastName: data.data.lastName,
					balance: data.data.balance,
					items: data.data.items,
					username: data.data.username,
				};
				setLocalStorage(customer);
			}
			return true;
		})
		.catch((e) => {
			return null;
		});
};

function setLocalStorage(customer) {
	localStorage.setItem("id", customer.id);
	localStorage.setItem("email", customer.email);
	localStorage.setItem("firstName", customer.firstName);
	localStorage.setItem("lastName", customer.lastName);
	localStorage.setItem("balance", customer.balance);
	localStorage.setItem("items", customer.items);
	localStorage.setItem("username", customer.username);
}

export function getCustomerInfo() {
	if (localStorage.getItem("id")) {
		let id = localStorage.getItem("id");
		let email = localStorage.getItem("email");
		let firstName = localStorage.getItem("firstName");
		let lastName = localStorage.getItem("lastName");
		let balance = localStorage.getItem("balance");
		let items = localStorage.getItem("items");
		let username = localStorage.getItem("username");
		const customer = {
			id: id,
			email: email,
			firstName: firstName,
			lastName: lastName,
			balance: balance,
			items: items,
			username: username,
		};
		return customer;
	} else return null;
}

export function getTransactions() {
	const config = {
		method: "get",
		url: `http://api.reimaginebanking.com/accounts/5f78b531f1bac107157e192e/purchases?key=7bdccafff961f37e0847de674d6f88be`,
		headers: {
			"Content-Type": "application/json",
		},
	};
	return axios(config)
		.then((data) => {
			console.log(data[0]);
			return data;
		})
		.catch((e) => {
			return e;
		});
}

export function getTasks() {
	const config = {
		method: "get",
		url: `${taskUrl}`,
		headers: {
			"Content-Type": "application/json",
		},
	};
	return axios(config)
		.then((data) => {
			let cleanerData = filterData(data);
			return cleanerData;
		})
		.catch((e) => {
			return null;
		});
}

export function filterData(data) {
	let stringData = JSON.stringify(data.data);
	let slicedData = stringData.slice(2, parseInt(stringData.length) - 3);
	let replacedData = slicedData.replace('"', "");
	let splitData = replacedData.split(',"');

	let newArray = [];
	splitData.forEach((data) => {
		newArray.push(String(data));
	});
	console.log(newArray);
	return newArray;
}

export function isLoggedIn() {
	return localStorage.getItem("id") != null;
}
