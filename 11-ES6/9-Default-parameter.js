function test(param1, param2){
    if(param2 === 'padrao'){

    }
}
test('valor');

function test2(param1, param2 = 'padrao', param3 = 'outrovalor'){
    if(param2 === 'padrao'){
        console.log('padrao -> param2');
    }
}

console.log(test2(0,'padrao','0'));

function test3(param1 = 1, param2 = 'padrao', param3 = 'outrovalor') { 
    if(param2 ==='padrao'){
        console.log('padram 2');
    }
}
test3();

function funcao(param1, isAlgo = true){
    if(param1 === 20){
        console.log('OK!');
    }else{
        console.log('Não ok!');
    }
}

funcao(23, false);