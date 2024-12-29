import { HttpContext, Routes } from "@fehujs/http-server"
import { render } from "@fehujs/template-parser"


export const ROUTES: Routes = {
    "GET:/": {
        callback: async ({ response }: HttpContext) => {
            return response.setResponse({
                contentType: "text/html",
                body: render("./src/templates/index.html")
            })
        },
        description: "Default home page"
    }
}
