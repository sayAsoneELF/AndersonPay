﻿using BaseModel;
using System;
using System.Collections.Generic;

namespace AndersonPayModel
{
    public class Invoice : Base
    {
        public int ClientId { get; set; }
        public int InvoiceId { get; set; }
        public int NumberOfDelays { get; set; }

        public decimal AmountDue { get; set; }
        public decimal Interest { get; set; }
        public decimal Subtotal { get; set; }
        public decimal Tax { get; set; }

        public string Address { get; set; }
        public string CreatedDateNow => CreatedDate?.ToString("dd MMMM yyyy") ?? string.Empty; //There is a dll that will solve MVC json problems
        public int CurrencyId { get; set; }
        public string Name { get; set; }
        public string Recipients { get; set; }
        public string SINo { get; set; }
        public int TaxTypeId { get; set; }
        public string TIN { get; set; }
        public DateTime DueDate => CreatedDate.Value.AddDays(7);
        public DateTime BillingPeriod { get; set; }
        public string BillingPeriodNow => BillingPeriod.ToString("dd MMMM yyyy") ?? string.Empty;
        public string BillingPeriodDate => BillingPeriod.Date.ToString("yyyy-MM-dd") ?? string.Empty;
        public string DueDateNow => DueDate.ToString("dd MMMM yyyy") ?? string.Empty;

        public Client Client { get; set; }

        public virtual List<Service> Services { get; set; }
        public virtual List<TypeOfService> TypeOfServices { get; set; }

        public virtual List<Client> Clients { get; set; }
        public virtual List<CurrencyCode> Currencies { get; set; }


    }
}
