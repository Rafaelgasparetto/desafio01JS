/*DESAFIO 1
    DIAGINOSTICO MEDICO */ 

var nome = prompt ("Digite seu nome");

//  VALOR DO SEXO:
var sexo = prompt("qual é o teu sexo? Homem ou Mulher?");

        switch (sexo)
        {
            case 'Homem':
            case 'homem':
            case 'man':
            case 'Masculino':
            case 'masculino':
                sexo = 'Masculino';
                break;

                case "Mulher":
                case 'mulher':
                case 'woman':
                case 'Feminino':
                case 'feminino':
                    sexo = 'Feminino';
                break;
                
                    default:
                    sexo = "Indefinido";
                    console.log("Entre com seu sexo de nascença para fazer o calculo do IMC");
                    break;
        } 

        //       VALOR DA IDADE: 
                 var idade = parseInt (prompt ("Digite sua idade"));

//         VALOR DA CATEGORIA:
var categoria =""; 
    if(idade >= 1 && idade <= 12){
       categoria = "Infantil";

        }else if(idade >= 12 && idade <= 20){
        categoria = "Juvenil";
                        
            }else if(idade >= 21 && idade <= 65){
            categoria = "Adulto";

                }else if(idade > 65 && idade <= 122){
                categoria = "Idoso";

                    }else if(idade < 0 || idade > 130){ 
                     categoria = "Indefinida";
                    console.log("Idade invalida");

                        }else{
                        console.log("Entre com um valor Inteiro");
                        idade = 0;
                        categoria = "Indefinida";
                        }
                                                                  

//                      VALOR DA ALTURA:
var altura = parseFloat (prompt("Digite tua altura"));

 //                                     VALOR DO PESO:
                                        var peso = parseFloat (prompt("Digite seu peso"));

//  CALCULO DO IMC:  
    var imc = ((peso)/(altura*altura)).toFixed(2);
    var imcDesejavel= '';
    var risco ='';
    var recomendacao = '';
    
    if(imc < 20){
        imcDesejavel= 'IMC INFERIOR A 20!';
        risco = 'Muitas complicações de saúde como doenças pulmonares e cardiovasculares podem estar associadas ao baixo peso.';
        recomendacao = 'Inclua carboidratos simples em sua dieta, além de proteínas -indispensáveis para ganho de massa magra. Procure um profissional.';

        }else if( (imc >= 20.9) && (imc <= 24.9) ){
        imcDesejavel= 'Peso Normal!';
        risco = 'Seu peso está ideal para suas referências.';
        recomendacao ='Mantenha uma dieta saudável e faça seus exames periódicos.';

            }else if( (imc >= 25) && (imc <= 29.9) ){
            imcDesejavel= 'Execesso de Peso!';
            risco = 'Aumento de peso apresenta risco moderado para outras doenças crônicas e cardiovasculares';
            recomendacao ='Adote um tratamento baseado em dieta balanceada, exercício físico e medicação. A ajuda de um profissional pode ser interessante';

                }else if( (imc >= 30) && (imc <= 35) ){
                imcDesejavel= 'Obesidade!';
                risco = 'Quem tem obesidade vai estar mais exposto a doenças graves e ao risco de mortalidade.';
                recomendacao ='Adote uma dieta alimentar rigorosa, com o acompanhamento de um nutricionista e um médico especialista (endócrino).';

                    }else if(imc >= 35.9){
                    imcDesejavel= 'SUPER OBESIDADE!';
                    risco = 'O obeso mórbido vive menos, tem alto risco de mortalidade geral por diversas causas.';
                    recomendacao ='Procure com urgência o acompanhamento de um nutricionista para realizar reeducação alimentar, um psicólogo e um médico especialista (endócrino).';
    
                        }else{
                            imcDesejavel= 'Não foi possivel calcular o IMC';
                            imc = 0;
                            risco = 'Não foi possivel Calcular o IMC!';
                            recomendacao = 'Entre com valores Reais!';
                        }    
                        
                        
// CHAMANDO OS VALORES PARA O DIAGNOSTICO PREVIO:

console.log("Nome: "+nome);
console.log("Sexo: "+sexo);
console.log("Idade: "+idade);
console.log("Altura: "+altura);
console.log("Peso: "+peso);
console.log("Categoria: "+categoria);
console.log("IMC Desejavel: "+imcDesejavel);
console.log("Resultado do IMC: "+imc);
console.log("Riscos: "+risco);
console.log("Recomendação Inicial: "+recomendacao);




