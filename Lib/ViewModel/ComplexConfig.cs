﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ViewModel
{
    public class MachineAppVars
    {
        public Nullable<int> machineId { get; set; }
        public string machine_name { get; set; }
        public string location { get; set; }
        public string usage { get; set; }
        public System.DateTime machineCreate_date { get; set; }
        public Nullable<System.DateTime> machineModify_date { get; set; }
        public bool machineActive { get; set; }
        public Nullable<int> applicationId { get; set; }
        public string applicationName { get; set; }
        public string applicationRelease { get; set; }
        public System.DateTime applicationCreate_date { get; set; }
        public Nullable<System.DateTime> applicationModify_date { get; set; }
        public bool applicationActive { get; set; }
        public Nullable<int> varId { get; set; }
        public string varType { get; set; }
        public string configElement { get; set; }
        public string configAttribute { get; set; }
        public string varKey { get; set; }
        public string configValue_name { get; set; }
        public string varValue { get; set; }
        public string varPath { get; set; }
        public bool varActive { get; set; }
        public string envType { get; set; }
        public System.DateTime varCreate_date { get; set; }
        public Nullable<System.DateTime> varModify_date { get; set; }

        public MachineAppVars()
        { }
        public MachineAppVars(MachineAppVars x)
        {
            machineId = x.machineId;
            machine_name = x.machine_name;
            location = x.location;
            usage = x.usage;
            machineCreate_date = x.machineCreate_date;
            machineModify_date = x.machineModify_date;
            machineActive = x.machineActive;
            applicationId = x.applicationId;
            applicationName = x.applicationName;
            applicationRelease = x.applicationRelease;
            applicationCreate_date = x.applicationCreate_date;
            applicationModify_date = x.applicationModify_date;
            applicationActive = x.applicationActive;
            varId = x.varId;
            varType = x.varType;
            configElement = x.configElement;
            configAttribute = x.configAttribute;
            varKey = x.varKey;
            configValue_name = x.configValue_name;
            varValue = x.varValue;
            varPath = x.varPath;
            varActive = x.varActive;
            varCreate_date = x.varCreate_date;
            varModify_date = x.varModify_date;
            envType = x.envType;
        }

        public MachineAppVars(MachineAppVars_Complete x)
        {
            machineId = x.machineId;
            machine_name = x.machine_name;
            location = x.location;
            usage = x.usage;
            machineCreate_date = x.machineCreate_date;
            machineModify_date = x.machineModify_date;
            machineActive = x.machineActive;
            applicationId = x.applicationId;
            applicationName = x.applicationName;
            applicationRelease = x.applicationRelease;
            applicationCreate_date = x.applicationCreate_date;
            applicationModify_date = x.applicationModify_date;
            applicationActive = x.applicationActive;
            if (x.configId != null)
            {
                varId = x.configId;
                varType = "Config";
                configElement = x.configElement;
                configAttribute = x.configAttribute;
                varKey = x.configKey;
                configValue_name = x.configValue_name;
                varValue = x.configValue;
                varPath = x.config_path;
                varActive = x.configActive;
                varCreate_date = x.configCreate_date;
                varModify_date = x.configModify_date;
            }
            else if (x.envId != null)
            {
                varId = x.configId;
                varType = "Environment";
                varKey = x.envKey;
                varValue = x.envValue;
                varPath = x.envPath;
                envType = x.envType;
                varActive = x.envActive;
                varCreate_date = x.configCreate_date;
                varModify_date = x.configModify_date;
            }
        }

        public MachineAppVars(ConfigVariable x)
        {

        }

        public MachineAppVars(EnvironmentVariable x)
        {

        }
    }

    public class MachineAppVars_Complete
    {
        public Nullable<int> machineId { get; set; }
        public string machine_name { get; set; }
        public string location { get; set; }
        public string usage { get; set; }
        public System.DateTime machineCreate_date { get; set; }
        public Nullable<System.DateTime> machineModify_date { get; set; }
        public bool machineActive { get; set; }
        public Nullable<int> applicationId { get; set; }
        public string applicationName { get; set; }
        public string applicationRelease { get; set; }
        public System.DateTime applicationCreate_date { get; set; }
        public Nullable<System.DateTime> applicationModify_date { get; set; }
        public bool applicationActive { get; set; }
        public Nullable<int> configId { get; set; }
        public string configElement { get; set; }
        public string configAttribute { get; set; }
        public string configKey { get; set; }
        public string configValue_name { get; set; }
        public string configValue { get; set; }
        public string config_path { get; set; }
        public System.DateTime configCreate_date { get; set; }
        public Nullable<System.DateTime> configModify_date { get; set; }
        public bool configActive { get; set; }
        public Nullable<int> envId { get; set; }
        public string envKey { get; set; }
        public string envValue { get; set; }
        public string envType { get; set; }
        public string envPath { get; set; }
        public System.DateTime envCreate_date { get; set; }
        public Nullable<System.DateTime> envModify_date { get; set; }
        public bool envActive { get; set; }
    }
}