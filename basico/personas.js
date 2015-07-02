db.personas.insert([
	{
		nombre: "Juan",
		ordenadores: [
			{
				nombre: "Ordenador #1",
				serial: "123",
				precio: 100
			}
		]
	},
	{
		nombre: "Pedro",
		ordenadores: [
			{
				nombre: "Ordenador #1",
				serial: "123",
				precio: 100
			},
			{
				nombre: "Ordenador #2",
				serial: "456",
				preci: 400
			}
		]
	},
	{
		nombre: "María",
		ordenadores: [
			{
				nombre: "Ordenador #3",
				serial: "789",
				precio: 300
			},
			{
				nombre: "Ordenador #2",
				serial: "456",
				precio: 200
			}
		]
	}
]);

// Personas que tienen el Ordenador #2
db.personas.find({ "ordenadores.nombre": /.*#2$/i }, { _id: 0, nombre: 1 })

// Serial de los ordenadores de Juan
db.personas.find({ "nombre": "Juan" }, { _id: 0, "ordenadores.serial": 1 })

// Serial del Ordenador #2
db.personas.find({ "ordenadores.nombre": "Ordenador #2" }, { _id: 0, "ordenadores.serial": 1 })

// Personas que tienen ordenadores que cuestan >= 200
db.personas.find({ 
	$or: [ 
		{ "ordenadores.precio": { $gte: 200 } },
		{ "ordenadores.preci": { $gte: 200 } },
	]
})


















