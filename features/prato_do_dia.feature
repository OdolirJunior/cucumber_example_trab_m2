            #language:pt

            Funcionalidade: Prato do dia!
            Queremos saber qual o prato do dia na capital paulista

            Esquema do Cenário: Descubra o prato do dia


            #Given
            Dado que hoje é "<dia>"

            #When
            Quando eu pergunto qual é o prato do dia

            #Then
            Então a resposta deve ser "<resposta>"

            Exemplos:
            | dia           | resposta          |
            | segunda-feira | Virado a Paulista |
            | terça-feira   | Dobradinha        |
            | quarta-feira  | Feijoada          |
            | quinta-feira  | Macarrão          |
            | sexta-feira   | Filé de Peixe     |