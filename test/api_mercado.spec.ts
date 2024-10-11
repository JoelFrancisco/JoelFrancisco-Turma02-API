import pactum from 'pactum';
import { StatusCodes } from 'http-status-codes';
import { faker } from '@faker-js/faker';
import { SimpleReporter } from '../simple-reporter';

describe('Mercado', () => {
  const p = pactum;
  const rep = SimpleReporter;
  const baseUrl = 'https://api-desafio-qa.onrender.com';
  let mercadoId;

  const novoMercadoSchema = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
      "message": {
        "type": "string"
      },
      "novoMercado": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer"
          },
          "nome": {
            "type": "string"
          },
          "cnpj": {
            "type": "integer"
          },
          "endereco": {
            "type": "string"
          },
          "produtos": {
            "type": "object",
            "properties": {
              "hortifruit": {
                "type": "array",
                "items": [
                  {
                    "type": "object",
                    "properties": {
                      "frutas": {
                        "type": "array",
                        "items": {}
                      }
                    },
                    "required": [
                      "frutas"
                    ]
                  },
                  {
                    "type": "object",
                    "properties": {
                      "legumes": {
                        "type": "array",
                        "items": {}
                      }
                    },
                    "required": [
                      "legumes"
                    ]
                  }
                ]
              },
              "padaria": {
                "type": "array",
                "items": [
                  {
                    "type": "object",
                    "properties": {
                      "doces": {
                        "type": "array",
                        "items": {}
                      }
                    },
                    "required": [
                      "doces"
                    ]
                  },
                  {
                    "type": "object",
                    "properties": {
                      "salgados": {
                        "type": "array",
                        "items": {}
                      }
                    },
                    "required": [
                      "salgados"
                    ]
                  }
                ]
              },
              "acougue": {
                "type": "array",
                "items": [
                  {
                    "type": "object",
                    "properties": {
                      "bovinos": {
                        "type": "array",
                        "items": {}
                      }
                    },
                    "required": [
                      "bovinos"
                    ]
                  },
                  {
                    "type": "object",
                    "properties": {
                      "suinos": {
                        "type": "array",
                        "items": {}
                      }
                    },
                    "required": [
                      "suinos"
                    ]
                  },
                  {
                    "type": "object",
                    "properties": {
                      "aves": {
                        "type": "array",
                        "items": {}
                      }
                    },
                    "required": [
                      "aves"
                    ]
                  }
                ]
              },
              "peixaria": {
                "type": "array",
                "items": [
                  {
                    "type": "object",
                    "properties": {
                      "peixes": {
                        "type": "array",
                        "items": {}
                      }
                    },
                    "required": [
                      "peixes"
                    ]
                  },
                  {
                    "type": "object",
                    "properties": {
                      "frutos_do_mar": {
                        "type": "array",
                        "items": {}
                      }
                    },
                    "required": [
                      "frutos_do_mar"
                    ]
                  }
                ]
              },
              "frios": {
                "type": "array",
                "items": [
                  {
                    "type": "object",
                    "properties": {
                      "queijos": {
                        "type": "array",
                        "items": {}
                      }
                    },
                    "required": [
                      "queijos"
                    ]
                  },
                  {
                    "type": "object",
                    "properties": {
                      "embutidos": {
                        "type": "array",
                        "items": {}
                      }
                    },
                    "required": [
                      "embutidos"
                    ]
                  },
                  {
                    "type": "object",
                    "properties": {
                      "outros": {
                        "type": "array",
                        "items": {}
                      }
                    },
                    "required": [
                      "outros"
                    ]
                  }
                ]
              },
              "mercearia": {
                "type": "array",
                "items": [
                  {
                    "type": "object",
                    "properties": {
                      "graos_cereais": {
                        "type": "array",
                        "items": {}
                      }
                    },
                    "required": [
                      "graos_cereais"
                    ]
                  },
                  {
                    "type": "object",
                    "properties": {
                      "massas": {
                        "type": "array",
                        "items": {}
                      }
                    },
                    "required": [
                      "massas"
                    ]
                  },
                  {
                    "type": "object",
                    "properties": {
                      "farinhas": {
                        "type": "array",
                        "items": {}
                      }
                    },
                    "required": [
                      "farinhas"
                    ]
                  },
                  {
                    "type": "object",
                    "properties": {
                      "conservados_enlatados": {
                        "type": "array",
                        "items": {}
                      }
                    },
                    "required": [
                      "conservados_enlatados"
                    ]
                  },
                  {
                    "type": "object",
                    "properties": {
                      "oleos": {
                        "type": "array",
                        "items": {}
                      }
                    },
                    "required": [
                      "oleos"
                    ]
                  },
                  {
                    "type": "object",
                    "properties": {
                      "temperos_condimentos": {
                        "type": "array",
                        "items": {}
                      }
                    },
                    "required": [
                      "temperos_condimentos"
                    ]
                  }
                ]
              },
              "bebidas": {
                "type": "array",
                "items": [
                  {
                    "type": "object",
                    "properties": {
                      "com_alcool": {
                        "type": "array",
                        "items": {}
                      }
                    },
                    "required": [
                      "com_alcool"
                    ]
                  },
                  {
                    "type": "object",
                    "properties": {
                      "sem_alcool": {
                        "type": "array",
                        "items": {}
                      }
                    },
                    "required": [
                      "sem_alcool"
                    ]
                  }
                ]
              },
              "higienelimpeza": {
                "type": "array",
                "items": [
                  {
                    "type": "object",
                    "properties": {
                      "higiene": {
                        "type": "array",
                        "items": {}
                      }
                    },
                    "required": [
                      "higiene"
                    ]
                  },
                  {
                    "type": "object",
                    "properties": {
                      "limpeza": {
                        "type": "array",
                        "items": {}
                      }
                    },
                    "required": [
                      "limpeza"
                    ]
                  }
                ]
              }
            },
            "required": [
              "hortifruit",
              "padaria",
              "acougue",
              "peixaria",
              "frios",
              "mercearia",
              "bebidas",
              "higienelimpeza"
            ]
          }
        },
        "required": [
          "id",
          "nome",
          "cnpj",
          "endereco",
          "produtos"
        ]
      }
    },
    "required": [
      "message",
      "novoMercado"
    ]
  } 

  p.request.setDefaultTimeout(90000);

  beforeAll(() => p.reporter.add(rep));
  afterAll(() => p.reporter.end());

  beforeEach(async () => {
      mercadoId = await p
        .spec()
        .post(`${baseUrl}/mercado`)
        .withJson({
          nome: faker.company.name(),
          endereco: faker.location.streetAddress(),
          cnpj: faker.number.int({ min: 10000000000000, max: 99999999999999 })
        })
        .expectStatus(StatusCodes.CREATED)
        .returns("novoMercado.id");
  })

  it('Deve criar mercado', async () => {
    mercadoId = await p
      .spec()
      .post(`${baseUrl}/mercado`)
      .withJson({
        nome: faker.company.name(),
        endereco: faker.location.streetAddress(),
        cnpj: faker.number.int({ min: 10000000000000, max: 99999999999999 })
      })
      .expectStatus(StatusCodes.CREATED)
      .expectJsonSchema(novoMercadoSchema)
      .returns("novoMercado.id");
  });

  it("Não deve criar mercado pois cnpj é menor que 14 digitos", async () => {
    await p
      .spec()
      .post(`${baseUrl}/mercado`)
      .withJson({
        nome: faker.company.name(),
        endereco: faker.location.streetAddress(),
        cnpj: faker.number.int({ min: 1000000000000, max: 9999999999999 })
      })
      .expectStatus(StatusCodes.BAD_REQUEST)
      .expectBodyContains("CNPJ deve ter 14 dígitos")
  })

  it("Não deve criar mercado pois o nome é obrigatório", async () => {
    await p
      .spec()
      .post(`${baseUrl}/mercado`)
      .withJson({
        endereco: faker.location.streetAddress(),
        cnpj: faker.number.int({ min: 10000000000000, max: 99999999999999 })
      })
      .expectStatus(StatusCodes.BAD_REQUEST)
      .expectBodyContains("Nome é obrigatório")
  })

  it("Não deve criar mercado pois o endereco é obrigatório", async () => {
    await p
      .spec()
      .post(`${baseUrl}/mercado`)
      .withJson({
        nome: faker.company.name(),
        cnpj: faker.number.int({ min: 10000000000000, max: 99999999999999 })
      })
      .expectStatus(StatusCodes.BAD_REQUEST)
      .expectBodyContains("Endereço é obrigatório")
  })

  it("Não deve criar mercado pois o cnpj é obrigatório", async () => {
    await p
      .spec()
      .post(`${baseUrl}/mercado`)
      .withJson({
        nome: faker.company.name(),
        endereco: faker.location.streetAddress(),
      })
      .expectStatus(StatusCodes.BAD_REQUEST)
      .expectBodyContains("CNPJ é obrigatório")
  })

  it("Não deve criar mercado pois o registro já existe", async () => {
    const nome = faker.company.name();
    const endereco = faker.location.streetAddress();
    const cnpj = faker.number.int({ min: 10000000000000, max: 99999999999999 });

    await p
      .spec()
      .post(`${baseUrl}/mercado`)
      .withJson({
        nome,
        endereco,
        cnpj
      })
      .expectStatus(StatusCodes.CREATED)

    await p
      .spec()
      .post(`${baseUrl}/mercado`)
      .withJson({
        nome,
        endereco,
        cnpj
      })
      .expectStatus(StatusCodes.BAD_REQUEST)
      .expectBodyContains(`O nome ${nome} já existe na lista de Mercados.`);
  })

  it('Deve buscar o mercado', async () => {
    await p
      .spec()
      .get(`${baseUrl}/mercado/${mercadoId}`)
      .expectStatus(StatusCodes.OK)
      .expectJsonSchema({
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "cnpj": {
            "type": "string"
          },
          "endereco": {
            "type": "string"
          },
          "id": {
            "type": "integer"
          },
          "nome": {
            "type": "string"
          }
        },
        "required": [
          "cnpj",
          "endereco",
          "id",
          "nome"
        ]
      });
  })

  it('Deve alterar o mercado', async () => {
    await p
      .spec()
      .put(`${baseUrl}/mercado/${mercadoId}`)
      .withJson({
        nome: faker.company.name(),
        endereco: faker.location.streetAddress(),
        cnpj: faker.number.int({ min: 10000000000000, max: 99999999999999 })
      })
      .expectStatus(StatusCodes.OK)
      .expectJsonSchema({
        "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "message": {
            "type": "string"
          },
          "updatedMercado": {
            "type": "object",
            "properties": {
              "cnpj": {
                "type": "string"
              },
              "endereco": {
                "type": "string"
              },
              "id": {
                "type": "integer"
              },
              "nome": {
                "type": "string"
              }
            },
            "required": [
              "cnpj",
              "endereco",
              "id",
              "nome"
            ]
          }
        },
        "required": [
          "message",
          "updatedMercado"
        ]
      });
  })

  it('Deve deletar o mercado', async () => {
    await p
      .spec()
      .get(`${baseUrl}/mercado`)
      .expectStatus(StatusCodes.OK)
      .expectJsonSchema({
          "$schema": "http://json-schema.org/draft-04/schema#",
          "type": "object",
          "properties": {
            "message": {
              "type": "string"
            }
          },
          "required": [
            "message"
          ]
      });
  })
});
