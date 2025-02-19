const questoes = [
    {
        id: 1,
        banca: "COMUN",
        ano: 2022,
        disciplina: "mat",
        conteudo: "álgebra",
        topico: "expressões",
        dificuldade: "easy",
        enunciado: `
            <p>O valor numérico da expressão:<br><br> ax + a² – a²x + ax² – 2x³ + 3a³ <br><br> para a = 2 e x = 1, é:</p>
        `,
        alternativas: ["A) 12", "B) 19", "C) 20", "D) 23", "E) 26"],
        respostaCorreta: "E"
    },
    {
        id: 2,
        banca: "COMUN",
        ano: 2022,
        disciplina: "mat",
        conteudo: "álgebra",
        topico: "expressões",
        dificuldade: "easy",
        enunciado: `
            <p>Durante a resolução de exercícios sobre expressões algébricas, o professor pediu para que os alunos realizassem a simplificação da expressão: <br><br>8(3 – 5x) + 4(3x – 6)<br><br>Se a simplificação for feita  matematicamente, o polinômio encontrado será:</p>
        `,
        alternativas: ["A) 28x + 24", "B) -12", "C) -14x + 12", "D) -28x", "E) 52x + 48"],
        respostaCorreta: "D"
    },
    {
        id: 3,
        banca: "ENEM",
        ano: 2023,
        disciplina: "mat",
        conteudo: "álgebra",
        topico: "expressões",
        dificuldade: "easy",
        enunciado: `
            <p>A proprietária de uma confecção pretende liquidar as camisas que possui em estoque, por meio de uma promoção na qual fará a venda de lotes com iguais quantidades de camisas. Para a 1ª semana, pretende anunciar a venda de cada lote de camisas por R$ 720,00. Na 2ª semana, para acelerar as vendas, planeja anunciar a venda de lotes com 3 unidades a mais do que os lotes vendidos na primeira semana, ainda por R$ 720,00 cada lote, e de forma que o preço unitário de cada peça seja R$ 20,00 mais baixo do que o valor que teria sido cobrado por peça na 1ª semana de promoção.
            <br>
            <br>
            Quantas camisas deverão conter os lotes que serão colocados à venda na 1ª semana para que seja possível praticar essa promoção?</p>
        `,
        alternativas: ["A) 9", "B) 12", "C) 24", "D) 33", "E) 105"],
        respostaCorreta: "A"
    },
    {
        id: 4,
        banca: "ENEM",
        ano: 2023,
        disciplina: "mat",
        conteudo: "álgebra",
        topico: "expressões",
        dificuldade: "easy",
        enunciado: `
            <p> Estudantes de psicologia experimental estão analisando um modelo matemático que foi desenvolvido a partir de um experimento com pombos. Nesse experimento, um alimento considerado como uma recompensa reforçadora era fornecido em quantidades (Q) para as aves, com a possibilidade de atraso no tempo de entrega.
        <br>
        <br>
        O modelo matemático que relaciona os valores reforçadores V1 e V2 de duas recompensas em função de suas respectivas quantidades Q1 e Q2 e de seus respectivos tempos de atraso T1 e T2 na disponibilização de cada uma delas é 
        <br>
            <img src="https://qcon-assets-production.s3.amazonaws.com/images/provas/114100/Captura_de%20tela%202024-07-30%20015439.png" />
            <br>
            <br>
        Ao analisarem o caso em que a quantidade Q1 é o dobro da quantidade Q2, cinco estudantes fizeram as seguintes afirmações sobre em que condição o valor V1 será maior que o valor V2 :
            <br>
            <br>
        • estudante 1: sempre, pois Q1 é o dobro de Q2 ;
         <br>
        • estudante 2: apenas quando a razão entre T2 e T1 for maior que 0,5;
         <br>
        • estudante 3: apenas quando a razão entre T2 e T1 for menor que 0,5;
         <br>
        • estudante 4: apenas quando T1 for igual a T2 ;
         <br>
        • estudante 5: apenas quando a razão entre T2 e T1 for maior que 0,5 e menor que 1.
         <br>
            <br>
        Qual estudante fez a afirmação correta?</p>
        `,
        alternativas: ["A) 1", "B)  2", "C)  3", "D)  4", "E)  5"],
        respostaCorreta: "B"
    },

    {
        id: 5,
        banca: "ENEM",
        ano: 2023,
        disciplina: "mat",
        conteudo: "lógica",
        topico: "problemas",
        dificuldade: "easy",
        enunciado: `
            <p>Para concretar a laje de sua residência, uma pessoa contratou uma construtora. Tal empresa informa que o preço y do concreto bombeado é composto de duas partes: uma fixa, chamada de taxa de bombeamento, e uma variável, que depende do volume x de concreto utilizado. Sabe-se que a taxa de bombeamento custa R$ 500,00 e que o metro cúbico do concreto bombeado é de R$ 250,00.
<br><br>
A expressão que representa o preço y em função do volume x, em metro cúbico, é:</p>
        `,
        alternativas: ["A) y = 250x  ", "B) y = 500x", "C) y = 750x", "D) y = 250x + 500", "E) y = 500x + 250"],
        respostaCorreta: "D"
    },
    {
        id: 6,
        banca: "ENEM",
        ano: 2022,
        disciplina: "mat",
        conteudo: "lógica",
        topico: "problemas",
        dificuldade: "easy",
        enunciado: `
            <p>Uma loja que vende tintas tem uma máquina que efetua misturas de variadas cores para obter diferentes tonalidades. Um cliente havia comprado 7 litros de tinta de uma tonalidade, proveniente da mistura das cores verde e branco, na proporção de 5 para 2, respectivamente. Tendo sido insuficiente a quantidade de tinta comprada, o cliente retorna à loja para comprar mais 3,5 litros da mesma mistura de tintas, com a mesma tonalidade que havia comprado anteriormente.<br><br>
A quantidade de tinta verde, em litro, que o funcionário dessa loja deverá empregar na mistura com a tinta branca para conseguir a mesma tonalidade obtida na primeira compra é:</p>
        `,
        alternativas: ["A) 1.4", "B) 1.5", "C) 1.7", "D) 2.3", "E) 2.5"],
        respostaCorreta: "E"
    },
    {
        id: 7,
        banca: "ENEM",
        ano: 2023,
        disciplina: "mat",
        conteudo: "álgebra",
        topico: "progressões",
        dificuldade: "easy",
        enunciado: `
            <p>O gerente de uma fábrica pretende comparar a evolução das vendas de dois produtos similares (I e II). Para isso, passou a verificar o número de unidades vendidas de cada um desses produtos em cada mês. Os resultados dessa verificação, para os meses de abril a junho, são apresentados na tabela.<br><br>
            <img src="https://qcon-assets-production.s3.amazonaws.com/images/provas/101194/Captura_de%20Tela%20%283498%29.png" />
            <br>
            <br>
            O gerente estava decidido a cessar a produção do produto II no mês seguinte àquele em que as vendas do produto I superassem as do produto II.
Suponha que a variação na quantidade de unidades vendidas dos produtos I e II se manteve, mês a mês, como no período representado na tabela.
Em qual mês o produto II parou de ser produzido?</p>
    `,
        alternativas: ["A) junho", "B) julho", "C) Agosto", "D) Setembnro", "E) Outubro"],
        respostaCorreta: "D"
    },
    {
        id: 8,
        banca: "ENEM",
        ano: 2022,
        disciplina: "mat",
        conteudo: "lógica",
        topico: "problemas",
        dificuldade: "easy",
        enunciado: `
            <p>Black Friday é uma tradição norte-americana que consiste numa queda de preços de uma grande variedade de produtos disponíveis para venda na última sexta-feira do mês de novembro. No Brasil, em muitas lojas, essa prática se estende por todo esse mês. Para esse período, o gerente de uma loja de produtos eletrônicos que tem 5 vendedores estabelece uma meta de vendas de computadores para um total mínimo de 605 unidades. Ele considera que a média de vendas de computadores dos 5 vendedores juntos neste ano se manterá igual à dos últimos 5 anos, conforme apresentada no gráfico. Considere que a participação de cada vendedor na obtenção da meta seja igual.
            <br>
            <br> 
            <img src="https://qcon-assets-production.s3.amazonaws.com/images/provas/86199/8c27774c13e20ed11d1a.png"/>
            <br>
            <br>
Para que a meta da loja seja atingida, o gerente deverá estipular, para cada vendedor, um aumento na média de vendas de, no mínimo, quantas unidades?</p>
        `,
        alternativas: ["A) 150  ", "B) 121", "C) 91", "D) 35", "E) 30"],
        respostaCorreta: "E"
    },
    {
        id: 9,
        banca: "COMUN",
        ano: 2025,
        disciplina: "fisica",
        conteudo: "vetores",
        topico: "grandezas",
        dificuldade: "easy",
        enunciado: `
            <p>Uma grandeza física escalar fica corretamente
definida quando dela nós conhecemos:</p>
        `,
        alternativas: ["A) valor numérico e sentido.", "B) Direção e sentido.", "C) valor, desvio e sentido.", "D) valor numérico e unidade.", "E) desvio, direção, sentido."],
        respostaCorreta: "D"
    },
    {
        id: 10,
        banca: "COMUN",
        ano: 2025,
        disciplina: "mat",
        conteudo: "álgebra",
        topico: "expressões",
        dificuldade: "easy",
        enunciado: `
            <p>Dadas as expressões algébricas A: 2x + 3y + 4 e B: 5x – 3y, então o valor de A + B será:</p>
        `,
        alternativas: ["A) 11xy", "B) 7x + y + 4", "C) 7x + 4", "D) 5x – 4", "E) 7x – y"],
        respostaCorreta: "C"
    },
    {
        id: 11,
        banca: "ENEM",
        ano: 2021,
        disciplina: "mat",
        conteudo: "lógica",
        topico: "problemas",
        dificuldade: "easy",
        enunciado: `
            <p>A substituição da ração ocorrerá se a média da distribuição das massas dos coelhos da amostra, em quilograma, for superior a:</p>
        `,
        alternativas: ["A) 5,0", "B) 9,5", "C) 10,0", "D) 10,5", "E) 15,0"],
        respostaCorreta: "E"
    },
    {
        id: 13,
        banca: "ITA",
        ano: 2018,
        disciplina: "mat",
        conteudo: "lógica",
        topico: "problemas",
        dificuldade: "hard",
        enunciado: `
            <p>Quantos pares de números inteiros positivos (A,B)
 existem cujo mínimo múltiplo comum é 126⋅103
 ?  Para efeito de contagem, considerar (A,B)≡(B,A)</p>
        `,
        alternativas: ["A) 5,0", "B) 9,5", "C) 10,0", "D) 10,5", "E) 15,0"],
        respostaCorreta: "E"
    },
    {
        id: 14,
        banca: "ITA",
        ano: 2018,
        disciplina: "mat",
        conteudo: "combinatória",
        topico: "problemas",
        dificuldade: "medium",
        enunciado: `
            <p>Sobre duas retas paralelas r
 e s
 são tomados 13 pontos, m
 pontos em r
 e n
 pontos em s
, sendo m
 > n
. Com os pontos são formados todos os triângulos e quadriláteros convexos possíveis. Sabe - se que o quociente entre o números de quadriláteros e o número de triângulos é 15/11. Então os valores de n
 e m
 são, respectivamente: </p>
        `,
        alternativas: ["A) 2 e 11", "B) 3 e 10", "C) 4 e 9", "D) 5 e 8", "E) 6 e 7"],
        respostaCorreta: "E"
    },
    {
        id: 15,
        banca: "ITA",
        ano: 2018,
        disciplina: "mat",
        conteudo: "combinatória",
        topico: "binômio",
        dificuldade: "medium",
        enunciado: `
            <p>Sejam a
 e b
 números inteiros positivos. Se a
 e b
 são, nessa ordem, termos consecutivos de uma progressão geométrica de razão 12
 e o termo independente de (ax − b/&radic;x)&sup1;&sup2;
 é igual a 7920, então a
 + b
 é</p>
        `,
        alternativas: ["A) 2 e 11", "B) 3 e 10", "C) 4 e 9", "D) 5 e 8", "E) 6 e 7"],
        respostaCorreta: "E"
    },
    {
        id: 16,
        banca: "ITA",
        ano: 2018,
        disciplina: "mat",
        conteudo: "matrizes",
        topico: "inversas",
        dificuldade: "medium",
        enunciado: `
            <p>Sejam <i>A</i> e <i>B</i> matrizes quadradas <i>n×n</i> tais que <i>A+B=A&bull;B</i> e <i>In</i> a matriz identidade  <i>n×n</i>. Das afirmações: <br><br>
            I. <i>In−B</i> é inversível;<br>
            II. <i>In−A</i> é inversível;<br>
            III. <i>A&bull;B=B&bull;A</i>.
            <br>
            <br>
            é (são) verdadeira(s):
            </p>
        `,
        alternativas: ["A) Somente I.", "B) Somente II.", "C) Somente III.", "D) Somente I e II.", "E) Todas"],
        respostaCorreta: "E"
    },
    {
        id: 17,
        banca: "ITA",
        ano: 2018,
        disciplina: "mat",
        conteudo: "matrizes",
        topico: "determinantes",
        dificuldade: "medium",
        enunciado: `
            <p>Sejam x1, …, x5 e y1, …, y5 números reais arbitrários e A = (a<sub>ij</sub>) uma matriz 5 x 5 definida por a<sub>ij</sub> = x<sub>i</sub> + y<sub>j</sub> , 1 ≤ i, j ≤ 5. Se r é a característica da matriz A, então o maior valor possível de r é:
            </p>
        `,
        alternativas: ["A) 1.", "B) 2.", "C) 3.", "D) 4.", "E) 5"],
        respostaCorreta: "B"
    },
    {
        id: 18,
        banca: "ITA",
        ano: 2018,
        disciplina: "mat",
        conteudo: "matrizes",
        topico: "determinantes",
        dificuldade: "medium",
        enunciado: `
           <p>As raízes do polinômio 1 + z + z<sup>2</sup>&nbsp;+ z<sup>3</sup>&nbsp;+ z<sup>4</sup>&nbsp;+ z<sup>5</sup>&nbsp;+ z<sup>6</sup>&nbsp;+ z<sup>7</sup>, quando representadas no plano complexo, formam os vértices de um polígono convexo cuja área é</p>
        `,
        alternativas: ["A) <math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mfrac><mrow><msqrt><mn>2</mn></msqrt><mo>+</mo><mn>1</mn></mrow><mn>2</mn></mfrac></math>", "B) <math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mfrac><mrow><msqrt><mn>2</mn></msqrt><mo>+</mo><mn>1</mn></mrow><mn>2</mn></mfrac></math>", "C) <math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><msqrt><mn>2</mn></msqrt></math>", "D) <math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mfrac><mrow><mn>3</mn><msqrt><mn>2</mn></msqrt><mo>+</mo><mn>1</mn></mrow><mn>2</mn></mfrac></math>", "E) <math xmlns=&quot;http://www.w3.org/1998/Math/MathML&quot;><mn>3</mn><msqrt><mn>2</mn></msqrt></math>"],
        respostaCorreta: "D"
    },
    // Adicione mais questões aqui
];