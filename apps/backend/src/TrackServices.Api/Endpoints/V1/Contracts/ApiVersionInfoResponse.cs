namespace TrackServices.Api.Endpoints.V1.Contracts;

public sealed record ApiVersionInfoResponse(
    string Name,
    string Version,
    string Environment,
    string Status,
    string[] AvailableEndpoints);