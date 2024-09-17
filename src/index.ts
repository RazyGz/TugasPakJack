import Express from "express";
import MedicineRoute from "./router/medicineRouter"

const app = Express()
// Izinkan body membaca request ke JSON Format

app.use(Express.json())

app.use(`/medicine`, MedicineRoute)


const PORT = 1992
app.listen(PORT, () => { })
console.log(`Server Drugstore run on port ${PORT}`)