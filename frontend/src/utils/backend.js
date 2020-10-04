import axios from "axios";

export const baseUrl = `https://cors-anywhere.herokuapp.com/http://fintavandy.herokuapp.com/`;
export const urlLogin = `${baseUrl}customer/`;
export const taskUrl =
	"https://cors-anywhere.herokuapp.com/https://17s5u775q5.execute-api.us-east-2.amazonaws.com/default/vandyHacks";

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
				localStorage.setItem("id", data.data.id);
				localStorage.setItem("email", data.data.email);
				localStorage.setItem("firstName", data.data.firstName);
				localStorage.setItem("lastName", data.data.lastName);
				localStorage.setItem("balance", data.data.balance);
				localStorage.setItem("items", data.data.items);
				localStorage.setItem("username", data.data.username);
			}
			return true;
		})
		.catch((e) => {
			return null;
		});
};

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
			return data.data;
		})
		.catch((e) => {
			return null;
		});
}

export function isLoggedIn() {
	return localStorage.getItem("id") != null;
}
