var app = angular.module('sounder');

app.service('soundService', function($http) {

    var key = 'bda4ada8694db06efcac9cf97b872b3e';

    this.getUser = function(username) {
        return $http.get('https://api.soundcloud.com/users/' + username + '/tracks.json?client_id=' + key);
    };

});
