//Service to get data from service..
myapp.service('crudservice', function ($http) {

    this.getAllMachines = function () {
        return $http.get("/api/Machine");
    }

    //save
    this.save = function (Machine) {
        var request = $http({
            method: 'post',
            url: '/api/Machine/',
            data: Machine
        });
        return request;
    }

    //get single record by Id
    this.get = function (id) {
        //debugger;
        return $http.get("/api/Machine/" + id);
    }

    //update Machine records
    this.update = function (UpdateId, Machine) {
        //debugger;
        var updaterequest = $http({
            method: 'put',
            url: "/api/Machine/" + UpdateId,
            data: Machine
        });
        return updaterequest;
    }

    //delete record
    this.delete = function (UpdateId) {
        debugger;
        var deleterecord = $http({
            method: 'delete',
            url: "/api/Machine/" + UpdateId
        });
        return deleterecord;
    }
});