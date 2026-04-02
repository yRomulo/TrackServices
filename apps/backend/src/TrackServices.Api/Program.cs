using Microsoft.AspNetCore.Diagnostics.HealthChecks;
using Microsoft.OpenApi;
using TrackServices.Api.Endpoints.V1;
using TrackServices.Infrastructure.DependencyInjection;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddTrackServicesPersistence(builder.Configuration);
builder.Services.AddHealthChecks();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "Track Services API",
        Version = "v1",
        Description = "API do portal corporativo Track Services."
    });
});
builder.Services.AddCors(options =>
{
    options.AddPolicy("Frontend", policy =>
    {
        var allowedOrigins = builder.Configuration.GetSection("Cors:AllowedOrigins").Get<string[]>() ?? Array.Empty<string>();

        if (allowedOrigins.Length == 0)
        {
            policy.AllowAnyOrigin();
        }
        else
        {
            policy.WithOrigins(allowedOrigins);
        }

        policy.AllowAnyHeader();
        policy.AllowAnyMethod();
    });
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(options =>
    {
        options.RoutePrefix = "swagger";
        options.SwaggerEndpoint("/swagger/v1/swagger.json", "Track Services API v1");
    });
}

app.UseHttpsRedirection();
app.UseCors("Frontend");

var apiOverview = new ApiOverviewResponse(
    Name: "Track Services API",
    Version: "v1",
    Status: "running",
    Routes: new[] { "GET /", "GET /api", "GET /api/v1/info", "POST /api/v1/contact-leads", "GET /api/v1/tenants", "POST /api/v1/tenants", "GET /api/v1/tenants/{id}", "GET /health" });

app.MapGet("/", () => Results.Ok(apiOverview));
app.MapGet("/api", () => Results.Ok(apiOverview));

var apiV1 = app.MapGroup("/api/v1");
apiV1.MapTrackServicesV1Endpoints();

app.MapHealthChecks("/health", new HealthCheckOptions
{
    ResponseWriter = async (context, report) =>
    {
        context.Response.ContentType = "application/json";

        var payload = new
        {
            status = report.Status.ToString(),
            checks = report.Entries.Select(entry => new
            {
                name = entry.Key,
                status = entry.Value.Status.ToString(),
                description = entry.Value.Description
            })
        };

        await context.Response.WriteAsJsonAsync(payload);
    }
});

app.Run();

public sealed record ApiOverviewResponse(string Name, string Version, string Status, string[] Routes);