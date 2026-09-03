// VagaTrack V0.1 - Programa para procurar e comparar vagas de emprego com base em dados enviado pelo usuário. A primeira versão será mais simples, apresentando um tipo de MVP prático apenas utilizando a base de programação em JavaScript. A ideia é progredir o projeto conforme andamento dos estudos para futuras aplicações de DOM, API, Banco de Dados, dentre outros.

// O objeto avaiableJob define os parâmetros analisados em uma vaga para posterior comparação.

const availableJob = {

    // distinção os parâmetros considerando que o peso de cada um numa analise é diferente e determinante para saber se a vaga é ou não é boa para o usuário.

    companyName: "",
    jobTitle: "",
    salaryRange: "",
    shiftType: "",
    preferredSkills: "",

    // Parte superior: critérios não eleminatórios
    // Parte inferior: critérios eliminatórios

    requiredEducation: "",
    workModel: "",
    requiredExperience: "",
    jobLocation: "",
    requiredSkills: "",
    
}

// o objeto candidateInfo define os parâmetro analisados enviados pelo usuário para que sejam comparados dentro ou ou fora da mostra científica.

const candidateInfo = {
    preferredJob: "",
    educationLevel: "",
    desiredWorkModel: "",
    experiencieLevel: "",
    candidateLocations: "",
    salaryExpectation: "",
    preferredShift: "",
    candidateSkills: "",
}

// ---------------------------------------

// O programa compara através de uma função cada um dos tópicos ex: RequiredExperience vs experienceLevel.

// Ele baseia sua tomada de decisão inicial a partir dos parâmetros eleminatórios, se falhar e um dos requisitos não for atendido, ele retorna incompatibilidade com a vaga. Se ele atender a todos os requisitos eliminatórios mas falhar nos critérios não eleminatórios ele retorna um positivo, com ressalvas a serem consideradas pelo proprio usuário. Por último, se tanto os requisitos eliminatórios estiverem corretos e os critérios não eleminatórios estiverem positivos em suma maioria, o sistema retornara fortemente a recomendação da vaga.