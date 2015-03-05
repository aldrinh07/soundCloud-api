/**
 * Created by aldrinh on 3/3/15.
 */
var app = angular.module('sounder');

app.controller('mainController', function($scope, soundService, $sce) {
//    $scope.test = 'IT WORKS';
    $scope.getUser = function() {
        soundService.getUser($scope.searchText).then(function(data){
            $scope.userData = data.data;
        })
    };
    $scope.getUser();

    $scope.play = function(track_url) {
        SC.oEmbed(track_url, { auto_play: true }, function(oEmbed) {
            $scope.$apply($scope.player_html = $sce.trustAsHtml(oEmbed.html));
        });
    }
});
