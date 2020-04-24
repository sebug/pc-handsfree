using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Options;

namespace PCHandsfree.Pages
{
    public class IndexModel : PageModel
    {
        public IndexModel(IOptions<HandsfreeOptions> options)
        {
            var opts = options.Value;
            if (!String.IsNullOrEmpty(opts.Grammar))
            {
                this.Grammar = opts.Grammar.Replace("_radio_", "<radio>");
                if (!this.Grammar.StartsWith('#'))
                {
                    this.Grammar = "#" + this.Grammar;
                }
            }
        }

        public string Grammar { get; set; } = "#JSGF V1.0; grammar radios; public <radio> = 1 | 2 | 3 | 4 | 5 | " +
    " 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | " +
    " 15 | 16 | 17 | 18 | 19 | 20 | 21 | " +
    " 22 | 23 | 24 ;";

        public void OnGet()
        {
        }
    }
}
