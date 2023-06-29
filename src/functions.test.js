import { timesTwo, order, sum, substract } from "./functions";

const menuItems = [
	{
		id: "1",
		name: "Tatted Up Turkey Burger",
		price: 19.5
	},
	{
		id: "2",
		name: "Lobster Lollipops",
		price: 16.5
	},
	{
		id: "3",
		name: "Motley Que Pulled Pork Sandwich",
		price: 21.5
	},
	{
		id: "4",
		name: "Trash Can Nachos",
		price: 19.5
	}
]

describe("Funkcje matematyczne", () => {
	test("Mnożenie przez 2", () => {
		expect(timesTwo(4)).toBe(8);
	});
	test("Dodawanie dwóch liczb", () => {
		expect(sum(4, 2)).toBe(6);
	});
	test("Odejmowanie dwóch liczb", () => {
		expect(substract(4, 2)).toBe(2);
	})
})



test("Utworzenie obiektu zamówienia", () => {
	const result = {
		orderItems: menuItems,
		total: 77
	};
	expect(order(menuItems)).toEqual(result);
})