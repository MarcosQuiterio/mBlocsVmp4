app.initialize();
var misDatos={};
var selectedBloc="";
var module = angular.module('app', ['onsen']);

  	module.controller('AppController', function($scope) 
  	{
    	$scope.doSomething = function() 
		{
      		setTimeout(function() 
			{
        		alert(''+device.uuid);
      		}, 100);
    	};
  	});
	
  	module.controller('InicioController', function($scope)
	{
		$scope.info=dispositivo;
 	});
	
  	module.controller('PrincipalController', function($scope,$blocsJSON,$http)
	{
		$scope.info=dispositivo;
		$http.get('http://empowerlabs.com/proyectos/trackersAPI/mblocs2/todos.php').
		success(function(data, status, headers, config)
		{
			misDatos=data;
			$scope.items=misDatos;
			$scope.detalles=function(item)
			{
				selectedBloc=item;
				$scope.ons.navigator.pushPage("micro.html",{title:'1'});
			};
		});
		$scope.informacion=function()
		{
			$scope.ons.navigator.pushPage("info.html",{title:'1'});
		};
 	});
	
  	module.factory('$blocsJSON',function()
  	{
  		var data = {};      
      	data.items = misDatos;      
      	return data;
  	});
  
  	module.controller('MicroController', function($scope,$commnentsArray,$http)
  	{
  		$scope.elementos=$commnentsArray.items;
		$scope.item= selectedBloc;
		$scope.urlVideo = selectedBloc.Url;
    	videos = document.querySelectorAll("video");
		video=videos[0];
    	video.src = selectedBloc.Url;
  	});
  
  	module.factory('$commnentsArray',function()
  	{
  		var dataCom = {};      
      	return dataCom;
  	});
  
  
  