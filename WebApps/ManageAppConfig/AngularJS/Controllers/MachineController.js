(function () {
    'use strict';

    angular
        .module('app')
        .controller('machinecontroller', machinecontroller);

    machinecontroller.$inject = ['$machine'];

    function machinecontroller($machine) {
        $scope.title = 'MachineControllerJs';

        activate();

        function activate() { }
    }
})();





//app.controller(
//                        'MachineController',
//                        function ($scope) {
//                            var Company;
//                            var Model;
//                            var Price;
//                            var Stocks;
//                            var x;
//                            $scope.submit = function () {
//                                Company = $scope.Company;
//                                Model = $scope.Model;
//                                Price = $scope.Price;
//                                Stocks = $scope.Stocks;
//                                $scope.myData.push({
//                                    Company: Company,
//                                    Model: Model,
//                                    Price: Price,
//                                    Stocks: Stocks
//                                });
//                            };

//                            $scope.myData = [{ "Company": "Samsung", "Model": "Samsung Galaxy Grand 2", "Price": 5000, "Stocks": 4 },
//                                             { "Company": "Samsung", "Model": "Samsung Galaxy S3 Neo", "Price": 9000, "Stocks": 41 },
//                                           { "Company": "Samsung", "Model": "Samsung Galaxy Grand Max", "Price": 11000, "Stocks": 4 },
//                                            { "Company": "MicroMax", "Model": "Micromax Canvas Blaze", "Price": 6300, "Stocks": 0 },
//                                           { "Company": "MicroMax", "Model": "Micromax Canvas Duddle", "Price": 11000, "Stocks": 3 },
//                                             { "Company": "MicroMax", "Model": "Micromax Canvas Duddle- SPL", "Price": 11000, "Stocks": 3 },
//                                             { "Company": "Blackberry", "Model": "Blackberry Z30", "Price": 19000, "Stocks": 10 },
//                                           { "Company": "Blackberry", "Model": "Micromax bold  9780", "Price": 12900, "Stocks": 20 },

//                            ],


//                            $scope.gridOptions = {

//                                data: 'myData',
//                                pagingOptions: $scope.pagingOptions,
//                                enablePinning: true,
//                                enablePaging: true,
//                                showFooter: true,
//                                enableColumnResize: true,
//                                enableCellSelection: true,
//                                columnDefs: [
//                                        {
//                                            field: "machine_name",
//                                            width: 180,
//                                            pinned: true,
//                                            enableCellEdit: false
//                                        },
//                                        {
//                                            field: "location",
//                                            width: 200,
//                                            enableCellEdit: true
//                                        },
//                                        {
//                                            field: "usage",
//                                            width: 100,
//                                            enableCellEdit: true
//                                        },
//                                        {
//                                            field: "create_date",
//                                            width: 120,
//                                            enableCellEdit: true,
//                                            cellTemplate: basicCellTemplate
//                                        },
//                                        {
//                                            field: "active",
//                                            width: 20,
//                                            enableCellEdit: true,
//                                            cellTemplate: basicCellTemplate
//                                        },
//                                        {
//                                            field: "Action",
//                                            width: 200,
//                                            enableCellEdit: false,
//                                            cellTemplate: '<button id="editBtn" type="button" class="btn btn-xs btn-info"  ng-click="updateCell()" >Click a Cell for Edit </button>'
//                                        }]

//                            };

//                            $scope.selectedCell;
//                            $scope.selectedRow;
//                            $scope.selectedColumn;

//                            $scope.editCell = function (row, cell, column) {
//                                $scope.selectedCell = cell;
//                                $scope.selectedRow = row;
//                                $scope.selectedColumn = column;
//                            };

//                            $scope.updateCell = function () {

//                                //   alert("checking");  
//                                $scope.selectedRow[$scope.selectedColumn] = $scope.selectedCell;
//                            };

//                            var basicCellTemplate = '<div class="ngCellText" ng-class="col.colIndex()" ng-click="editCell(row.entity, row.getProperty(col.field), col.field)"><span class="ui-disableSelection hover">{{row.getProperty(col.field)}}</span></div>';

//                            $scope.filterOptions = {
//                                filterText: "",
//                                useExternalFilter: true
//                            };

//                            $scope.gridOptions.sortInfo = {
//                                fields: ['Company', 'Price'],
//                                directions: ['asc'],
//                                columns: [0, 1]
//                            };

//                            $scope.totalServerItems = 0;

//                            $scope.pagingOptions = {
//                                pageSizes: [5, 10, 20],
//                                pageSize: 5,
//                                currentPage: 1
//                            };

//                            $scope.changeGroupBy = function (group1, group2) {
//                                $scope.gridOptions.$gridScope.configGroups = [];
//                                $scope.gridOptions.$gridScope.configGroups.push(group1);
//                                $scope.gridOptions.$gridScope.configGroups.push(group2);
//                                $scope.gridOptions.groupBy();
//                            }
//                            $scope.clearGroupBy = function () {
//                                $scope.gridOptions.$gridScope.configGroups = [];
//                                $scope.gridOptions.groupBy();
//                            }

//                        });