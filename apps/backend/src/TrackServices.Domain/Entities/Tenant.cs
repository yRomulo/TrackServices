using TrackServices.Domain.Common;

namespace TrackServices.Domain.Entities;

public sealed class Tenant : AuditableEntity
{
    public string Name { get; set; } = string.Empty;

    public string Slug { get; set; } = string.Empty;

    public string? TaxId { get; set; }

    public bool IsActive { get; set; } = true;

    public ICollection<ContactLead> ContactLeads { get; set; } = new List<ContactLead>();

    public ICollection<PortalTicket> PortalTickets { get; set; } = new List<PortalTicket>();
}