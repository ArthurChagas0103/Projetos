using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace user_registration.Scripts.WebForms.Classes
{
    public class ValidacaoData
    {
        public Boolean DataIsTrue(String data)
        {
            DateTime result;

            var minData = new DateTime(1900, 1, 1);

            if (DateTime.TryParse(data, out result))
            {
                if (result > DateTime.Now)
                {
                    return false;
                }
                else if (result < minData)
                {
                    return false;
                }
                else
                {
                    return true;
                }
            }              
            else
            {
                return false;
            }               
        }
    }
}