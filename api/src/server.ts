import { app } from "./app";

app.listen(3333, () => console.log("Server is running!"))  // cria o servidor

/**
 * GET - Buscar
 * POST - Salvar
 * PUT - Alterar
 * DELETE - Deletar
 * PATCH - Alteração especifica
 */

 // http://localhost:3333/users
//  app.get("/", (request, response) => {
//     //  return response.send("Hello World - NLW 4") // Enviar mensagens
//      return response.json({message: "Hello Worrld - NLW 4"}) // Enviar mensagens em formato json
// });

// 1° param - Rota(Recurso API)
// 2° param - Request, Response
// app.post("/", (rrequest, response) => {
//     // Recebeu os dados para salvar
//     return response.json({mensage: "Os dados foram salvos com sucesso!"});
// });
