using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TrackServices.Domain.Entities;

namespace TrackServices.Infrastructure.Persistence.Configurations;

public sealed class ContactLeadConfiguration : IEntityTypeConfiguration<ContactLead>
{
    public void Configure(EntityTypeBuilder<ContactLead> builder)
    {
        builder.ToTable("ContactLeads");

        builder.HasKey(contactLead => contactLead.Id);

        builder.Property(contactLead => contactLead.Name)
            .IsRequired()
            .HasMaxLength(120);

        builder.Property(contactLead => contactLead.Company)
            .IsRequired()
            .HasMaxLength(120);

        builder.Property(contactLead => contactLead.Email)
            .IsRequired()
            .HasMaxLength(254);

        builder.Property(contactLead => contactLead.Phone)
            .IsRequired()
            .HasMaxLength(32);

        builder.Property(contactLead => contactLead.Service)
            .IsRequired()
            .HasMaxLength(120);

        builder.Property(contactLead => contactLead.Message)
            .IsRequired()
            .HasMaxLength(2000);

        builder.Property(contactLead => contactLead.PreferredChannel)
            .HasMaxLength(32);

        builder.Property(contactLead => contactLead.Source)
            .HasMaxLength(80);

        builder.Property(contactLead => contactLead.CreatedAt)
            .IsRequired();

        builder.HasIndex(contactLead => contactLead.Email);

        builder.HasOne(contactLead => contactLead.Tenant)
            .WithMany(tenant => tenant.ContactLeads)
            .HasForeignKey(contactLead => contactLead.TenantId)
            .OnDelete(DeleteBehavior.SetNull);
    }
}