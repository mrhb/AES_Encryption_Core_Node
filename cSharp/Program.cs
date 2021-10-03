using System;

namespace cSharp
{
    class Program
    {
        static void Main(string[] args)
        {

            var dec=TokenHelper.Decrypt("c2FsYW1NUmV6YUhhamphcnNhbGFtTVJlemFIYWpqYXJpjGxlMpe14DrIJvQVUSFwMgl+bGEtesMvVeZikb5HFw==", "salamMRezaHajjar");
            Console.WriteLine("Decrypted From Nodejs: "+dec);

            var token=TokenHelper.Encrypt("Plain text input to DotNet Core", "salamMRezaHajjar");
            Console.WriteLine("Encrypted in DotNet Core:  " +token);
        }
    }
}
