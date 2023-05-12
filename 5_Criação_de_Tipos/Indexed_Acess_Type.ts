type Truck = { km: number, kg: number, description: string }

type Km = Truck['km']

const newTruck: Truck = {
    km: 1000,
    kg: 5000,
    description: "Caminhão para pouca carga"
}

function showKm(km: Km) {
    console.log(`O veículo tem a km de: ${km}`)
}

showKm(newTruck.km)