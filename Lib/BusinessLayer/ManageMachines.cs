using EFDataModel.DevOps;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLayer
{
    public class ManageMachines
    {
        DevOpsEntities DevOpsContext = new DevOpsEntities();

        public List<ViewModel.Machine> GetAllMachines()
        {
            List<ViewModel.Machine> machineModels = new List<ViewModel.Machine>();
            var allMachines = (from machines in DevOpsContext.Machines
                               select machines).ToList();
            foreach (var machine in allMachines)
            {
                machineModels.Add(new ViewModel.Machine()
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

        public ViewModel.Machine GetMachine(int id)
        {
            var EFMachine = (from machine in DevOpsContext.Machines
                             where machine.id == id
                             select machine).FirstOrDefault();
            var machineModel = new ViewModel.Machine()
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
