# compassApiAwsDeploy

### Feito no intuito de demosntrar o passo a passo para o deploy da aplicação na AWS.

#### Primeira parte

De inicio foi nescessário criar uma VPC(Virtual Private Cloud), em seguida foi feito um SG(Security Group) para liberar acesso a aplicação da API, de inicio houveram problemas para a criação do SG onde não ocorria a conxwão da instancia, o problema foi resolvido no momento de criação da instancia EC2, este é o terceiro passo, onde no momento da ceiação foi selecionado para a criação automatica do SG apartir das configurações da instância, desse modo foi necessário apenas colocar as métricas do SG passado passado no tutorial disponiblizado.
