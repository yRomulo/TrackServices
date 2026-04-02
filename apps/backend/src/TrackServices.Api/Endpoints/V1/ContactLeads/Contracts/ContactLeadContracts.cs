namespace TrackServices.Api.Endpoints.V1.ContactLeads.Contracts;

public sealed record CreateContactLeadRequest(
    Guid? TenantId,
    string? Name,
    string? Company,
    string? Email,
    string? Phone,
    string? Service,
    string? Message,
    string? PreferredChannel,
    string? Source);

public sealed record ContactLeadResponse(
    Guid Id,
    Guid? TenantId,
    string Name,
    string Company,
    string Email,
    string Phone,
    string Service,
    string Message,
    string? PreferredChannel,
    string Source,
    DateTimeOffset CreatedAt,
    DateTimeOffset? UpdatedAt);