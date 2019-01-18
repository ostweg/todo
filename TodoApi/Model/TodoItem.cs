using System;

namespace TodoApi.Models
{
    public class TodoItem
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string NameofPerson {get;set;}
        public string ShortDescription {get;set;}
        public string Importance {get;set;}
        public DateTime EndDate {get;set;}

    }
}