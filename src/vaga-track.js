// VagaTrack V0.1 - Programa para procurar e comparar vagas de emprego com base em dados enviado pelo usuário. A primeira versão será mais simples, apresentando um tipo de MVP prático apenas utilizando a base de programação em JavaScript. A ideia é progredir o projeto conforme andamento dos estudos para futuras aplicações de DOM, API, Banco de Dados, dentre outros.

// O objeto avaiableJob define os parâmetros analisados em uma vaga para posterior comparação.

const availableJob = {

    // distinção entre os parâmetros considerando que o peso de cada um numa analise é diferente e determinante para saber se a vaga é ou não é boa para o usuário.

    //Informações Básicas
    companyName: "Vaga Mor",
    jobTitle: "",
    // Critérios essenciais
    jobType: "1",
    requiredEducation: "1",
    workModel: "4",
    requiredExperience: "2",
    jobLocation: "cachoeirinha",
    shiftType: "2",
    requiredSkills: ["js", "html"],
    // Crtitérios de Compatibilidade
    preferredSkills: ["sql", "api", "crud", "node", "opencv"],
    salaryRange: 957,

}

// o objeto candidateInfo define os parâmetros enviados pelo usuário para que sejam comparados com os parâmetros verificados no objeto availableJob.

const candidateInfo = {
    preferredJob: "",
    educationLevel: "",
    desiredWorkModel: "",
    experienceLevel: "",
    candidateLocations: [],
    preferredShift: "",
    candidateSkills: [],
    salaryExpectation: null,
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

const userSalary = Number(prompt("Qual sua pretensão salarial buscando um emprego?"));
candidateInfo.salaryExpectation = userSalary;

// Armazena o resultado das comparações realizadas em cada função

const resultsObtained = [];

function comparisonJobType (informedJobType, userPreferredJob) {

    if (informedJobType === null) {
        return {
            criterion: "Job Type",
            compatible: null,
            critical: true,
            comparable: false,
            message: "Dados não informados na descrisão da vaga",
        };
    }

    else {
        if (informedJobType === userPreferredJob) {
            return {
                criterion: "Job Type",
                compatible: true,
                critical: true,
                comparable: true,
                message: "O tipo de vaga é compatível com a procura do usuário.",
            }
        }
        else {
            return {
                criterion: "Job Type",
                compatible: false,
                critical: true,
                comparable: true,
                message: "O tipo de vaga não é compatível com a procura do usuário.",
            }
        }
    }
}

const jobTypeResult = comparisonJobType (availableJob.jobType, candidateInfo.preferredJob);

resultsObtained.push(jobTypeResult);

function comparisonRequiredEducation (jobNecessaryEducation, userEducationResponse) {

    if (jobNecessaryEducation === null) {
        return {
            criterion: "Education",
            compatible: null,
            critical: true,
            comparable: false,
            message: "Dados não informados na descrisão da vaga",
        };
    }

    else {
        if (jobNecessaryEducation === userEducationResponse) {
            return {
                criterion: "Education",
                compatible: true,
                critical: true,
                comparable: true,
                message: "O usuário cumpre o critério eleminatório de escolaridade.",
            };
        } 
    
        else {
            return {
                criterion: "Education",
                compatible: false,
                critical: true,
                comparable: true,
                message: "O usuário não cumpre o critério eleminatório de escolaridade.",
            };
        }
    }   
}

const educationResult = comparisonRequiredEducation (availableJob.requiredEducation, candidateInfo.educationLevel);

resultsObtained.push(educationResult);

function comparisonWorkModel (jobWorkModel, userModelResponse) {

    if (jobWorkModel === null) {
        return {
            criterion: "Work Model",
            compatible: null,
            critical: true,
            comparable: false,
            message: "Dados não informados na descrisão da vaga",
        };
    }

    else {
        if (jobWorkModel === userModelResponse) {
            return {
                criterion: "Work Model",
                compatible: true,
                critical: true,
                comparable: true,
                message: "O usuário cumpre o critério eleminatório de modalidade de trabalho.",
            };
        }
        else {
            return {
                criterion: "Work Model",
                compatible: false,
                critical: true,
                comparable: true,
                message: "O usuário não cumpre o critério eleminatório de modalidade de trabalho.",
            };
        }
    }
}

const workModelResult = comparisonWorkModel (availableJob.workModel, candidateInfo.desiredWorkModel);

resultsObtained.push(workModelResult);

function comparisonExperience (jobRequiredExperience, userExperienceLevel) {

    if (jobRequiredExperience === null) {
        return {
            criterion: "Experience",
            compatible: null,
            critical: true,
            comparable: false,
            message: "Dados não informados na descrisão da vaga",
        };
    }

    else {
        if (jobRequiredExperience === "1" && userExperienceLevel === "2") {
            return {
                criterion: "Experience",
                compatible: false,
                critical: true,
                comparable: true,
                message: "O usuário não possui a experiência necessária para a vaga.",
            };
        }
        else {
            return {
                criterion: "experience",
                compatible: true,
                critical: true,
                comparable: true,
                message: "O usuário possui a experiência necessária para a vaga ou a vaga não exige experiência.",
            };
        }
    }
}

const experienceResult = comparisonExperience (availableJob.requiredExperience, candidateInfo.experienceLevel);

resultsObtained.push(experienceResult);

function comparisonLocation (jobLocationInformed, userPossibleLocations) {

    if (jobLocationInformed === null) {
        return {
            criterion: "Location",
            compatible: null,
            critical: true,
            comparable: false,
            message: "Dados não informados na descrisão da vaga",
        };
    }

    else {
        for (let verifiedLocations = 0; verifiedLocations < userPossibleLocations.length; verifiedLocations++) {
            
            if (jobLocationInformed === userPossibleLocations[verifiedLocations])
                return {
                    criterion: "Location",
                    compatible: true,
                    critical: true,
                    comparable: true,
                    message: "A localização da vaga é acessível ao usuário.",
                };
            }

        return {
            criterion: "Location",
            compatible: false,
            critical: true,
            comparable: true,
            message: "A localização da vaga não é acessível ao usuário.",
        };
    }
}

const locationResult = comparisonLocation (availableJob.jobLocation, candidateInfo.candidateLocations);

resultsObtained.push(locationResult);

function comparisonShift (jobShiftType, userPreferredShift) {

    if (jobShiftType === null) {
        return {
            criterion: "Shift",
            compatible: null,
            critical: true,
            comparable: false,
            message: "Dados não informados na descrisão da vaga",
        };
    }

    else {
        if (jobShiftType === userPreferredShift) {
            return {
                criterion: "Shift",
                compatible: true,
                critical: true,
                comparable: true,
                message: "O turno da vaga é compatível com a necessidade do usuário.",
            }
        }
        else {
            return {
                criterion: "Shift",
                compatible: false,
                critical: true,
                comparable: true,
                message: "O turno da vaga não é compatível com a necessidade do usuário.",
            }
        }
    }
}

const shiftResult = comparisonShift (availableJob.shiftType, candidateInfo.preferredShift);

resultsObtained.push(shiftResult);

// Para cada skill exigida, procura entre todas as skilss do usuário. Se uma obrigatória não for encontrada, retorna false. Só retorna true após verificar todas.

function comparisonRequiredSkills (jobRequiredSkills, userSkills) {

    if (jobRequiredSkills === null) {
        return {
            criterion: "Required Skills",
            compatible: null,
            critical: true,
            comparable: false,
            message: "Dados não informados na descrisão da vaga",
        };
    }

    else {
        for (let verifiedJobSkills = 0; verifiedJobSkills < jobRequiredSkills.length; verifiedJobSkills++) {

            let skillFound = false;

            for (let verifiedUserSkills = 0; verifiedUserSkills < userSkills.length; verifiedUserSkills++) {

                if (jobRequiredSkills[verifiedJobSkills] === userSkills[verifiedUserSkills]) {
                skillFound = true;
                break;
                }
            }

            if (skillFound === false)
                return {
                criterion: "Required Skills",
                compatible: false,
                critical: true,
                comparable: true,
                message: "O usuário não possui todas as habilidades requeridas pela vaga.",
                };
            }
        
        return {
            criterion: "Required Skills",
            compatible: true,
            critical: true,
            comparable: true,
            message: "O usuário possui todas as habilidades requeridas pela vaga.",
        };
    }
}

const requiredSkillsResult = comparisonRequiredSkills (availableJob.requiredSkills, candidateInfo.candidateSkills);

resultsObtained.push(requiredSkillsResult);

function comparisonPreferredSkills (jobPreferredSkills, userSkills) {

    if (jobPreferredSkills === null) {
        return {
            criterion: "Location",
            compatible: null,
            critical: false,
            comparable: false,
            message: "Dados não informados na descrisão da vaga",
        };
    }

    else {

        let skillCount = 0;

        for (let verifiedJobSkills = 0; verifiedJobSkills < jobPreferredSkills.length; verifiedJobSkills++) {

            for (let verifiedUserSkills = 0; verifiedUserSkills < userSkills.length; verifiedUserSkills++) {

                if(jobPreferredSkills[verifiedJobSkills] === userSkills [verifiedUserSkills]) {
                    skillCount ++;
                    break;
                }
            }
        }

        let skillPercentage = (skillCount * 100) / jobPreferredSkills.length;

        return {
            criterion: "preferred skills",
            critical: false,
            matchedSkills: skillCount,
            totalSkills: jobPreferredSkills.length,
            percentage: skillPercentage + "%",
            message: "O usuário possui " + skillCount + " habilidades das " + jobPreferredSkills.length + " mencionadas como diferenciais na vaga",
        };
    }
}

const preferredSkillsResult = comparisonPreferredSkills (availableJob.preferredSkills, candidateInfo.candidateSkills);

resultsObtained.push(preferredSkillsResult);

function comparisonSalary (jobSalaryRange, userSalaryExpectation) {

    if (jobSalaryRange === null) {
        return {
            criterion: "Salary",
            compatible: null,
            critical: false,
            comparable: false,
            message: "Dados não informados na descrisão da vaga",
        };
    }

    else {
        let salaryDiferrence;
        let salaryDiferrencePercentage;

        if (jobSalaryRange > userSalaryExpectation) {
            salaryDiferrence = jobSalaryRange - userSalaryExpectation;
            salaryDiferrencePercentage = (salaryDiferrence * 100) / userSalaryExpectation;

            return {
            criterion: "Salary",
            critical: false,
            comparable: true,
            relation: "above",
            difference: "R$ " + salaryDiferrence + ".00",
            differencePercentage: salaryDiferrencePercentage + "%",
            message: "O salário é " + salaryDiferrencePercentage.toFixed(2) + "% maior do que a pretensão do usuário",
            };
        }

        else if (jobSalaryRange === userSalaryExpectation) {
            return {
            criterion: "Salary",
            critical: false,
            comparable: true,
            relation: "equal",
            message: "O salário oferecido é equivalente a pretensão do usuário",
            };
        }

        else {
            salaryDiferrence = userSalaryExpectation - jobSalaryRange;
        salaryDiferrencePercentage = (salaryDiferrence * 100) / userSalaryExpectation;

            return {
            criterion: "salary",
            ritical: false,
            comparable: true,
            relation: "below",
            difference: "R$ " + salaryDiferrence + ".00",
            differencePercentage: salaryDiferrencePercentage + "%",
            message: "O salário é " + salaryDiferrencePercentage.toFixed(2) + "% menor do que a pretensão do usuário",
            }
        }
    }
}

const salaryResult = comparisonSalary (availableJob.salaryRange, candidateInfo.salaryExpectation);

resultsObtained.push(salaryResult);

console.log(resultsObtained);

// ---------------------------------------

// O programa compara através de uma função cada um dos tópicos ex: requiredExperience vs experienceLevel.

/* Ele baseia sua tomada de decisão inicial a partir dos parâmetros eleminatórios, se falhar e um dos requisitos não for atendido, ele retorna incompatibilidade com a vaga. Se ele atender a todos os requisitos eliminatórios mas falhar nos critérios não eleminatórios ele retorna um positivo, com ressalvas a serem consideradas pelo proprio usuário. Por último, se tanto os requisitos eliminatórios estiverem corretos e os critérios não eleminatórios estiverem positivos em suma maioria, o sistema retornara fortemente a recomendação da vaga.*/