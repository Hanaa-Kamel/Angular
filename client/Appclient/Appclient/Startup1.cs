﻿using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;
using Microsoft.Owin.Security.OAuth;
using Appclient.Models;
using Microsoft.AspNet.Identity.EntityFramework;
using System.Security.Claims;

[assembly: OwinStartup(typeof(Appclient.Startup1))]

namespace Appclient
{
    public class Startup1
    {
        public void Configuration(IAppBuilder app)
        {
            app.UseOAuthAuthorizationServer(new OAuthAuthorizationServerOptions()
            {
                TokenEndpointPath = new PathString("/token"),
                AllowInsecureHttp = true,
                AccessTokenExpireTimeSpan = TimeSpan.FromHours(5),
                Provider = new MyProvider()
                //exp
                //token path
                //http
                //Provide
            });
            app.UseOAuthBearerAuthentication(new OAuthBearerAuthenticationOptions());

            // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=316888

        }
    }
    //

    internal class MyProvider : OAuthAuthorizationServerProvider
    {
        public override async Task ValidateClientAuthentication(OAuthValidateClientAuthenticationContext context)
        {
            //context.ClientId
            context.Validated();
        }
        public override async Task GrantResourceOwnerCredentials(
            OAuthGrantResourceOwnerCredentialsContext context)
        {
            context.OwinContext.Response.Headers.Add("Access-Control-Allow-Origin", new[] { "*" });
            AuthBL repo = new AuthBL();
            IdentityUser user = repo.Find(context.UserName, context.Password);
            if (user == null)
            {
                context.SetError("Error User Pass Not valid");
            }
            ClaimsIdentity claims = new ClaimsIdentity(context.Options.AuthenticationType);
            claims.AddClaim(new Claim("Name", user.UserName));
            claims.AddClaim(new Claim("Role", "Admin"));
            context.Validated(claims);
            //check user usin gLAyer
            //create toke
            //error
            //context.UserName;
            //context.Password
        }
    }
}
