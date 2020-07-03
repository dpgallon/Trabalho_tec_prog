# Trabalho de Técnicas de Programação PPCA - Unisinos
**Professor Cristiano Both**

**Aluna: Débora Gallon**

## Cadastro de amostras 

 Uma das etapas mais importantes realizadas no trabalho de campo pelo geocientista é a coleta de amostras de rocha e sedimentos. Durante o reconhecimento ode uma área, a coleta de amostras pode anular um deposito mineral como pode identificar um possível alvo para estudo e exploração, e desta forma é uma importante ferramenta. Este trabalho demanda prolongadas campanhas e muitas vezes as equipes precisam se revezar, e assim, havendo uma alternância no amostrador, porem o banco o banco de dados alimentado com as informações de coletas é o mesmo.

 De certa forma a geologia é uma ciência nova comparada as outras existentes e ela ainda conta com ferramentas antigas e em muitas vezes a resistência de alguns geocientistas às novas tecnologias, desta forma, está aos poucos se modernizando e englobando métodos mais modernos de obtenção de dados.

 O principal problema relatado em campanhas de amostragem, ocorre durante o preenchimento manual no banco de dados, onde erros de digitação são comuns, especialmente nas coordenadas com por exemplo: o sinal pode ser esquecido e poderá haver a troca de hemisférios, números podem ser invertidos  (53 por 43) e amostras sendo locadas em meio a uma cidade ou até mesmo em no meio do oceano onde não seria passível de amostragem, inversão da latitude e longitude... entre outros. 
Geralmente quem coleta os dados também faz o preenchimento do banco de dados, e com o auxílio do Cadastro de Amostras este profissional poderia fazer a checkagem e um aumento na confiabilidade destes dados, pois normalmente estes erros só são observados quando são gerados mapas de amostragem, processo este posterior, gerado após as análises geoquímicas serem recebidas dos laboratórios.  
 

## Objetivo 
Este trabalho tem como finalidade auxiliar o geocientista no momento em que é realizado o preenchimento do banco de dados, como muitas vezes esses erros de digitação só são observados quando é gerado um mapa de amostragens, o intuito é ter essa vizualização instantanea e caso ocorra algum erro na digitação ele seja observado no primeiro momento e corrigido. 



## Arquitetura: Micro serviços 
![Diagrama micro serviços](https://user-images.githubusercontent.com/66315345/86483774-229a4380-bd2b-11ea-9a19-0d46cf123b6c.png)
![image](https://user-images.githubusercontent.com/66315345/86488660-284a5600-bd38-11ea-8e43-6c81cc0da5b3.png)



## Instruções para uso:
1. Faça o download dos os arquivos deste projeto e insira em um diretório de interesse;
2. Em um terminal Shell, dentro do diretório criado para este projeto, digite: 

```docker-compose up ``` 

3. Abra o navegador e acesse: 
<a href="http://localhost:8080/">localhost</a> 
4. Visão página web: 
![image](https://user-images.githubusercontent.com/66315345/86476032-21154f00-bd1c-11ea-803f-f3a38b78ddfe.png)
5. Entrada de dados para o cadastro: 
 - Responsável pela coleta;
 - Ponto;
 - Descrição;
 - Latitude;
 - Longitude;
 - Elevação;
6. Clicar no botão **Incluir**
7. Observar a inserção do marcador no mapa, se estiver de acordo, continuar com a entrada de dados no cadastro.

**Visão página web com dados preenchidos:**
![image](https://user-images.githubusercontent.com/66315345/86489607-3c438700-bd3b-11ea-8fd3-fd4abf8eec3d.png)

8. Se algum dado não estiver correto, pode ser alterado ou excluído. 

**Visão página com erro de coordenada (Caiu no meio do oceâno!):**
![image](https://user-images.githubusercontent.com/66315345/86490363-83cb1280-bd3d-11ea-9636-af8cbe54fe90.png)

9. Ao finalizar a inserção dos dados, fazer download em .xlsx

![image](https://github.com/dpgallon/Trabalho_tec_prog/issues/6#issue-650711254)

10. Abrir no diretório de download o arquivo ''Amostras.xlsx

**Arquivo em Excel com campos do banco de dados:**
![image](https://user-images.githubusercontent.com/66315345/86490022-68abd300-bd3c-11ea-970b-28fd872a9164.png)


11. Para finalizar, voltar no terminal Shell, inserir o seguinte comando para parar o container: 

``Ctrl + C``

12. Para derrubar o servidor, inserir o seguinte comando: 

``docker-compose down``

13. Para sair: 

``exit``

## Futuros trabalhos 
- Inserir o nome do ponto no marcador no mapa;
- Opção de upload da tabela preenchida e geração automática dos marcadores;
- Zoom ao inserir o marcador; 
