using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using ViewModel;

namespace ConfigurationManagement.Controllers
{
    public class MachineEditController : ApiController
    {
        BusinessLayer.ManageMachines machineProcessor = new BusinessLayer.ManageMachines();

        // GET: api/Machine
        public IEnumerable<ViewModel.Machine> GetMachines()
        {
            return machineProcessor.GetAllMachines();
        }

        // GET: api/Machine/5
        public ViewModel.Machine Get(int id)
        {
            return machineProcessor.GetMachine(id);
        }

        // POST: api/Machine
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Machine/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Machine/5
        public void Delete(int id)
        {

        }
    }
}
