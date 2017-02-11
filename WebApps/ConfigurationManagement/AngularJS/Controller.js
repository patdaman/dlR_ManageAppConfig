//Angular controller 
myapp.controller('crudcontroller', function ($scope, crudservice) {

    //Loads all Machine records when page loads
    loadMachines();
    function loadMachines() {
        var MachineRecords = crudservice.getAllMachines();
        MachineRecords.then(function (d) {     //success
            $scope.Machines = d.data;
        },
        function () {
            swal("Oops..", "Error occured while loading", "error"); //fail
        });
    }

    //save form data
    $scope.save = function () {
        //debugger;
        var Machine = {
            id: $scope.id,
            machine_name: $scope.machine_name,
            location: $scope.location,
            usage: $scope.usage,
            create_date: $scope.create_date,
            modify_date: $scope.modify_date,
            active: $scope.active
        };

        var saverecords = crudservice.save(Machine);
        saverecords.then(function (d) {
            $scope.id = d.data.id;
            loadMachines();
            swal("Reord inserted successfully");
        },
        function () {
            swal("Oops..", "Error occured while saving", 'error');
        });
    }

    //get single record by ID

    $scope.get = function (Machine) {
        //debugger;
        var singlerecord = crudservice.get(Machine.id);
        singlerecord.then(function (d) {
            // debugger;
            var record = d.data;
            $scope.Updateid = record.id;
            $scope.Updatemachine_name = record.machine_name;
            $scope.Updatelocation = record.location;
            $scope.Updateusage = record.usage;
            $scope.Updatecreate_date = record.create_date;
            $scope.Updatemodify_date = record.modify_date;
            $scope.Updateactive = record.active;
        },
        function () {
            swal("Oops...", "Error occured while getting record", "error");
        });
    }

    //update Machine data
    $scope.update = function () {
        //debugger;
        var Machine = {
            id: $scope.Updateid,
            machine_name: $scope.Updatemachine_name,
            location: $scope.Updatelocation,
            usage: $scope.Updateusage,
            create_date: $scope.Updatecreate_date,
            modify_date: $scope.Updatemodify_date,
            active: $scope.Updateactive
        };
        debugger;
        var updaterecords = crudservice.update($scope.Updateid, Machine);
        updaterecords.then(function (d) {
            loadMachines();
            swal("Record updated successfully");
        },
        function () {
            swal("Opps...", "Error occured while updating", "error");
        });
    }

    //delete Machine record
    $scope.delete = function (Updateid) {
        debugger;
        var deleterecord = crudservice.delete($scope.Updateid);
        deleterecord.then(function (d) {
            var Machine = {
                id: '',
                machine_name: '',
                location: '',
                usage: '',
                create_date: '',
                modify_date: '',
                active: '',
            };
            loadMachines();
            swal("Record deleted succussfully");
        });
    }
});