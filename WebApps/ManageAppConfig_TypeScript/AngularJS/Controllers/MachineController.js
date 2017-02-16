///-------------------------------------------------------------------------------------------------
/// <summary>   A controller for handling billing suite app.s. </summary>
///
/// <remarks>   Rphilavanh, 9/29/2015. </remarks>
///-------------------------------------------------------------------------------------------------
var _this = this;
var ManageAppConfig;
(function (ManageAppConfig) {
    var Controller;
    (function (Controller) {
        var MachineController = (function () {
            function MachineController() {
                this.machineEditorGridOptions = undefined;
                // dataGridSource: uiGrid.IGridInstance;
                this.filterCaseNumber = "";
                this.enumListReceived = false;
                this.exportFlag = false;
            }
            MachineController.prototype.if = ;
            return MachineController;
        }());
        Controller.MachineController = MachineController;
        this.enumService.EnumServiceReady;
        {
            this.enumListRecdProc();
        }
        {
            var current = this;
            this.enumService.PopulateEnumListsAsync().then(function (data) {
                current.enumListRecdProc();
            }, function (reason) {
                console.log("Error loading enums");
            });
        }
    })(Controller = ManageAppConfig.Controller || (ManageAppConfig.Controller = {}));
})(ManageAppConfig || (ManageAppConfig = {}));
initDataGridSource($http);
kendo.data.DataSource;
{
    var apirelpath = "api:/BillingStatusCases";
    this.dataModel = kendo.data.Model.define({
        id: "CaseNumber",
        fields: {
            CaseNumber: { editable: false },
            ProgramGroup: { editable: false },
            ComputedBillingClassification: { editable: false },
            BillingAggregate: { editable: false },
            BillableStatus: { editable: true },
            Deficiencies: { editable: false },
            ICD9Codes: { editable: false },
            QNS: { editable: false },
            ClientName: { editable: false },
            DoctorNPI: { editable: false },
            PatientMRN: { editable: false },
            PayorGroup1: { editable: false },
            PayorGroup2: { editable: false },
            DateofService: { editable: false, type: "date" },
            OrderDate: { editable: false, type: "date" },
            CompletedDate: { editable: false, type: "date" },
            BillingClassification: { editable: true },
            BillType: { editable: true },
            PayorId1: { editable: true },
            HomePlan1: { editable: true },
            PlanType1: { editable: true },
            Network1: { editable: true },
            InsuredRelationship1: { editable: true },
            PayorGroupNumber1: { editable: true },
            PayorPolicyNumber1: { editable: true },
            PayorId2: { editable: true },
            HomePlan2: { editable: true },
            PlanType2: { editable: true },
            Network2: { editable: true },
            InsuredRelationship2: { editable: true },
            PayorGroupNumber2: { editable: true },
            PayorPolicyNumber2: { editable: true },
            PlaceOfService1: { editable: false },
            PlaceOfService2: { editable: false },
            Subscriber1FirstName: { editable: true },
            Subscriber1MiddleName: { editable: true },
            Subscriber1LastName: { editable: true },
            Subscriber1DateOfBirth: { editable: true, type: "date" },
            Subscriber1Gender: { editable: true },
            Subscriber1Address1: { editable: true },
            Subscriber1Address2: { editable: true },
            Subscriber1City: { editable: true },
            Subscriber1StateProvince: { editable: true },
            Subscriber1PostalCode: { editable: true },
            Subscriber1Country: { editable: true },
            Subscriber1PhoneNumber: { editable: true },
            Subscriber2FirstName: { editable: true },
            Subscriber2MiddleName: { editable: true },
            Subscriber2LastName: { editable: true },
            Subscriber2DateOfBirth: { editable: true, type: "date" },
            Subscriber2Gender: { editable: true },
            Subscriber2Address1: { editable: true },
            Subscriber2Address2: { editable: true },
            Subscriber2City: { editable: true },
            Subscriber2StateProvince: { editable: true },
            Subscriber2PostalCode: { editable: true },
            Subscriber2Country: { editable: true },
            Subscriber2PhoneNumber: { editable: true },
            LastCaseEdit: { editable: false, type: "date" },
            LastCaseEditUser: { editable: false },
        }
    });
    var ds = CreateGridDataSource($http, 20, this.dataModel, {
        read: function () {
            _this.updateActionComment = null;
            return apirelpath + _this.apiBody;
        },
        update: function () {
            _this.updateActionComment = null;
            return apirelpath;
        }
    });
    return ds;
}
GetData(event);
{
    var thirdArg;
    if (this.dateType == "Order Date")
        thirdArg = "&datetype=" + "orderdate";
    else
        thirdArg = "&datetype=" + "completeddate";
    this.apiBody = "?fromDate=" + this.fromDateString + "&toDate=" + moment(this.toDateString).add(1, 'days').format('MM/DD/YYYY') + thirdArg;
    this.dataGridSource.read();
}
CancelUpdate(event);
{
    this.dataGridSource.cancelChanges();
}
payorListRecdProc();
{
    this.payorsList = this.payorService.PayorsID2NameMap;
    this.payorCodesList = this.payorService.PayorsID2CodeMap;
    this.payorListReceived = true;
    this.CallGridInit();
}
enumListRecdProc();
{
    var enumlink;
    enumlink = this.enumService.GetEnumLink("BillStatus");
    this.billStatusEnum = enumlink.EnumMap;
    this.billStatusList = enumlink.EnumList;
    enumlink = this.enumService.GetEnumLink("ProgramGroup");
    this.programGroupEnum = enumlink.EnumMap;
    this.programGroupList = enumlink.EnumList;
    enumlink = this.enumService.GetEnumLink("BillingClassification");
    this.billingClassificationEnum = enumlink.EnumMap;
    this.billingClassificationList = enumlink.EnumList;
    enumlink = this.enumService.GetEnumLink("BillingAggregate");
    this.billingAggregateEnum = enumlink.EnumMap;
    this.billingAggregateList = enumlink.EnumList;
    enumlink = this.enumService.GetEnumLink("BillType");
    this.billTypeEnum = enumlink.EnumMap;
    this.billTypeList = enumlink.EnumList;
    enumlink = this.enumService.GetEnumLink("HomePlan");
    this.homePlanEnum = enumlink.EnumMap;
    this.homePlanList = enumlink.EnumList;
    enumlink = this.enumService.GetEnumLink("PlanType");
    this.planTypeEnum = enumlink.EnumMap;
    this.planTypeList = enumlink.EnumList;
    enumlink = this.enumService.GetEnumLink("Network");
    this.networkEnum = enumlink.EnumMap;
    this.networkList = enumlink.EnumList;
    enumlink = this.enumService.GetEnumLink("InsuredRelationship");
    this.insuredRelationshipEnum = enumlink.EnumMap;
    this.insuredRelationshipList = enumlink.EnumList;
    enumlink = this.enumService.GetEnumLink("Gender");
    this.genderEnum = enumlink.EnumMap;
    this.genderList = enumlink.EnumList;
    this.enumListReceived = true;
    this.CallGridInit();
}
///-------------------------------------------------------------------------------------------------
/// <summary>   Call grid initialise. </summary>
///
/// <remarks>   Rphilavanh, 9/29/2015. </remarks>
///
/// <returns>   . </returns>
///-------------------------------------------------------------------------------------------------
CallGridInit();
{
    if (this.payorListReceived && this.enumListReceived) {
        var current = this;
        current.payorListReceived = true;
        //current.initGrid();
        current.initGridAlt();
    }
}
///-------------------------------------------------------------------------------------------------
/// <summary>   Initialises the grid. </summary>
///
/// <remarks>   Rphilavanh, 9/29/2015. </remarks>
///
/// <returns>   . </returns>
///-------------------------------------------------------------------------------------------------
initGrid();
{
    this.caseEditorGridOptions = {
        dataSource: this.dataGridSource,
        scrollable: true,
        sortable: true,
        pageable: {
            refresh: true,
            pageSizes: true,
        },
        height: 750,
        autoBind: false,
        toolbar: this.toolbarTemplate,
        columns: [
            { command: ["edit"] },
            { "field": "CaseNumber", headerTemplate: "<label for='pnpi'>Case #</label> <input type='text' id='pnpi' style='width: 50px;' ng-model='vm.filterCaseNumber' ng-change='vm.RunFilter(kendoEvent)'/>" },
            { "field": "ProgramGroup", "title": "Program" },
            { "field": "BillType", "title": "Bill Type" },
            { "field": "BillingClassification", "title": "Bill Class" },
            { "field": "ComputedBillingClassification", "title": "Computed Bill Class" },
            { "field": "Deficiencies", "title": "Deficiencies" },
            { "field": "ComputedICD10Codes", "title": "ICD10" },
            { "field": "QNS", "title": "QNS" },
            { "field": "RepeatCount", "title": "Repeat Count" },
            { "field": "ClientName", "title": "Client" },
            { "field": "DoctorNPI", "title": "Doctor NPI" },
            { "field": "PatientMRN", "title": "MRN" },
            { "field": "PayorId1", "title": "Payor 1", values: this.payorCodesList },
            { "field": "PayorGroup1", "title": "Payor Group" },
            { "field": "HomePlan1", "title": "Home Plan", values: this.homePlanList },
            { "field": "PlanType1", "title": "Plan Type", values: this.planTypeList },
            { "field": "InsuredRelationship1", "title": "Relationship", values: this.insuredRelationshipEnum },
            { "field": "PayorGroupPolicyNumber1", "title": "Group #" },
            { "field": "PayorPolicyNumber1", "title": "Policy #" },
            { "field": "InsuredFirstName1", "title": "Insured First Name" },
            { "field": "InsuredMiddleName1", "title": "Insured Middle Name" },
            { "field": "InsuredLastName1", "title": "Insured Last Name" },
            { "field": "InsuredDOB1", "title": "Insured DOB" },
            { "field": "InsuredGender1", "title": "Insured Gender" },
            { "field": "InsuredAddress1_1:", "title": "Insured Address1" },
            { "field": "InsuredAddress2_1", "title": "Insured Address2" },
            { "field": "InsuredCity1", "title": "Insured City" },
            { "field": "InsuredState1", "title": "Insured State" },
            { "field": "InsuredPostalCode1", "title": "Insured ZIP" },
            { "field": "InsuredCountryCode1", "title": "Insured Country" },
            { "field": "InsuredPhone1", "title": "Insured Phone" },
            { "field": "PayorId2", "title": "Payor 2", values: this.payorCodesList },
            { "field": "PayorGroup2", "title": "Payor Group" },
            { "field": "HomePlan2", "title": "Home Plan", values: this.homePlanList },
            { "field": "PlanType2", "title": "Plan Type", values: this.planTypeList },
            { "field": "InsuredRelationship2", "title": "Relationship", values: this.insuredRelationshipList },
            { "field": "PayorGroupPolicyNumber2", "title": "Group #" },
            { "field": "PayorPolicyNumber2", "title": "Policy #" },
            { "field": "InsuredFirstName2", "title": "Insured First Name" },
            { "field": "InsuredMiddleName2", "title": "Insured Middle Name" },
            { "field": "InsuredLastName2", "title": "Insured Last Name" },
            { "field": "InsuredDOB2", "title": "Insured DOB" },
            { "field": "InsuredGender2", "title": "Insured Gender" },
            { "field": "InsuredAddress1_2:", "title": "Insured Address1" },
            { "field": "InsuredAddress2_2", "title": "Insured Address2" },
            { "field": "InsuredCity2", "title": "Insured City" },
            { "field": "InsuredState2", "title": "Insured State" },
            { "field": "InsuredPostalCode2", "title": "Insured ZIP" },
            { "field": "InsuredCountryCode2", "title": "Insured Country" },
            { "field": "InsuredPhone2", "title": "Insured Phone" },
        ],
        editable: "inline"
    };
}
handleDetailInit(e);
{
    var detailRow = e.detailRow;
    var masterRow = e.masterRow;
    var originalModel = e.data; //keep reference to the model
    var grid = e.sender;
    //var viewCollection: kendo.data.ObservableArray = grid.dataSource.view(); // this does not work because it does not make the datasource dirty
    var datacoll = grid.dataSource.data();
    var editableModel = new this.dataModel(originalModel.toJSON());
    var selectedModel = originalModel;
    kendo.bind(detailRow, editableModel);
    var ignorelist = ['_events', '_handlers', 'uid', 'dirty'];
    var current = this;
    detailRow.find(".case-details > .k-button.save").click(function () {
        if (editableModel.dirty) {
            var chgidx = datacoll.indexOf(selectedModel);
            var modmodel = datacoll[chgidx];
            var keys = Object.keys(editableModel);
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                if (ignorelist.indexOf(key) < 0) {
                    if (editableModel[key] != datacoll[chgidx][key]) {
                        datacoll[chgidx][key] = editableModel[key];
                        datacoll[chgidx]['dirty'] = true;
                    }
                }
            }
            //datacoll.splice(datacoll.indexOf(selectedModel), 1, editableModel);
            try {
                grid.dataSource.sync();
            }
            catch (ex) {
                // we will typically get an error because of not having a destroy transport
                // that does not really matter. So we suppress it here
                if (ex.message != "Unable to get property 'call' of undefined or null reference") {
                    // try to get the original data back
                    datacoll.splice(datacoll.indexOf(selectedModel), 1, originalModel);
                    throw (ex);
                }
            }
        }
    });
    detailRow.find(".case-details > .k-button.cancel").click(function () {
        if (editableModel.dirty) {
            editableModel = new kendo.data.Model(originalModel.toJSON());
            kendo.bind(detailRow, editableModel);
        }
        grid.collapseRow(masterRow);
    });
}
TruncateString(val, any);
string;
{
    if (val == undefined)
        return "";
    return val.substring(0, 100);
}
DateStringer(val, any);
string;
{
    if (val == "" || val == undefined)
        return "";
    return val.toLocaleDateString();
}
DateTimeStringer(val, any);
string;
{
    if (val == "" || val == undefined)
        return "";
    return moment(val).format("MM/DD/YYYY HH:mm Z");
}
EmptyUser(val, any);
string;
{
    if (val == "" || val == undefined)
        return "<Nobody>";
    return val;
}
AddCommaIfNotEmpty(val, any);
string;
{
    if (val == "" || val == undefined)
        return "";
    return val + ",";
}
CheckDisallowBillStatusChange(billStatus, string);
boolean;
{
    if (billStatus == 'Billed' || billStatus == 'Closed')
        return true;
    return false;
}
