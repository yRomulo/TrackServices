using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using TrackServices.Domain.Entities;

namespace TrackServices.Infrastructure.Persistence.Configurations;

public sealed class TenantConfiguration : IEntityTypeConfiguration<Tenant>
{
    public void Configure(EntityTypeBuilder<Tenant> builder)
    {
        builder.ToTable("Tenants");

        builder.HasKey(tenant => tenant.Id);

        builder.Property(tenant => tenant.Name)
            .IsRequired()
            .HasMaxLength(200);

        builder.Property(tenant => tenant.Slug)
            .IsRequired()
            .HasMaxLength(120);

        builder.Property(tenant => tenant.TaxId)
            .HasMaxLength(32);

        builder.Property(tenant => tenant.IsActive)
            .HasDefaultValue(true);

        builder.Property(tenant => tenant.CreatedAt)
            .IsRequired();

        builder.HasIndex(tenant => tenant.Slug)
            .IsUnique();
    }
}