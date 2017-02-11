using EFDataModel.DevOps;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AppConfigManagement.Controllers
{
    public class AppConfigController : Controller
    {
        DevOpsEntities DevOpsContext = new DevOpsEntities();

        // GET: AppConfig
        public ActionResult Index()
        {
            var machines = GetAllMachines(); 
            return View(machines);
        }

        private List<Models.Machine> GetAllMachines()
        {
            List<Models.Machine> machineModels = new List<Models.Machine>();
            var allMachines = (from machines in DevOpsContext.Machines
                               select machines).ToList();
            foreach (var machine in allMachines)
            {
                machineModels.Add(new Models.Machine()
                {
                    id = machine.id,
                    machine_name = machine.machine_name,
                    location = machine.location,
                    usage = machine.usage,
                    create_date = machine.create_date,
                    modify_date = machine.modify_date,
                    active = machine.active
                });
            }
            return machineModels;
        }
    }
}