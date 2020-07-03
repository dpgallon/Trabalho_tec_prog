# Trabalho de Técnicas de Programação PPCA - Unisinos
**Professor Cristiano Both**

**Aluna: Débora Gallon**

## Cadastro de amostras 
Uma das etapas mais importantes realizadas no campo pelo geólogo é a coleta de amostras de rocha e sedimentos. Etapa esta que pode anular um deposito mineral como pode identificar um possível alvo para estudo e exploração. Desta forma, o trabalho realizado em campo conta com equipes, que muitas vezes se revezam em campanhas de campo, no entanto o banco de dados alimentado é o mesmo. 
Mesmo contando com tantas tecnologias a disposição no século XXI, a geologia é uma ciencia que esta aos pouco se modernizando e englobando novas ferramentas. O principal problema relatado corre durante o preenchimento manual no banco de dados, que surge como erros de digitação, especialmente nas coordenadas. Outros problemas também podem ser destacados quando se trata de coordenadas, existem diversos sistemas cartográficos, muitas vezes troca de informações entre projetos, geólogos, e até mesmo empresas é comum de ocorrer confusões. 

## Objetivo 
Este trabalho tem como finalidade auxiliar o geocientista no momento em que é realizado o preenchimento do banco de dados, como muuitas vezes esses erros de digitação só são observados quando é gerado um mapa de amostragens, o intuito é ter essa vizualização instantanea e caso ocorra algum erro na digitação ele seja observado no primeiro momento. 



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
