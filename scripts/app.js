(function(){
    'use-strict';
    
    angular.module('myCVApp',[])
    
    .controller('myCVController',function($scope){
     function SendEmail(){
        Email.send({ 
            Host: "smtp.gmail.com", 
            To: 'kimaya.kadu@gmail.com', 
            From: $scope.email, 
            Subject: $scope.subject, 
            Body: $scope.message, 
          }) 
            .then(function (message) { 
              alert("mail sent successfully") 
            }); 
        }
    });
    })();