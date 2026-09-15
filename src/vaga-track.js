/*==================================================
                VAGATRACK V0.1
          Sistema de análise de vagas
==================================================*/

// DEFINIÇÃO DOS PARÂMETROS ANALISADOS EM UMA VAGA PARA POSTERIOR COMPARAÇÃO 

const availableJobs = [

    // DISTINÇÃO ENTRE CADA PARÂMETRO PARA INTERPRETAÇÃO MAIS ACERTIVA

{
    //Informações Básicas
    companyName: "Hospital Unimed",
    jobTitle: "Aprendiz de Desenvolvimento de Software",
    // Critérios essenciais
    jobType: "1",
    requiredEducation: 1,
    workModel: "1",
    requiredExperience: "2",
    jobLocation: "novo hamburgo",
    shiftType: "2",
    requiredSkills: ["lógica", "html", "css", "algoritmos"],
    // Crtitérios de Compatibilidade
    salaryRange: null,
    preferredSkills: ["git", "js", "node"],
},
{
    //Informações Básicas
    companyName: "CWI",
    jobTitle: "Estagiário de QA (Quality Assurance)",
    // Critérios essenciais
    jobType: "2",
    requiredEducation: 2,
    workModel: "3",
    requiredExperience: "2",
    jobLocation: "são leopoldo",
    shiftType: null,
    requiredSkills: ["js", "html", "sql", "api", "node"],
    // Crtitérios de Compatibilidade
    salaryRange: 1300,
    preferredSkills: ["python", "opencv", "git", "mediapipe"],
},
{
    //Informações Básicas
    companyName: "BairesDev",
    jobTitle: "Desenvolvedor Front-end Júnior",
    // Critérios essenciais
    jobType: "3",
    requiredEducation: 3,
    workModel: "2",
    requiredExperience: "1",
    jobLocation: null,
    shiftType: "3",
    requiredSkills: ["angular", "html", "css", "js", "api"],
    // Crtitérios de Compatibilidade
    salaryRange: 3700,
    preferredSkills: ["react", "vue", "preact"],
},
{
    //Informações Básicas
    companyName: "Microsoft",
    jobTitle: "Engenheiro de Dados Pleno",
    // Critérios essenciais
    jobType: "4",
    requiredEducation: 3,
    workModel: "3",
    requiredExperience: "1",
    jobLocation: "porto alegre",
    shiftType: "3",
    requiredSkills: ["python", "sql", "spark", "airflow", "aws", "docker"],
    // Crtitérios de Compatibilidade
    salaryRange: 8400,
    preferredSkills: null,
},
{
    //Informações Básicas
    companyName: "Bradesco",
    jobTitle: "Tech Lead",
    // Critérios essenciais
    jobType: "5",
    requiredEducation: 3,
    workModel: null,
    requiredExperience: "1",
    jobLocation: "pelotas",
    shiftType: "3",
    requiredSkills: ["arquitetura", "microsserviços", "devops", "solid", "ci/cd"],
    // Crtitérios de Compatibilidade
    salaryRange: 17000,
    preferredSkills: ["aws", "ingles", "alemão", "espanhol"],
},
]

// DEFINIÇÃO DOS VALORES QUE SERÃO ENVIADOS PELO USUÁRIO PARA QUE SEJAM COMPARADOS COM OS PARÂMETROS VERIFICIADOS EM CADA VAGA NO OBJETO AVAIBLEJOBS.

const candidateInfo = {
    preferredJob: "",
    educationLevel: null,
    desiredWorkModel: "",
    experienceLevel: "",
    candidateLocations: [],
    preferredShift: "",
    candidateSkills: [],
    salaryExpectation: null,
}

// DECLARAÇÃO DE VARIÁVEIS PARA RECEBER AS INFORMAÇÕES DO USUÁRIO E ARMAZENAR COMO PARÂMETROS DO OBJETO CANDIDATEINFO.

const userJob = prompt("Que tipo de vaga você está buscando?\n1 - Menor Aprendiz\n2 - Estágio\n3 - Júnior\n4 - Pleno\n5 - Sênior");
candidateInfo.preferredJob = userJob;

const userEducation = Number(prompt("Qual seu nível atual de escolaridade?\n1 - Ensino Médio\n2 - Curso Técnico\n3 - Graduação"));
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

// PERMITE CADASTRAR ATÉ 10 HABILIDADES, É INTERROMPIDO SE O USUÁRIO DIGITAR *FIM*.

for (let skillsEntered = 0; skillsEntered < 10; skillsEntered++) {

    const skills = prompt("Que tipo de habilidade ou tecnologia você domina? (Digite uma por vez ou digite fim para parar)").trim().toLowerCase();

    if (skills === "fim") {
        break
    }

    candidateInfo.candidateSkills[skillsEntered] = skills;
}

const userSalary = Number(prompt("Qual sua pretensão salarial buscando um emprego?"));
candidateInfo.salaryExpectation = userSalary;

// ARRAY PRINCIPAL PARA ARMAZENAMENTO DOS RESULTADOS GERADOS EM CADA FUNÇÃO POSTERIOR

const jobAnalysis = [];

// FUNÇÕES UTILIZADAS PARA COMPARAÇÃO DOS PARÂMETROS DE CADA VAGA

function comparisonJobType (informedJobType, userPreferredJob) {

    if (informedJobType === null) {
        return {
            criterion: "Job Type",
            compatible: null,
            critical: true,
            comparable: false,
            message: "⚪ Tipo de vaga não informado",
        };
    }

    else {
        if (informedJobType === userPreferredJob) {
            return {
                criterion: "Job Type",
                compatible: true,
                critical: true,
                comparable: true,
                message: "🟢 Tipo de vaga compatível",
            }
        }
        else {
            return {
                criterion: "Job Type",
                compatible: false,
                critical: true,
                comparable: true,
                message: "🔴 Tipo de vaga incompatível",
            }
        }
    }
}

function comparisonRequiredEducation (jobNecessaryEducation, userEducationResponse) {

    if (jobNecessaryEducation === null) {
        return {
            criterion: "Education",
            compatible: null,
            critical: true,
            comparable: false,
            message: "⚪ Escolaridade mínima não informada",
        };
    }

    else {
        if (jobNecessaryEducation <= userEducationResponse) {
            return {
                criterion: "Education",
                compatible: true,
                critical: true,
                comparable: true,
                message: "🟢 Escolaridade mínima compatível",
            };
        } 
    
        else {
            return {
                criterion: "Education",
                compatible: false,
                critical: true,
                comparable: true,
                message: "🔴 Escolaridade mínima incompatível ",
            };
        }
    }   
}

function comparisonWorkModel (jobWorkModel, userModelResponse) {

    if (jobWorkModel === null) {
        return {
            criterion: "Work Model",
            compatible: null,
            critical: true,
            comparable: false,
            message: "⚪ Modalidade de trabalho não informada ",
        };
    }

    else {
        if (jobWorkModel === userModelResponse || userModelResponse === "4") {
            return {
                criterion: "Work Model",
                compatible: true,
                critical: true,
                comparable: true,
                message: "🟢 Modalidade de trabalho compatível",
            };
        }
        
        else {
            return {
                criterion: "Work Model",
                compatible: false,
                critical: true,
                comparable: true,
                message: "🔴 Modalidade de trabalho incompatível",
            };
        }
    }
}

function comparisonExperience (jobRequiredExperience, userExperienceLevel) {

    if (jobRequiredExperience === null) {
        return {
            criterion: "Experience",
            compatible: null,
            critical: true,
            comparable: false,
            message: "⚪ Experiência mínima não informada",
        };
    }

    else {
        if (jobRequiredExperience === "1" && userExperienceLevel === "2") {
            return {
                criterion: "Experience",
                compatible: false,
                critical: true,
                comparable: true,
                message: "🔴 Experiência mínima incompatível ",
            };
        }
        else {
            return {
                criterion: "Experience",
                compatible: true,
                critical: true,
                comparable: true,
                message: "🟢 Experiência mínima compatível ",
            };
        }
    }
}

function comparisonLocation (jobLocationInformed, userPossibleLocations) {

    if (jobLocationInformed === null) {
        return {
            criterion: "Location",
            compatible: null,
            critical: true,
            comparable: false,
            message: "⚪ Localização não informada",
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
                    message: "🟢 Localização compatível",
                };
            }

        return {
            criterion: "Location",
            compatible: false,
            critical: true,
            comparable: true,
            message: "🔴 Localização incompatível",
        };
    }
}

function comparisonShift (jobShiftType, userPreferredShift) {

    if (jobShiftType === null) {
        return {
            criterion: "Shift",
            compatible: null,
            critical: true,
            comparable: false,
            message: "⚪ Turno não informado",
        };
    }

    else {
        if (jobShiftType === userPreferredShift) {
            return {
                criterion: "Shift",
                compatible: true,
                critical: true,
                comparable: true,
                message: "🟢 Turno compatível",
            }
        }
        else {
            return {
                criterion: "Shift",
                compatible: false,
                critical: true,
                comparable: true,
                message: "🔴 Turno Incompatível",
            }
        }
    }
}

// PARA CADA SKILL EXIGIDA, PROCURA ENTRE TODAS AS SKILLS DO USUÁRIO. SE UMA OBRIGATÓRIA NÃO FOR ENCONTRADA, RETORNA FALSE.
// SÓ RETORNA TRUE APÓS VERIFICAR TODAS

function comparisonRequiredSkills (jobRequiredSkills, userSkills) {

    if (jobRequiredSkills === null) {
        return {
            criterion: "Required Skills",
            compatible: null,
            critical: true,
            comparable: false,
            message: "⚪ Habilidades necessárias não informadas",
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
                message: "🔴 Habilidades necessárias incompatíveis",
                };
            }
        
        return {
            criterion: "Required Skills",
            compatible: true,
            critical: true,
            comparable: true,
            message: "🟢 Habilidades necessárias compatíveis ",
        };
    }
}

function comparisonSalary (jobSalaryRange, userSalaryExpectation) {

    if (jobSalaryRange === null) {
        return {
            criterion: "Salary",
            compatible: null,
            critical: false,
            comparable: false,
            message: "⚪ Salário não informado",
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
            message: "🟢 Salário compatível (" + salaryDiferrencePercentage.toFixed(2) + "% maior do que a pretensão)",
            };
        }

        else if (jobSalaryRange === userSalaryExpectation) {
            return {
            criterion: "Salary",
            critical: false,
            comparable: true,
            relation: "equal",
            message: "🟢 Salário compatível (equivalente a pretensão)",
            };
        }

        else {
            salaryDiferrence = userSalaryExpectation - jobSalaryRange;
            salaryDiferrencePercentage = (salaryDiferrence * 100) / userSalaryExpectation;

            return {
            criterion: "Salary",
            critical: false,
            comparable: true,
            relation: "below",
            difference: "R$ " + salaryDiferrence + ".00",
            differencePercentage: salaryDiferrencePercentage + "%",
            message: "🔴 Salário incompatível (" + salaryDiferrencePercentage.toFixed(2) + "% menor do que a pretensão)",
            }
        }
    }
}

function comparisonPreferredSkills (jobPreferredSkills, userSkills) {

    if (jobPreferredSkills === null) {
        return {
        criterion: "Preferred Skills",
        critical: false,
        comparable: false,
        matchedSkills: null,
        totalSkills: null,
        percentage: null,
        message: "⚪ Habilidades desejáveis não informadas"
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
            criterion: "Preferred Skills", 
            critical: false,
            comparable: true,
            matchedSkills: skillCount,
            totalSkills: jobPreferredSkills.length,
            percentage: skillPercentage + "%",
            message: "🎯 O usuário possui " + skillCount + " habilidades das " + jobPreferredSkills.length + " mencionadas como diferenciais na vaga",
        };
    }
}

// DIRECIONAMENTO DOS RESULTADOS PARA O ARRAY PRINCIPAL

for(let jobIndex = 0; jobIndex < availableJobs.length; jobIndex++) {

    const currentJob = availableJobs[jobIndex];
    
    const resultsObtained = []

    const jobTypeResult = comparisonJobType (currentJob.jobType, candidateInfo.preferredJob);
    resultsObtained.push(jobTypeResult);

    const requireEducationResult = comparisonRequiredEducation (currentJob.requiredEducation, candidateInfo.educationLevel);
    resultsObtained.push(requireEducationResult);

    const workModelResult = comparisonWorkModel (currentJob.workModel, candidateInfo.desiredWorkModel);
    resultsObtained.push(workModelResult);

    const experienceLevelResult = comparisonExperience (currentJob.requiredExperience, candidateInfo.experienceLevel);
    resultsObtained.push(experienceLevelResult);

    const jobLocationResult = comparisonLocation (currentJob.jobLocation, candidateInfo.candidateLocations);
    resultsObtained.push(jobLocationResult);

    const shiftTypeResult = comparisonShift (currentJob.shiftType, candidateInfo.preferredShift);
    resultsObtained.push(shiftTypeResult);

    const requiredSkillsResult = comparisonRequiredSkills (currentJob.requiredSkills, candidateInfo.candidateSkills);
    resultsObtained.push(requiredSkillsResult);

    const salaryExpectationResult = comparisonSalary (currentJob.salaryRange, candidateInfo.salaryExpectation);
    resultsObtained.push(salaryExpectationResult);

    const preferredSkillsResult = comparisonPreferredSkills (currentJob.preferredSkills, candidateInfo.candidateSkills);
    resultsObtained.push(preferredSkillsResult)

    jobAnalysis.push ({
        companyName: currentJob.companyName,
        jobTitle: currentJob.jobTitle,
        results: resultsObtained,
    })
}

// APRESENTAÇÃO FINAL DOS RESULTADOS

console.log(jobAnalysis);

const presentationInit = jobAnalysis.map((job) => {

    const resultsPresentation = job.results.map((result) => {
        return result.message;
    });

    return "Empresa: " + job.companyName + "\nVaga: " + job.jobTitle + "\n\n" + resultsPresentation.join("\n");
});

const finalPresentation = presentationInit.join("\n\n----------------------------------------\n\n");

console.log(finalPresentation);