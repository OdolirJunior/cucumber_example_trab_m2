Feature: Is Hello World
    Verifica se o valor da string é igual a Hello World
    Scenario Outline: É Hello World
        Given is Hello World
        When I ask if is Hello World
        Then I should be told true
