import dados from "./dados/alunos.json" with { type: "json" };

for(let i = 0; i < 1; i++){
    let nome = dados[1].nome;
    let turma = dados[1].turma; 

  console.log(`${nome} - ${turma}`);
} 