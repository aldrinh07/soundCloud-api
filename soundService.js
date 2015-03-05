/**
 * Created by aldrinh on 3/3/15.
 */
var app = angular.module('sounder');

app.service('soundService', function($http) {

    this.getUser = function(username) {
        return $http({
            method: 'GET',
            url: 'http://api.soundcloud.com/users/' + username + '/tracks.json?client_id=bda4ada8694db06efcac9cf97b872b3e'

       // Main URL: http://api.soundcloud.com/
       // Where we want to go: users/' + username + '/tracks.json
       // API Key: ?client_id=bda4ada8694db06efcac9cf97b872b3e


        })
    };


});