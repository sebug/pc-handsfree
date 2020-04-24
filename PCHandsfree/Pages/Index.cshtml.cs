using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace PCHandsfree.Pages
{
    public class IndexModel : PageModel
    {
        public string Grammar { get; set; } = "#JSGF V1.0; grammar radios; 1 | 2 | 3 | 4 | 5 | " +
    " 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | " +
    " 15 | 16 | 17 | 18 | 19 | 20 | 21 | " +
    " 22 | 23 | 24 ;";

        public void OnGet()
        {
        }
    }
}
