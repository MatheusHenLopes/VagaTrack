// VagaTrack V0.1 - Programa para procurar e comparar vagas de emprego com base em dados enviado pelo usuário. A primeira versão será mais simples, apresentando um tipo de MVP prático apenas utilizando a base de programação em JavaScript. A ideia é progredir o projeto conforme andamento dos estudos para futuras aplicações de DOM, API, Banco de Dados, dentre outros.

// O objeto avaiableJob define os parâmetros analisados em uma vaga para posterior comparação.

const availableJob = {

    // distinção entre os parâmetros considerando que o peso de cada um numa analise é diferente e determinante para saber se a vaga é ou não é boa para o usuário.

    companyName: "",
    jobTitle: "",
    jobType: "",
    salaryRange: "",
    shiftType: "",
    preferredSkills: [],

    // Parte superior: critérios não eleminatórios
    // Parte inferior: critérios eliminatórios

    requiredEducation: "",
    workModel: "",
    requiredExperience: "",
    jobLocation: "",
    requiredSkills: [],
    
}

// o objeto candidateInfo define os parâmetros enviados pelo usuário para que sejam comparados com os parâmetros verificados no objeto availableJob.

const candidateInfo = {
    preferredJob: "",
    educationLevel: "",
    desiredWorkModel: "",
    experienceLevel: "",
    candidateLocations: [],
    salaryExpectation: "",
    preferredShift: "",
    candidateSkills: [],
}

// Declaração de variáveis para receber respostas do usuário e armazenar como parâmetros do objeto candidateInfo.

const userJob = prompt("Que tipo de vaga você está buscando?\n1 - Menor Aprendiz\n2 - Estágio\n3 - Júnior\n4 - Pleno\n5 - Sênior");
candidateInfo.preferredJob = userJob;

const userEducation = prompt("Qual seu nível atual de escolaridade?\n1 - Ensino Médio\n2 - Curso Técnico\n3 - Graduação");
candidateInfo.educationLevel = userEducation;

const userWorkModel = prompt("Diga o modelo de trabalho que está buscando:\n1 - Presencial\n2 - Remoto\n3 - Híbrido\n4 - Sem preferência");
candidateInfo.desiredWorkModel = userWorkModel;

const userExperience = prompt("Você possui algúm tipo de experiência na área?\n1 - Sim\n2 - Não");
candidateInfo.experienceLevel = userExperience;

for (let locationsEntered = 0; locationsEntered < 3; locationsEntered++) {

    candidateInfo.candidateLocations[locationsEntered] = prompt("Digite o nome da cidade " + (locationsEntered + 1) + " onde você pode trabalhar:").trim().toLowerCase();

}

const userSalary = prompt("Qual sua pretensão salarial buscando um emprego?");
candidateInfo.salaryExpectation = userSalary;

const userShift = prompt("Em qual turno você deseja trabalhar?\n1 - Parcial manhãs\n2 - Parcial tardes\n3 - Integral");
candidateInfo.preferredShift = userShift;

// Permite cadastrar até 10 habilidades e interromper com "fim".

for (let skillsEntered = 0; skillsEntered < 10; skillsEntered++) {

    const skills = prompt("Que tipo de habilidade ou tecnologia você domina? (Digite uma por vez ou digite fim para parar)").trim().toLowerCase();

    if (skills === "fim") {
        break
    }

    candidateInfo.candidateSkills[skillsEntered] = skills;
}

// ---------------------------------------

// O programa compara através de uma função cada um dos tópicos ex: requiredExperience vs experienceLevel.

// Ele baseia sua tomada de decisão inicial a partir dos parâmetros eleminatórios, se falhar e um dos requisitos não for atendido, ele retorna incompatibilidade com a vaga. Se ele atender a todos os requisitos eliminatórios mas falhar nos critérios não eleminatórios ele retorna um positivo, com ressalvas a serem consideradas pelo proprio usuário. Por último, se tanto os requisitos eliminatórios estiverem corretos e os critérios não eleminatórios estiverem positivos em suma maioria, o sistema retornara fortemente a recomendação da vaga.