using System;

namespace cSharp
{
    class Program
    {
        static void Main(string[] args)
        {

            var token=TokenHelper.Encrypt("dsfrgrgw","dfbserthsth");
            Console.WriteLine("Hello ,Token is:" + token);
        }
    }
}
