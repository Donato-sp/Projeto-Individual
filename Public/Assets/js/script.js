function home() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

var contador = 0;

function testar() {
    contador += 100;
    console.log('5s depois: ', contador);
    div_loading.style.display = 'none';
}

setTimeout(testar, 2000)
console.log('carregou: ', contador);

var ferraris = [
    {
        'nome': 'Ferrari LaFerrari',
        'descricao': 'Um dos modelos mais potentes e exclusivos da Ferrari, equipada com um motor V12 híbrido que combina desempenho e eficiência.',
        'curiosidade': 'A LaFerrari é o primeiro carro híbrido produzido pela Ferrari, e apenas 499 unidades foram fabricadas.',
        'imagem': './assets/img/FerrariLaFerrari.jpg'
    },
    {
        'nome': 'Ferrari F40',
        'descricao': 'Clássico dos anos 80, a F40 foi construída para comemorar os 40 anos da Ferrari e é conhecida pelo seu visual agressivo e desempenho bruto.',
        'curiosidade': 'Foi o último modelo aprovado pessoalmente por Enzo Ferrari antes de sua morte em 1988.',
        'imagem': './assets/img/Ferrari F40.jpg'
    },
    {
        'nome': 'Ferrari 458 Italia',
        'descricao': 'Uma das Ferraris mais equilibradas, a 458 combina design aerodinâmico com um motor V8 naturalmente aspirado e dirigibilidade refinada.',
        'curiosidade': 'O ronco do motor da 458 foi afinado em parceria com engenheiros da Ferrari que também trabalhavam em carros de Fórmula 1.',
        'imagem': './assets/img/F458ITALIA.JPG'
    }
];

function atualizarCarrossel() {
    var indiceAleatorio = Math.floor(Math.random() * ferraris.length);
    var ferrariAleatoria = ferraris[indiceAleatorio];

    document.getElementById('carro-img').src = ferrariAleatoria.imagem;
    document.getElementById('carro-nome').textContent = ferrariAleatoria.nome;
    document.getElementById('carro-desc').textContent = ferrariAleatoria.descricao;
    document.getElementById('carro-curiosidade').textContent = ferrariAleatoria.curiosidade;
}

setInterval(atualizarCarrossel, 5000);

