using Microsoft.EntityFrameworkCore;
using TrackServices.Api.Endpoints.V1.ContactLeads.Contracts;
using TrackServices.Domain.Entities;
using TrackServices.Infrastructure.Persistence;

namespace TrackServices.Api.Endpoints.V1.ContactLeads;

public static class ContactLeadEndpoints
{
    private static readonly string[] AllowedPreferredChannels = ["whatsapp", "email"];

    public static RouteGroupBuilder MapTrackServicesContactLeadsEndpoints(this RouteGroupBuilder group)
    {
        var contactLeadGroup = group.MapGroup("/contact-leads").WithTags("Contact Leads");

        contactLeadGroup.MapPost(string.Empty, async (CreateContactLeadRequest request, TrackServicesDbContext dbContext, CancellationToken cancellationToken) =>
        {
            var validationErrors = ValidateRequest(request);
            if (validationErrors.Count > 0)
            {
                return Results.ValidationProblem(validationErrors);
            }

            if (request.TenantId.HasValue)
            {
                var tenantExists = await dbContext.Tenants
                    .AsNoTracking()
                    .AnyAsync(tenant => tenant.Id == request.TenantId.Value, cancellationToken);

                if (!tenantExists)
                {
                    validationErrors[nameof(request.TenantId)] = ["O tenant informado não foi encontrado."];
                    return Results.ValidationProblem(validationErrors);
                }
            }

            var contactLead = new ContactLead
            {
                TenantId = request.TenantId,
                Name = request.Name!.Trim(),
                Company = request.Company!.Trim(),
                Email = request.Email!.Trim().ToLowerInvariant(),
                Phone = request.Phone!.Trim(),
                Service = request.Service!.Trim(),
                Message = request.Message!.Trim(),
                PreferredChannel = string.IsNullOrWhiteSpace(request.PreferredChannel) ? null : request.PreferredChannel.Trim().ToLowerInvariant(),
                Source = string.IsNullOrWhiteSpace(request.Source) ? "website" : request.Source.Trim().ToLowerInvariant()
            };

            dbContext.ContactLeads.Add(contactLead);
            await dbContext.SaveChangesAsync(cancellationToken);

            var response = new ContactLeadResponse(
                Id: contactLead.Id,
                TenantId: contactLead.TenantId,
                Name: contactLead.Name,
                Company: contactLead.Company,
                Email: contactLead.Email,
                Phone: contactLead.Phone,
                Service: contactLead.Service,
                Message: contactLead.Message,
                PreferredChannel: contactLead.PreferredChannel,
                Source: contactLead.Source,
                CreatedAt: contactLead.CreatedAt,
                UpdatedAt: contactLead.UpdatedAt);

            return Results.Created($"/api/v1/contact-leads/{contactLead.Id}", response);
        });

        return contactLeadGroup;
    }

    private static Dictionary<string, string[]> ValidateRequest(CreateContactLeadRequest request)
    {
        var validationErrors = new Dictionary<string, string[]>();

        if (string.IsNullOrWhiteSpace(request.Name) || request.Name.Trim().Length is < 2 or > 120)
        {
            validationErrors[nameof(request.Name)] = ["Informe um nome com 2 a 120 caracteres."];
        }

        if (string.IsNullOrWhiteSpace(request.Company) || request.Company.Trim().Length is < 2 or > 120)
        {
            validationErrors[nameof(request.Company)] = ["Informe a empresa com 2 a 120 caracteres."];
        }

        if (string.IsNullOrWhiteSpace(request.Email) || request.Email.Trim().Length > 254 || !System.Text.RegularExpressions.Regex.IsMatch(request.Email.Trim(), @"^\S+@\S+\.\S+$"))
        {
            validationErrors[nameof(request.Email)] = ["Informe um e-mail válido."];
        }

        var phoneDigits = string.Concat((request.Phone ?? string.Empty).Where(char.IsDigit));
        if (phoneDigits.Length is < 8 or > 20)
        {
            validationErrors[nameof(request.Phone)] = ["Informe um telefone com 8 a 20 dígitos."];
        }

        if (string.IsNullOrWhiteSpace(request.Service) || request.Service.Trim().Length is < 2 or > 120)
        {
            validationErrors[nameof(request.Service)] = ["Informe o serviço com 2 a 120 caracteres."];
        }

        if (string.IsNullOrWhiteSpace(request.Message) || request.Message.Trim().Length is < 10 or > 2000)
        {
            validationErrors[nameof(request.Message)] = ["Descreva sua necessidade com 10 a 2000 caracteres."];
        }

        if (!string.IsNullOrWhiteSpace(request.PreferredChannel) && !AllowedPreferredChannels.Contains(request.PreferredChannel.Trim().ToLowerInvariant()))
        {
            validationErrors[nameof(request.PreferredChannel)] = ["Informe um canal preferencial válido."];
        }

        if (!string.IsNullOrWhiteSpace(request.Source) && request.Source.Trim().Length > 80)
        {
            validationErrors[nameof(request.Source)] = ["Informe uma origem com até 80 caracteres."];
        }

        if (request.TenantId.HasValue && request.TenantId.Value == Guid.Empty)
        {
            validationErrors[nameof(request.TenantId)] = ["Informe um tenant válido."];
        }

        return validationErrors;
    }
}