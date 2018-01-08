export default [
    '$scope',
    function ($scope) {
        $scope.educations = [
            {
                degree: 'Bacharelado',
                course: 'Ciência da Computação',
                university: 'CEFET/RJ',
                from: {
                    year: 2012,
                    month: 'julho'
                },
                to: {
                    year: 2018,
                    month: 'dezembro'
                }
            }
        ];
    }
];