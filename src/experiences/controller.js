export default [
    '$scope',
    function ($scope) {
        $scope.experiences = [
            {
                position: 'Estagiário em Desenvolvimento Web',
                company: 'Banco Modal',
                from: {
                    year: 2017,
                    month: 'junho'
                },
                to: {
                    year: 2017,
                    month: 'dezembro'
                },
                description: 'Desenvolvi projetos web em C# (Entity, WCF, Web API), SQL (SQL Server), PHP (Wordpress), HTML (Pug), CSS (Bootstrap) e Javascript (AngularJS, Gulp, Webpack).'
            },
            {
                position: 'Bolsista de Iniciação Científica',
                company: 'CEFET/RJ',
                from: {
                    year: 2017,
                    month: 'abril'
                },
                to: {
                    year: 2017,
                    month: 'agosto'
                },
                description: 'Utilizando R, implementei o framework Diffusion Map para reduzir a dimensionalidade do dataset de flores Iris e de datasets formados por características de estrelas, como coordenadas e informações referentes a luminosidade. Estagiário de Desenvolvimento Web​ no Itaú Unibanco ​'
            },
            {
                position: 'Estagiário em Desenvolvimento Web',
                company: 'Itaú Unibanco',
                from: {
                    year: 2015,
                    month: 'maio'
                },
                to: {
                    year: 2016,
                    month: 'novembro'
                },
                description: 'Utilizando Scrum, desenvolvi projetos web em C#, SQL (SQL Server), CSS e Javascript (jQuery, Knockout).'
            }
        ];
    }
];