export const MATRIZ = {
  "N": 31,
  "crit": {
    "ALTA": 21,
    "MÉDIA": 7,
    "CRÍTICA": 3
  },
  "stat": {
    "APLICADA": 25,
    "PENDENTE": 6
  },
  "cap": [
    [
      "Cap. 4 – Boas Práticas",
      6
    ],
    [
      "Cap. 1 – Introdução",
      3
    ],
    [
      "Cap. 2 – Conceitos-Chave",
      3
    ],
    [
      "Cap. 3 – Passo a Passo",
      3
    ],
    [
      "Cap. 5 – Erros Comuns",
      3
    ],
    [
      "Listas Provisórias",
      3
    ],
    [
      "Cap. 15 – Implicações Práticas",
      3
    ],
    [
      "Referências",
      3
    ],
    [
      "Cap. 2.4 – Perfis Operacionais",
      2
    ],
    [
      "Cap. 7 – Delimitação Conceitual",
      2
    ]
  ],
  "tipo": [
    [
      "Causalidade indevida",
      6
    ],
    [
      "Interpretação metodológica",
      6
    ],
    [
      "Erro editorial",
      6
    ],
    [
      "Ambiguidade de citação",
      5
    ],
    [
      "Outros",
      3
    ],
    [
      "Falta de fonte primária",
      2
    ],
    [
      "Evidência desatualizada",
      2
    ],
    [
      "Prescrição não universal",
      1
    ]
  ],
  "refs": [
    [
      "LOCKIE et al., 2026a",
      5
    ],
    [
      "MAUPIN et al., 2019",
      5
    ],
    [
      "LAN et al., 2025",
      3
    ],
    [
      "VIRAMONTES, 2025",
      2
    ],
    [
      "MARINS et al., 2025",
      2
    ],
    [
      "SUTTON et al., 2025",
      2
    ],
    [
      "LOCKIE et al., 2022",
      2
    ],
    [
      "IMPELLIZZERI et al., 2020",
      2
    ],
    [
      "HALSON, 2014",
      2
    ],
    [
      "FOSTER et al., 2001",
      2
    ]
  ],
  "CAP_ORDER": [
    "Cap. 4 – Boas Práticas",
    "Cap. 1 – Introdução",
    "Cap. 2 – Conceitos-Chave",
    "Cap. 3 – Passo a Passo",
    "Cap. 5 – Erros Comuns",
    "Listas Provisórias",
    "Cap. 15 – Implicações Práticas",
    "Referências",
    "Cap. 2.4 – Perfis Operacionais",
    "Cap. 7 – Delimitação Conceitual"
  ],
  "CRIT_ORDER": [
    "CRÍTICA",
    "ALTA",
    "MÉDIA"
  ],
  "heat": [
    [
      2,
      4,
      0
    ],
    [
      0,
      2,
      1
    ],
    [
      0,
      2,
      1
    ],
    [
      0,
      2,
      1
    ],
    [
      0,
      3,
      0
    ],
    [
      0,
      0,
      3
    ],
    [
      0,
      3,
      0
    ],
    [
      1,
      2,
      0
    ],
    [
      0,
      1,
      1
    ],
    [
      0,
      2,
      0
    ]
  ],
  "cs": {
    "CRÍTICA": {
      "APLICADA": 3,
      "PENDENTE": 0
    },
    "ALTA": {
      "APLICADA": 18,
      "PENDENTE": 3
    },
    "MÉDIA": {
      "APLICADA": 4,
      "PENDENTE": 3
    }
  },
  "top": [
    {
      "id": "C012",
      "cap": "Cap. 4 – Boas Práticas",
      "trecho": "'A ACWR é uma ferramenta eficaz para prevenção de lesões em agentes táticos'",
      "tipo": "ACWR tem limitações metodológicas documentadas; eficácia em policiais não está demonstrada",
      "correcao": "Substituir por: 'A ACWR pode ser utilizada como indicador auxiliar de monitoramento, com importantes limitações (IMPELLIZZERI et al., 2020; MAUPIN et al., 2019)'",
      "crit": "CRÍTICA",
      "status": "APLICADA"
    },
    {
      "id": "C015",
      "cap": "Cap. 4 – Boas Práticas",
      "trecho": "'HRV elevado sempre indica boa recuperação e prontidão para treino'",
      "tipo": "HRV elevado pode indicar tanto supercompensação quanto início de overtraining parassimpático",
      "correcao": "Substituir por: 'HRV deve ser interpretado longitudinalmente com médias rolantes de 7 dias — valores pontuais isolados podem ser ambíguos (PLEWS et al., 2013; HALSON, 2014)'",
      "crit": "CRÍTICA",
      "status": "APLICADA"
    },
    {
      "id": "C030",
      "cap": "Referências",
      "trecho": "'LOCKIE, R. G. et al. (2026)' — entrada ÚNICA na bibliografia",
      "tipo": "Dois artigos DISTINTOS com mesmo primeiro autor e ano: 2026a (autoeficácia) e 2026b (atividade física)",
      "correcao": "Criar DUAS entradas: 2026a DOI ...5358 e 2026b DOI ...5244",
      "crit": "CRÍTICA",
      "status": "APLICADA"
    },
    {
      "id": "C001",
      "cap": "Cap. 1 – Introdução",
      "trecho": "'o treinamento físico resultará em melhorias significativas no desempenho operacional'",
      "tipo": "Causalidade sem suporte em RCT",
      "correcao": "Substituir por: 'o treinamento físico pode contribuir para melhorias no desempenho operacional'",
      "crit": "ALTA",
      "status": "APLICADA"
    },
    {
      "id": "C002",
      "cap": "Cap. 1 – Introdução",
      "trecho": "'comprova que agentes bem condicionados cometem menos erros táticos'",
      "tipo": "Afirmação causal sem evidência citada",
      "correcao": "Remover ou substituir por 'há indicadores associativos de que...' com citação LAN 2025",
      "crit": "ALTA",
      "status": "APLICADA"
    },
    {
      "id": "C004",
      "cap": "Cap. 2 – Conceitos-Chave",
      "trecho": "'LOCKIE (2026) demonstra que autoeficácia e saúde mental melhoram com o condicionamento'",
      "tipo": "Artigo 2026a é sobre autoeficácia; 2026b é sobre atividade física/aptidão — não saúde mental",
      "correcao": "Separar: autoeficácia → LOCKIE et al., 2026a; saúde mental → LAN et al., 2025",
      "crit": "ALTA",
      "status": "APLICADA"
    },
    {
      "id": "C005",
      "cap": "Cap. 2 – Conceitos-Chave",
      "trecho": "'exercício físico reduz estresse, ansiedade e depressão em policiais'",
      "tipo": "Revisões mostram associação, não causalidade; evidência direta em policiais limitada",
      "correcao": "Substituir por: 'há plausibilidade biológica e alguns indicadores associativos, mas evidência direta em policiais brasileiros é limitada (LAN et al., 2025)'",
      "crit": "ALTA",
      "status": "APLICADA"
    },
    {
      "id": "C007",
      "cap": "Cap. 2.4 – Perfis Operacionais",
      "trecho": "'os perfis de aptidão física de policiais brasileiros demonstram que...'",
      "tipo": "Dado sobre policiais brasileiros sem referência verificável",
      "correcao": "Usar dados de MARINS et al. (2025) com caveata: 'dados de policiais federais — generalização para guardas municipais requer cautela'",
      "crit": "ALTA",
      "status": "APLICADA"
    },
    {
      "id": "C009",
      "cap": "Cap. 3 – Passo a Passo",
      "trecho": "'o VO2máx é o principal preditor de desempenho operacional'",
      "tipo": "Literatura atual mostra que JTST/OPAT predizem melhor que VO2máx isolado",
      "correcao": "Adicionar: 'No entanto, testes de simulação de tarefa apresentam maior validade preditiva (SUTTON et al., 2025; LOCKIE et al., 2022)'",
      "crit": "ALTA",
      "status": "APLICADA"
    },
    {
      "id": "C011",
      "cap": "Cap. 3 – Passo a Passo",
      "trecho": "'LOCKIE (2026) valida estes testes para agentes de segurança'",
      "tipo": "Verificar qual artigo LOCKIE 2026 é citado — 2026a (autoeficácia) ou 2026b (atividade física)?",
      "correcao": "Se aptidão ocupacional: LOCKIE et al., 2026b; se autoeficácia: 2026a; para validação de testes: LOCKIE et al., 2022",
      "crit": "ALTA",
      "status": "APLICADA"
    }
  ]
};
