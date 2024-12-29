import { BaseSeeder, loadAndInstanciateSeeders } from "@fehujs/database"
import { exit } from "process"


const seeders = await loadAndInstanciateSeeders()

async function run() {
    for (const key of Object.keys(seeders))
        await BaseSeeder.runSeeder(key, seeders[key])
}

run()
    .then(() => exit(0))
    .catch(() => exit(1))
