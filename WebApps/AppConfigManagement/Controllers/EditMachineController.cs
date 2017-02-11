using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AppConfigManagement.Models;
using EFDataModel.DevOps;

namespace AppConfigManagement.Controllers
{
    public class EditMachineController : Controller
    {
        DevOpsEntities DevOpsContext = new DevOpsEntities();

        // GET: EditMachine
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public ActionResult EditMachine(int id)
        {
            Models.Machine machine = GetMachine(id);
            return View(machine);
        }

        private Models.Machine GetMachine(int id)
        {
            var EFMachine = (from machine in DevOpsContext.Machines
                             where machine.id == id
                             select machine).FirstOrDefault();
            var machineModel = new Models.Machine()
            {
                id = EFMachine.id,
                machine_name = EFMachine.machine_name,
                location = EFMachine.location,
                usage = EFMachine.usage,
                create_date = EFMachine.create_date,
                modify_date = EFMachine.modify_date,
                active = EFMachine.active
            };
            return machineModel;
        }
    }
}