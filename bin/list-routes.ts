import { ROUTES } from "../src/app/routes"


let routesToDisplay: Record<string, Record<string,string>> = {}

for (const endpoint of Object.keys(ROUTES)) {
    const description = ROUTES[endpoint].description ? ROUTES[endpoint].description.slice(0, 64) : "none"
    let middlewares: string = ""

    if (ROUTES[endpoint].middlewares) {
        for (const m of ROUTES[endpoint].middlewares) {
            middlewares += `${m.constructor.name},`
        }
        middlewares = middlewares.slice(0, -1)
    }
    routesToDisplay[endpoint.split(":")[1]] = {
        method: endpoint.split(":")[0],
        description,
        middlewares: middlewares !== "" ? middlewares : "none"
    }
}

console.table(routesToDisplay, ["method", "description", "middlewares"])
