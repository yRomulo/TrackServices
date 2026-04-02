using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TrackServices.Domain.Entities;

namespace TrackServices.Infrastructure.Persistence.Configurations;

public sealed class PortalTicketConfiguration : IEntityTypeConfiguration<PortalTicket>
{
    public void Configure(EntityTypeBuilder<PortalTicket> builder)
    {
        builder.ToTable("PortalTickets");

        builder.HasKey(ticket => ticket.Id);

        builder.Property(ticket => ticket.TicketNumber)
            .IsRequired()
            .HasMaxLength(32);

        builder.Property(ticket => ticket.Title)
            .IsRequired()
            .HasMaxLength(180);

        builder.Property(ticket => ticket.Description)
            .IsRequired()
            .HasMaxLength(4000);

        builder.Property(ticket => ticket.Status)
            .HasConversion<string>()
            .IsRequired()
            .HasMaxLength(24);

        builder.Property(ticket => ticket.Priority)
            .HasConversion<string>()
            .IsRequired()
            .HasMaxLength(24);

        builder.Property(ticket => ticket.CreatedAt)
            .IsRequired();

        builder.HasIndex(ticket => ticket.TicketNumber)
            .IsUnique();

        builder.HasOne(ticket => ticket.Tenant)
            .WithMany(tenant => tenant.PortalTickets)
            .HasForeignKey(ticket => ticket.TenantId)
            .OnDelete(DeleteBehavior.Restrict);
    }
}