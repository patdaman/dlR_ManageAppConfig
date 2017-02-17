//(function () {
//    'use strict';

//    angular
//        .module('app')
//        .controller('machinecontroller', machinecontroller);

//    machinecontroller.$inject = ['$machine'];

//    function machinecontroller($machine) {
//        $scope.title = 'MachineControllerJs';

//        activate();

//        function activate() { }
//    }
//})();




(function () {
    'use strict';
    angular
        .module('app', ['ui.Grid'])
        .controller(
        // 'MachineController', MachineController);
        // MachineController.$inject = ['uiGrid'];
    'MachineController', 
    function ($scope) {
        var vm = this;
            var Company;
            var Model;
            var Price;
            var Stocks;
            var x;
            vm.submit = function () {
                Company = vm.Company;
                Model = vm.Model;
                Price = vm.Price;
                Stocks = vm.Stocks;
                vm.myData.push({
                    Company: Company,
                    Model: Model,
                    Price: Price,
                    Stocks: Stocks
                });
            };

            vm.myData = [{ "Company": "Samsung", "Model": "Samsung Galaxy Grand 2", "Price": 5000, "Stocks": 4 },
                { "Company": "Samsung", "Model": "Samsung Galaxy S3 Neo", "Price": 9000, "Stocks": 41 },
                { "Company": "Samsung", "Model": "Samsung Galaxy Grand Max", "Price": 11000, "Stocks": 4 },
                { "Company": "MicroMax", "Model": "Micromax Canvas Blaze", "Price": 6300, "Stocks": 0 },
                { "Company": "MicroMax", "Model": "Micromax Canvas Duddle", "Price": 11000, "Stocks": 3 },
                { "Company": "MicroMax", "Model": "Micromax Canvas Duddle- SPL", "Price": 11000, "Stocks": 3 },
                { "Company": "Blackberry", "Model": "Blackberry Z30", "Price": 19000, "Stocks": 10 },
                { "Company": "Blackberry", "Model": "Micromax bold  9780", "Price": 12900, "Stocks": 20 },

            ],


            vm.gridOptions = {

                data: vm.myData,
                    //data: 'myData',
                    pagingOptions: vm.pagingOptions,
                    enablePinning: true,
                    enablePaging: true,
                    showFooter: true,
                    enableColumnResize: true,
                    enableCellSelection: true,
                    columnDefs: [
                        {
                            field: "Company",
                            //field: "machine_name",
                            width: 180,
                            pinned: true,
                            enableCellEdit: false
                        },
                        {
                            field: "Model",
                            //field: "location",
                            width: 200,
                            enableCellEdit: true
                        },
                        {
                            field: "Price",
                            //field: "usage",
                            width: 100,
                            enableCellEdit: true
                        },
                        {
                            field: "Stocks",
                            //field: "create_date",
                            width: 120,
                            enableCellEdit: true,
                            cellTemplate: basicCellTemplate
                        },
                        //{
                        //    field: "active",
                        //    width: 20,
                        //    enableCellEdit: true,
                        //    cellTemplate: basicCellTemplate
                        //},
                        {
                            field: "Action",
                            width: 200,
                            enableCellEdit: false,
                            cellTemplate: '<button id="editBtn" type="button" class="btn btn-xs btn-info"  ng-click="updateCell()" >Click a Cell for Edit </button>'
                        }]

                };

            vm.selectedCell;
            vm.selectedRow;
            vm.selectedColumn;

            vm.editCell = function (row, cell, column) {
                vm.selectedCell = cell;
                vm.selectedRow = row;
                vm.selectedColumn = column;
            };

            vm.updateCell = function () {

                //   alert("checking");  
                vm.selectedRow[vm.selectedColumn] = vm.selectedCell;
            };

            var basicCellTemplate = '<div class="ngCellText" ng-class="col.colIndex()" ng-click="editCell(row.entity, row.getProperty(col.field), col.field)"><span class="ui-disableSelection hover">{{row.getProperty(col.field)}}</span></div>';

            vm.filterOptions = {
                filterText: "",
                useExternalFilter: true
            };

            vm.gridOptions.sortInfo = {
                fields: ['Company', 'Price'],
                directions: ['asc'],
                columns: [0, 1]
            };

            vm.totalServerItems = 0;

            vm.pagingOptions = {
                pageSizes: [5, 10, 20],
                pageSize: 5,
                currentPage: 1
            };

            vm.changeGroupBy = function (group1, group2) {
                vm.gridOptions.$gridScope.configGroups = [];
                vm.gridOptions.$gridScope.configGroups.push(group1);
                vm.gridOptions.$gridScope.configGroups.push(group2);
                vm.gridOptions.groupBy();
            }
            vm.clearGroupBy = function () {
                vm.gridOptions.$gridScope.configGroups = [];
                vm.gridOptions.groupBy();
            }

        //};
        });
})

//                        

//module ManageAppConfig.Controller {

//    export class MachineController {

//        machineEditorGridOptions: uiGrid.IGridOptions = undefined;
//        httpServ: ng.IHttpService;
//        qServ: ng.IQService;

//        fromDate: Date;
//        toDate: Date;
//        fromDateString: string;
//        toDateString: string;
//        dateType: string;

//        identifier: string;
//        toolbarTemplate: any;
//        detailTemplate: any;
//        // dataGridSource: uiGrid.IGridInstance;
//        filterCaseNumber: string = "";

//        getData: Function;

//        enumService: Service.EnumListService;

//        billingAggregateEnum: any;
//        billingClassificationEnum: any;
//        billStatusEnum: any;

//        programGroupSelection: string;
//        billingAggregateSelection: string;
//        billingClassificationSelection: string;
//        billStatusSelection: string;

//        enumListReceived: boolean = false;

//        billTypeEnum: any;
//        homePlanEnum: any;
//        planTypeEnum: any;
//        networkEnum: any;
//        insuredRelationshipEnum: any;
//        genderEnum: any;

//        billTypeList: any;
//        homePlanList: any;
//        planTypeList: any;
//        networkList: any;
//        insuredRelationshipList: any;
//        genderList: any;

//        billTypeSelection: string;
//        homePlanSelection: string;
//        planTypeSelection: string;
//        networkSelection: string;
//        insuredRelationshipSelection: string;
//        genderSelection: string;

//        editRowDataModel: uiGrid.IGridRow;
//        dataModel: any;
//        exportFlag: boolean = false;

//        updateActionComment: string;
//        caseListStr: string;

//        ///-------------------------------------------------------------------------------------------------
//        /// <summary>   Constructor. </summary>
//        ///
//        /// <param name="$http">        The $http. </param>
//        /// <param name="$q">           The $q. </param>
//        /// <param name="PayorService"> The payor service. </param>
//        /// <param name="EnumService">  The enum service. </param>
//        ///-------------------------------------------------------------------------------------------------

//        constructor($rootScope, $http, $q,
//            {

//            this.caseEditorGridOptions = undefined;


//            this.httpServ = $http;
//            this.qServ = $q;

//            this.payorService = PayorService;
//            this.enumService = EnumService;
//            this.utilService = UtilService;

//            this.identifier = $rootScope.AppBuildStatus + "Case Editor";

//            this.toolbarTemplate = $("#toolbarTemplate").html();
//            this.detailTemplate = $("#detailTemplate").html();

//            this.dateType = "Completed Date";

//            this.toDate = new Date();
//            this.fromDate = new Date();
//            this.fromDate.setDate(this.toDate.getDate() - 7);

//            this.fromDateString = DateToUSString(this.fromDate);
//            this.toDateString = DateToUSString(this.toDate);

//            this.payorListReceived = false;
//            this.enumListReceived = false;

//            this.dataGridSource = this.initDataGridSource($http);

//            if (this.payorService.PayorsID2CodeMap) {
//                this.payorListRecdProc();
//            }
//            else {
//                var current: CaseEditorController = this;
//                this.payorService.GetPayorsAsync().then(function (data) {
//                    current.payorListRecdProc();
//                }, function (reason) {
//                    console.log("Went to hell in a handbasket");
//                })
//            }

//            if (this.enumService.EnumServiceReady) {
//                this.enumListRecdProc();
//            }
//            else {
//                var current: CaseEditorController = this;
//                this.enumService.PopulateEnumListsAsync().then(function (data) {
//                    current.enumListRecdProc();
//                }, function (reason) {
//                    console.log("Error loading enums");
//                })
//            }
//        }
