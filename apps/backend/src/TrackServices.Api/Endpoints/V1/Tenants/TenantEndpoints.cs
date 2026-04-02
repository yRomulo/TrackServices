using Microsoft.EntityFrameworkCore;
using TrackServices.Api.Endpoints.V1.Tenants.Contracts;
using TrackServices.Domain.Entities;
using TrackServices.Infrastructure.Persistence;

namespace TrackServices.Api.Endpoints.V1.Tenants;

public static class TenantEndpoints
{
    public static RouteGroupBuilder MapTrackServicesTenantsEndpoints(this RouteGroupBuilder group)
    {
        var tenantGroup = group.MapGroup("/tenants").WithTags("Tenants");

        tenantGroup.MapGet(string.Empty, async (TrackServicesDbContext dbContext, CancellationToken cancellationToken) =>
        {
            var tenants = await dbContext.Tenants
                .AsNoTracking()
                .OrderBy(tenant => tenant.Name)
                .Select(tenant => new TenantResponse(
                    Id: tenant.Id,
                    Name: tenant.Name,
                    Slug: tenant.Slug,
                    TaxId: tenant.TaxId,
                    IsActive: tenant.IsActive,
                    CreatedAt: tenant.CreatedAt,
                    UpdatedAt: tenant.UpdatedAt))
                .ToListAsync(cancellationToken);

            return Results.Ok(tenants);
        });

        tenantGroup.MapGet("/{id:guid}", async (Guid id, TrackServicesDbContext dbContext, CancellationToken cancellationToken) =>
        {
            var tenant = await dbContext.Tenants
                .AsNoTracking()
                .Where(currentTenant => currentTenant.Id == id)
                .Select(currentTenant => new TenantResponse(
                    Id: currentTenant.Id,
                    Name: currentTenant.Name,
                    Slug: currentTenant.Slug,
                    TaxId: currentTenant.TaxId,
                    IsActive: currentTenant.IsActive,
                    CreatedAt: currentTenant.CreatedAt,
                    UpdatedAt: currentTenant.UpdatedAt))
                .FirstOrDefaultAsync(cancellationToken);

            return tenant is null ? Results.NotFound() : Results.Ok(tenant);
        });

        tenantGroup.MapPost(string.Empty, async (CreateTenantRequest request, TrackServicesDbContext dbContext, CancellationToken cancellationToken) =>
        {
            var validationErrors = ValidateRequest(request);
            if (validationErrors.Count > 0)
            {
                return Results.ValidationProblem(validationErrors);
            }

            var normalizedSlug = request.Slug!.Trim().ToLowerInvariant();

            var slugAlreadyExists = await dbContext.Tenants
                .AnyAsync(tenant => tenant.Slug == normalizedSlug, cancellationToken);

            if (slugAlreadyExists)
            {
                return Results.Conflict(new { message = "Já existe um tenant com esse slug." });
            }

            var tenant = new Tenant
            {
                Name = request.Name!.Trim(),
                Slug = normalizedSlug,
                TaxId = string.IsNullOrWhiteSpace(request.TaxId) ? null : request.TaxId.Trim(),
                IsActive = request.IsActive ?? true
            };

            dbContext.Tenants.Add(tenant);
            await dbContext.SaveChangesAsync(cancellationToken);

            var response = new TenantResponse(
                Id: tenant.Id,
                Name: tenant.Name,
                Slug: tenant.Slug,
                TaxId: tenant.TaxId,
                IsActive: tenant.IsActive,
                CreatedAt: tenant.CreatedAt,
                UpdatedAt: tenant.UpdatedAt);

            return Results.Created($"/api/v1/tenants/{tenant.Id}", response);
        });

        return group;
    }

    private static Dictionary<string, string[]> ValidateRequest(CreateTenantRequest request)
    {
        var validationErrors = new Dictionary<string, string[]>();

        if (string.IsNullOrWhiteSpace(request.Name) || request.Name.Trim().Length is < 2 or > 200)
        {
            validationErrors[nameof(request.Name)] = ["Informe um nome com 2 a 200 caracteres."];
        }

        if (string.IsNullOrWhiteSpace(request.Slug) || request.Slug.Trim().Length is < 2 or > 120)
        {
            validationErrors[nameof(request.Slug)] = ["Informe um slug com 2 a 120 caracteres."];
        }

        if (!string.IsNullOrWhiteSpace(request.TaxId) && request.TaxId.Trim().Length > 32)
        {
            validationErrors[nameof(request.TaxId)] = ["Informe um documento com até 32 caracteres."];
        }

        return validationErrors;
    }
}