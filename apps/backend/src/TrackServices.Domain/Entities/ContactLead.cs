using TrackServices.Domain.Common;

namespace TrackServices.Domain.Entities;

public sealed class ContactLead : AuditableEntity
{
    public Guid? TenantId { get; set; }

    public Tenant? Tenant { get; set; }

    public string Name { get; set; } = string.Empty;

    public string Company { get; set; } = string.Empty;

    public string Email { get; set; } = string.Empty;

    public string Phone { get; set; } = string.Empty;

    public string Service { get; set; } = string.Empty;

    public string Message { get; set; } = string.Empty;

    public string? PreferredChannel { get; set; }

    public string? Source { get; set; }
}