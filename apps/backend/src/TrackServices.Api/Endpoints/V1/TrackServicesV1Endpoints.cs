using TrackServices.Api.Endpoints.V1.Contracts;
using TrackServices.Api.Endpoints.V1.ContactLeads;
using TrackServices.Api.Endpoints.V1.Tenants;

namespace TrackServices.Api.Endpoints.V1;

public static class TrackServicesV1Endpoints
{
    public static RouteGroupBuilder MapTrackServicesV1Endpoints(this RouteGroupBuilder group)
    {
        group.MapGet("/info", (IHostEnvironment environment) => Results.Ok(new ApiVersionInfoResponse(
            Name: "Track Services API",
            Version: "v1",
            Environment: environment.EnvironmentName,
            Status: "running",
            AvailableEndpoints: new[] { "GET /", "GET /api", "GET /api/v1/info", "POST /api/v1/contact-leads", "GET /api/v1/tenants", "POST /api/v1/tenants", "GET /api/v1/tenants/{id}", "GET /health" }
        )));

        group.MapTrackServicesContactLeadsEndpoints();
        group.MapTrackServicesTenantsEndpoints();

        return group;
    }
}