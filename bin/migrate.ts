import { BaseMigration, loadAndInstanciateMigrations } from "@fehujs/database"
import { exit } from "process"

import { AddUserMigration, AddAuthTokenMigration } from "@fehujs/auth"


const migrations: Record<string, BaseMigration> = {
    ...(await loadAndInstanciateMigrations()),
    "add_user": new AddUserMigration(),
    "add_auth_token": new AddAuthTokenMigration()
}

async function run() {
    for (const key of Object.keys(migrations))
        await BaseMigration.runMigration(key, migrations[key])
}

run()
    .then(() => exit(0))
    .catch((err) => {
        console.error(err)
        exit(1)
    })
