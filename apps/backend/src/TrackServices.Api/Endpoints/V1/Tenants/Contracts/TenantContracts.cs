namespace TrackServices.Api.Endpoints.V1.Tenants.Contracts;

public sealed record CreateTenantRequest(
    string? Name,
    string? Slug,
    string? TaxId,
    bool? IsActive);

public sealed record TenantResponse(
    Guid Id,
    string Name,
    string Slug,
    string? TaxId,
    bool IsActive,
    DateTimeOffset CreatedAt,
    DateTimeOffset? UpdatedAt);